export const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function normalizeOptions(options) {
  const entries = Array.isArray(options)
    ? options.map((value, index) => [LETTERS[index], value])
    : Object.entries(options || {});
  return Object.fromEntries(entries.filter(([key, value]) => key && String(value || '').trim()));
}

export function normalizeQuestion(question, index) {
  return {
    id: index + 1,
    text: String(question.question || ''),
    options: normalizeOptions(question.options),
    correctAnswer: String(question.answer || '').toUpperCase(),
    explanation: String(question.explanation || '')
  };
}

export function getPreparedQuestions(source) {
  return (source.questions || [])
    .map(normalizeQuestion)
    .filter(question => question.correctAnswer && Object.keys(question.options).length > 0);
}

export function createSourceVersion(questions) {
  let hash = 2166136261;
  const content = JSON.stringify(questions);
  for (let index = 0; index < content.length; index += 1) {
    hash ^= content.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `${questions.length}-${(hash >>> 0).toString(36)}`;
}

export function isQuestionCorrect(question, answer) {
  const correct = [...question.correctAnswer].sort().join('');
  const selected = [...String(answer || '').toUpperCase()].sort().join('');
  return selected === correct;
}

export function shuffleQuestions(questions, random = Math.random) {
  const shuffled = [...questions];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

export function createPracticeSession({ sourceVersion, questions, currentIndex, practiceReturnIndex }) {
  return {
    sourceVersion,
    questionIds: questions.map(question => question.id),
    currentIndex,
    practiceReturnIndex
  };
}

export function getIncorrectQuestions(questions, answers) {
  return questions.filter(question => {
    const answer = answers[question.id] || '';
    return answer.length >= question.correctAnswer.length && !isQuestionCorrect(question, answer);
  });
}

export function getExamResults(questions, answers) {
  const correct = questions.filter(question => isQuestionCorrect(question, answers[question.id] || '')).length;
  return { correct, incorrect: questions.length - correct };
}
