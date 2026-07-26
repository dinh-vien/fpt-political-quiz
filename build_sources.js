const fs = require('fs');
const path = require('path');

const workspace = __dirname;
const sourceNames = {
    mln111: 'MLN111 - Triết học Mác-Lênin'
};

function parseMarkdown(markdown) {
    const questions = [];
    let questionLines = [];
    let options = {};

    for (const line of markdown.replace(/\r\n/g, '\n').split('\n')) {
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

const sourceFiles = [];

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
    if (fs.existsSync(path.join(workspace, outputFile))) sourceFiles.push(outputFile);
}

fs.writeFileSync(
    path.join(workspace, 'sources.js'),
    `window.quizSourceFiles = ${JSON.stringify(sourceFiles, null, 2)};\n`,
    'utf8'
);
console.log(`Đã cập nhật sources.js với ${sourceFiles.length} nguồn.`);
