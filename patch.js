const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<script>\s*\/\/ Dữ liệu 50 câu hỏi từ đề cương đã được format[\s\S]*?const questionsData = \[[\s\S]*?\];/, 
`<script src="questions.js"></script>
    <script>
        // Lấy dữ liệu từ file questions.js
        const questionsData = allQuestions.map((q, i) => ({
            id: i + 1,
            text: q.question,
            options: q.options,
            correctAnswer: q.answer
        }));`);
fs.writeFileSync('index.html', html, 'utf8');
console.log("Patched index.html");
