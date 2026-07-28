export function createInitialState() {
  return {
    activeSourceId: '',
    allQuestions: [],
    answers: {},
    currentIndex: 0,
    exam: null,
    practiceMode: 'all',
    practiceReturnIndex: 0,
    optionOrders: {},
    questions: [],
    revealedQuestionId: null,
    shuffleOptions: false,
    sourceVersion: ''
  };
}
