import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createPracticeSession,
  createSourceVersion,
  getExamResults,
  getIncorrectQuestions,
  isQuestionCorrect
} from '../quiz-core.js';

const questions = [
  { id: 1, correctAnswer: 'A', options: { A: 'Một', B: 'Hai' } },
  { id: 2, correctAnswer: 'AC', options: { A: 'Một', B: 'Hai', C: 'Ba' } },
  { id: 3, correctAnswer: 'B', options: { A: 'Một', B: 'Hai' } }
];

test('chấm đáp án không phụ thuộc thứ tự đáp án nhiều lựa chọn', () => {
  assert.equal(isQuestionCorrect(questions[1], 'CA'), true);
  assert.equal(isQuestionCorrect(questions[1], 'A'), false);
  assert.equal(isQuestionCorrect(questions[1], 'ABC'), false);
});

test('làm lại câu sai chỉ lấy những câu đã trả lời sai hoàn chỉnh', () => {
  const answers = { 1: 'B', 2: 'A', 3: 'B' };
  assert.deepEqual(getIncorrectQuestions(questions, answers).map(question => question.id), [1]);
});

test('khôi phục làm lại câu sai giữ danh sách câu và vị trí quay về', () => {
  const session = createPracticeSession({
    sourceVersion: '3-test',
    questions: [questions[0], questions[2]],
    currentIndex: 1,
    practiceReturnIndex: 60
  });
  assert.deepEqual(session, {
    sourceVersion: '3-test',
    questionIds: [1, 3],
    currentIndex: 1,
    practiceReturnIndex: 60
  });
});

test('kết quả thi tính cả câu sai và chưa trả lời', () => {
  assert.deepEqual(getExamResults(questions, { 1: 'A', 2: 'AC' }), { correct: 2, incorrect: 1 });
});

test('version nguồn đổi khi dữ liệu câu hỏi đổi', () => {
  assert.notEqual(createSourceVersion(questions), createSourceVersion([...questions, questions[0]]));
});
