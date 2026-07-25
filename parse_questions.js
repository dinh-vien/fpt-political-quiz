const fs = require('fs');

function parseFile(filename) {
    const content = fs.readFileSync(filename, 'utf-8');
    const lines = content.replace(/\r\n/g, '\n').split('\n');
    
    const questions = [];
    let q_text = [];
    let options = {};
    
    for (const line of lines) {
        const s = line.trim();
        if (!s) continue;
        
        const optionMatch = s.match(/^([A-E])\s*[.)]\s*(.*)/i);
        const answerMatch = s.match(/^(?:Đáp án:\s*)?([A-E]{1,5})(?:\s*\.?)?(?:\s*\((.*)\))?$/i);
        
        if (optionMatch) {
            const letter = optionMatch[1].toUpperCase();
            const text = optionMatch[2];
            options[letter] = text;
        } else if (answerMatch && Object.keys(options).length > 0) {
            questions.push({
                question: q_text.join('\n').trim(),
                options: { ...options },
                answer: answerMatch[1].toUpperCase(),
                explanation: answerMatch[2] ? answerMatch[2].trim() : ""
            });
            q_text = [];
            options = {};
        } else {
            if (Object.keys(options).length > 0) {
                // If it's something like an alternative question that lacks an answer,
                // we'll just ignore it and start a new question block
                q_text = [s];
                options = {};
            } else {
                q_text.push(s);
            }
        }
    }
    
    return questions;
}

const input = process.argv[2];
const output = process.argv[3];

if (!input || !output) {
    console.error("Usage: node parse_questions.js <input.md> <output.json>");
    process.exit(1);
}

const q = parseFile(input);
const valid_q = q.filter(x => x.question && Object.keys(x.options).length >= 2);

const jsContent = "const allQuestions = " + JSON.stringify(valid_q, null, 2) + ";";
fs.writeFileSync(output, jsContent, 'utf-8');
console.log(`Parsed ${valid_q.length} valid questions out of ${q.length}`);
