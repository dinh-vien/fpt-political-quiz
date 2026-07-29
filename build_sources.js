const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const workspace = __dirname;
const sourceNames = {
    mln111: 'MLN111 - Triết học Mác-Lênin',
    mln122: 'MLN122 - Kinh tế chính trị',
    vnr202: 'VNR202 - Lịch sử Đảng Cộng sản Việt Nam'
};

function parseMarkdown(markdown) {
    const questions = [];
    let questionLines = [];
    let options = {};
    let inCodeBlock = false;

    for (const line of markdown.replace(/\r\n/g, '\n').split('\n')) {
        if (/^\s*```/.test(line)) {
            inCodeBlock = !inCodeBlock;
            questionLines.push(line.trim());
            continue;
        }

        if (inCodeBlock) {
            questionLines.push(line);
            continue;
        }

        const text = line.trim();
        if (!text) continue;

        const optionMatch = text.match(/^([A-Z])[.)](?![A-Z])\s*(.*)/i);
        const answerMatch = text.match(/^(?:Đáp án:\s*)?([A-Z]+)(?:\s*\.?)?(?:\s*\((.*)\))?$/i);

        if (optionMatch) {
            options[optionMatch[1].toUpperCase()] = optionMatch[2];
        } else if (answerMatch && Object.keys(options).length) {
            questions.push({
                question: questionLines.join('\n').trim(),
                options: { ...options },
                answer: answerMatch[1].toUpperCase(),
                explanation: answerMatch[2] ? answerMatch[2].trim() : ''
            });
            questionLines = [];
            options = {};
        } else if (Object.keys(options).length) {
            questionLines = [text];
            options = {};
        } else {
            questionLines.push(text);
        }
    }

    return questions.filter(question => question.answer && Object.values(question.options).filter(value => String(value || '').trim()).length >= 1);
}

function sourceId(filename) {
    return path.basename(filename, '.md').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function contentVersion(content) {
    return crypto.createHash('sha256').update(content).digest('hex').slice(0, 12);
}

const requestedFile = process.argv.slice(2).find(argument => argument.toLowerCase().endsWith('.md'));
const force = process.argv.includes('--force');
const markdownFiles = fs.readdirSync(workspace)
    .filter(filename => filename.toLowerCase().endsWith('.md') && filename.toLowerCase() !== 'readme.md');
const selectedMarkdownFiles = requestedFile
    ? markdownFiles.filter(filename => filename.toLowerCase() === path.basename(requestedFile).toLowerCase())
    : markdownFiles;

if (requestedFile && !selectedMarkdownFiles.length) {
    throw new Error(`Không tìm thấy ${requestedFile}.`);
}

if (force && !requestedFile) {
    throw new Error('Hãy chỉ định file Markdown khi dùng --force, ví dụ: node build_sources.js ten-mon.md --force');
}

const sourceCatalog = [];

for (const markdownFile of selectedMarkdownFiles) {
    const baseName = path.basename(markdownFile, '.md');
    const outputFile = `${baseName}.js`;
    const outputPath = path.join(workspace, outputFile);

    if (force || !fs.existsSync(outputPath)) {
        const questions = parseMarkdown(fs.readFileSync(path.join(workspace, markdownFile), 'utf8'));
        if (!questions.length) {
            console.warn(`Bỏ qua ${markdownFile}: không có câu hỏi hợp lệ.`);
            continue;
        }

        const source = {
            name: sourceNames[sourceId(markdownFile)] || baseName.toUpperCase(),
            questions
        };
        const content = `window.quizSources = window.quizSources || {};\n\nwindow.quizSources[${JSON.stringify(sourceId(markdownFile))}] = ${JSON.stringify(source, null, 2)};\n`;
        fs.writeFileSync(outputPath, content, 'utf8');
        console.log(`Đã tạo ${outputFile}: ${questions.length} câu.`);
    }

}

for (const markdownFile of markdownFiles) {
    const outputFile = `${path.basename(markdownFile, '.md')}.js`;
    if (fs.existsSync(path.join(workspace, outputFile))) {
        const id = sourceId(markdownFile);
        const count = parseMarkdown(fs.readFileSync(path.join(workspace, markdownFile), 'utf8')).length;
        sourceCatalog.push({
            id,
            name: sourceNames[id] || path.basename(markdownFile, '.md').toUpperCase(),
            file: outputFile,
            version: contentVersion(fs.readFileSync(path.join(workspace, outputFile), 'utf8')),
            count
        });
    }
}

const sourceCatalogContent = `window.quizSourceCatalog = ${JSON.stringify(sourceCatalog, null, 2)};\n`;
fs.writeFileSync(path.join(workspace, 'sources.js'), sourceCatalogContent, 'utf8');

const indexPath = path.join(workspace, 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');
const sourceScriptPattern = /<script src="sources\.js(?:\?v=[^"]*)?" defer><\/script>/;
if (!sourceScriptPattern.test(indexContent)) {
    throw new Error('Không tìm thấy thẻ tải sources.js trong index.html.');
}
const versionedIndexContent = indexContent.replace(
    sourceScriptPattern,
    `<script src="sources.js?v=${contentVersion(sourceCatalogContent)}" defer></script>`
);
fs.writeFileSync(indexPath, versionedIndexContent, 'utf8');
console.log(`Đã cập nhật sources.js với ${sourceCatalog.length} nguồn.`);
