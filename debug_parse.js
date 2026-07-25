const fs = require('fs');
const content = fs.readFileSync('question.md', 'utf-8');
const lines = content.replace(/\r\n/g, '\n').split('\n');

let aCount = 0;
let missedBlocks = [];
let currentLines = [];

for (const line of lines) {
    const s = line.trim();
    if (s.match(/^A\s*[.)]/i)) {
        aCount++;
    }
}
console.log(`Total questions starting with A.: ${aCount}`);

// Let's re-run the parse logic and log the ones that get dropped.
const questions = [];
let q_text = [];
let options = {};
let lastAnswer = null;

for (const line of lines) {
    const s = line.trim();
    if (!s) continue;
    
    // Some options might be lower case or missing dot
    const optionMatch = s.match(/^([a-eA-E])\s*[.)]\s*(.*)/);
    // Some answers might have spaces, dots, or be inside parentheses, or be just a letter
    // Let's match just a single letter or multiple letters A-E.
    // Also, some answers are like: "A" or "A " or "Đáp án: A"
    const answerMatch = s.match(/^(?:Đáp án:\s*)?([A-E]{1,5})(?:\s*\.?)?$/i);
    
    if (optionMatch) {
        const letter = optionMatch[1].toUpperCase();
        const text = optionMatch[2];
        options[letter] = text;
    } else if (answerMatch && Object.keys(options).length > 0) {
        questions.push({
            question: q_text.join('\n').trim(),
            options: { ...options },
            answer: answerMatch[1].toUpperCase()
        });
        q_text = [];
        options = {};
    } else {
        if (Object.keys(options).length > 0) {
            // We have options but we hit something that is not an answer.
            // This could be a new question starting without an answer?
            // Or a multi-line option?
            // Or the answer is formatted weirdly.
            
            // Just treat it as a new question
            // Wait, let's log these instances.
            missedBlocks.push({ q: q_text.join('\n'), opts: options, nextLine: s });
            
            q_text = [s];
            options = {};
        } else {
            q_text.push(s);
        }
    }
}

const valid_q = questions.filter(x => x.question && Object.keys(x.options).length >= 2);
console.log(`Parsed ${valid_q.length} valid questions out of ${questions.length}`);
console.log(`Dropped blocks: ${missedBlocks.length}`);

// Print a few dropped blocks to see why
for(let i=0; i<Math.min(10, missedBlocks.length); i++) {
    console.log("--- DROPPED ---");
    console.log("Q:", missedBlocks[i].q.substring(0, 50) + "...");
    console.log("Opts:", Object.keys(missedBlocks[i].opts));
    console.log("Next Line:", missedBlocks[i].nextLine);
}
