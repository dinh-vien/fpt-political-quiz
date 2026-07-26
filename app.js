(() => {
  'use strict';

  const STORAGE_PREFIX = 'quiz:';
  const EXAM_QUESTION_COUNT = 60;
  const EXAM_DURATION_MS = 15 * 60 * 1000;
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const state = {
    activeSourceId: '',
    allQuestions: [],
    answers: {},
    currentIndex: 0,
    exam: null,
    practiceMode: 'all',
    practiceReturnIndex: 0,
    practiceReturnToStart: false,
    questions: [],
    revealedQuestionId: null,
    sourceVersion: ''
  };
  const sourceLoadPromises = new Map();
  let examTimerIntervalId = null;
  let pendingExamConfirmation = null;

  const elements = {
    answers: document.getElementById('dynamicAnswers'),
    acceptExamConfirm: document.getElementById('acceptExamConfirmBtn'),
    cancelExamConfirm: document.getElementById('cancelExamConfirmBtn'),
    correctAnswer: document.getElementById('correctAnswerDisplay'),
    disableExamTimer: document.getElementById('disableExamTimerBtn'),
    examExit: document.getElementById('exitExamBtn'),
    examModal: document.getElementById('examResultModal'),
    examModalExit: document.getElementById('exitExamModalBtn'),
    examModalMessage: document.getElementById('examModalMessage'),
    examModalScore: document.getElementById('examModalScore'),
    examModalSummary: document.getElementById('examModalSummary'),
    examModalTitle: document.getElementById('examModalTitle'),
    examConfirm: document.getElementById('examConfirmModal'),
    examConfirmMessage: document.getElementById('examConfirmMessage'),
    examNew: document.getElementById('newExamBtn'),
    examRetake: document.getElementById('retakeExamBtn'),
    examRetry: document.getElementById('retryExamBtn'),
    examStart: document.getElementById('startExamBtn'),
    examSubmit: document.getElementById('submitExamBtn'),
    examTimer: document.getElementById('examTimer'),
    examTimerControls: document.getElementById('examTimerControls'),
    explanation: document.getElementById('explanationDisplay'),
    instruction: document.getElementById('instructionDisplay'),
    jump: document.getElementById('jumpInput'),
    next: document.getElementById('nextBtn'),
    practiceMode: document.getElementById('practiceModeDisplay'),
    previous: document.getElementById('prevBtn'),
    progress: document.getElementById('progressBar'),
    question: document.getElementById('qContentDisplay'),
    questionNumber: document.getElementById('qNumberDisplay'),
    quiz: document.getElementById('quizContainer'),
    resetSource: document.getElementById('resetSourceBtn'),
    result: document.getElementById('resultBox'),
    resultStatus: document.getElementById('resultStatus'),
    retryIncorrect: document.getElementById('retryIncorrectBtn'),
    showAll: document.getElementById('showAllBtn'),
    source: document.getElementById('sourceSelect'),
    options: document.getElementById('dynamicOptions'),
    total: document.getElementById('totalQuestionsDisplay')
  };

  function storageKey(name) {
    return `${STORAGE_PREFIX}${state.activeSourceId}:${name}`;
  }

  function readStorage(name, fallback) {
    try {
      const value = localStorage.getItem(storageKey(name));
      return value === null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  }

  function writeStorage(name, value) {
    try {
      localStorage.setItem(storageKey(name), JSON.stringify(value));
    } catch (error) {
      console.warn('Không thể lưu tiến độ làm bài.', error);
    }
  }

  function removeStorage(name) {
    try {
      localStorage.removeItem(storageKey(name));
    } catch (error) {
      console.warn('Không thể xóa tiến độ làm bài.', error);
    }
  }

  function normalizeOptions(options) {
    const entries = Array.isArray(options)
      ? options.map((value, index) => [LETTERS[index], value])
      : Object.entries(options || {});
    return Object.fromEntries(entries.filter(([key, value]) => key && String(value || '').trim()));
  }

  function normalizeQuestion(question, index) {
    return {
      id: index + 1,
      text: String(question.question || ''),
      options: normalizeOptions(question.options),
      correctAnswer: String(question.answer || '').toUpperCase(),
      explanation: String(question.explanation || '')
    };
  }

  function getPreparedQuestions(source) {
    return (source.questions || [])
      .map(normalizeQuestion)
      .filter(question => question.correctAnswer && Object.keys(question.options).length > 0);
  }

  function createSourceVersion(questions) {
    let hash = 2166136261;
    const content = JSON.stringify(questions);
    for (let index = 0; index < content.length; index += 1) {
      hash ^= content.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return `${questions.length}-${(hash >>> 0).toString(36)}`;
  }

  function createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function loadScript(source) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = source;
      script.async = false;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Không tải được nguồn câu hỏi: ${source}`));
      document.head.append(script);
    });
  }

  function getSourceCatalog() {
    return Array.isArray(window.quizSourceCatalog) ? window.quizSourceCatalog : [];
  }

  async function loadSource(sourceId) {
    if (window.quizSources?.[sourceId]) return window.quizSources[sourceId];
    const sourceInfo = getSourceCatalog().find(source => source.id === sourceId);
    if (!sourceInfo) throw new Error(`Không tìm thấy cấu hình nguồn câu hỏi: ${sourceId}`);

    if (!sourceLoadPromises.has(sourceId)) sourceLoadPromises.set(sourceId, loadScript(sourceInfo.file));
    try {
      await sourceLoadPromises.get(sourceId);
    } catch (error) {
      sourceLoadPromises.delete(sourceId);
      throw error;
    }

    const source = window.quizSources?.[sourceId];
    if (!source) throw new Error(`Nguồn ${sourceInfo.file} không cung cấp dữ liệu ${sourceId}.`);
    return source;
  }

  function readGlobalActiveSource() {
    try {
      return localStorage.getItem(`${STORAGE_PREFIX}active-source`) || '';
    } catch {
      return '';
    }
  }

  function saveGlobalActiveSource() {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}active-source`, state.activeSourceId);
    } catch (error) {
      console.warn('Không thể lưu nguồn câu hỏi đang chọn.', error);
    }
  }

  function renderSourceSelect() {
    const sources = getSourceCatalog();
    elements.source.replaceChildren();
    if (!sources.length) throw new Error('Không tìm thấy nguồn câu hỏi. Hãy kiểm tra sources.js.');

    for (const source of sources) {
      const countLabel = Number.isInteger(source.count) ? ` (${source.count} câu)` : '';
      elements.source.add(new Option(`${source.name}${countLabel}`, source.id));
    }

    const storedSourceId = readGlobalActiveSource();
    state.activeSourceId = sources.some(source => source.id === storedSourceId) ? storedSourceId : sources[0].id;
    elements.source.value = state.activeSourceId;
  }

  function setSourceLoading(isLoading) {
    elements.source.disabled = isLoading;
    if (!isLoading) return;
    elements.question.textContent = 'Đang tải câu hỏi…';
    elements.answers.replaceChildren();
    elements.options.replaceChildren();
    elements.result.hidden = true;
  }

  function getQuestionsByIds(ids) {
    const questionMap = new Map(state.allQuestions.map(question => [question.id, question]));
    return ids.map(id => questionMap.get(id)).filter(Boolean);
  }

  function getSavedExamSession() {
    const session = readStorage('exam-session', null);
    if (!session || session.sourceVersion !== state.sourceVersion || !Array.isArray(session.questionIds)) return null;
    const questions = getQuestionsByIds(session.questionIds);
    return questions.length === session.questionIds.length ? session : null;
  }

  async function switchSource(sourceId) {
    setSourceLoading(true);
    const source = await loadSource(sourceId);

    state.activeSourceId = sourceId;
    state.allQuestions = getPreparedQuestions(source);
    state.sourceVersion = createSourceVersion(state.allQuestions);
    state.practiceMode = 'all';
    state.answers = readStorage('source-version', '') === state.sourceVersion ? readStorage('answers', {}) : {};
    if (readStorage('source-version', '') !== state.sourceVersion) writeStorage('source-version', state.sourceVersion);

    state.exam = getSavedExamSession();
    if (state.exam) {
      state.questions = getQuestionsByIds(state.exam.questionIds);
      state.currentIndex = Math.min(Math.max(Number(state.exam.currentIndex) || 0, 0), Math.max(state.questions.length - 1, 0));
    } else {
      state.questions = state.allQuestions;
      state.currentIndex = Number(readStorage('current-index', 0)) || 0;
      if (state.currentIndex < 0 || state.currentIndex >= state.questions.length) state.currentIndex = 0;
    }

    const sourceOption = [...elements.source.options].find(option => option.value === sourceId);
    if (sourceOption) sourceOption.textContent = `${source.name} (${source.questions.length} câu)`;
    elements.source.value = sourceId;
    elements.quiz.classList.toggle('exam-mode', Boolean(state.exam));
    setSourceLoading(false);
    saveGlobalActiveSource();
    renderQuestion();
  }

  function savePracticeProgress() {
    writeStorage('current-index', state.currentIndex);
    writeStorage('answers', state.answers);
  }

  function saveExamSession() {
    if (!state.exam) return;
    state.exam.currentIndex = state.currentIndex;
    writeStorage('exam-session', state.exam);
  }

  function getExamQuestionHistory() {
    const savedHistory = readStorage('exam-correct-question-history', null);
    if (!savedHistory || savedHistory.sourceVersion !== state.sourceVersion || !Array.isArray(savedHistory.questionIds)) return [];
    const validIds = new Set(state.allQuestions.map(question => question.id));
    return [...new Set(savedHistory.questionIds)].filter(id => validIds.has(id));
  }

  function saveExamQuestionHistory(questionIds) {
    writeStorage('exam-correct-question-history', {
      sourceVersion: state.sourceVersion,
      questionIds: [...new Set(questionIds)]
    });
  }

  function addExamQuestionsToHistory(questionIds) {
    saveExamQuestionHistory([...getExamQuestionHistory(), ...questionIds]);
  }

  function getAnswerStore() {
    return state.exam ? state.exam.answers : state.answers;
  }

  function isQuestionCorrect(question, answer) {
    const correct = [...question.correctAnswer].sort().join('');
    return answer.length >= question.correctAnswer.length && answer.toUpperCase() === correct;
  }

  function renderQuestion() {
    const question = state.questions[state.currentIndex];
    elements.total.textContent = String(state.questions.length);
    elements.jump.max = String(Math.max(state.questions.length, 1));
    if (!question) {
      renderEmptySource();
      return;
    }

    elements.questionNumber.textContent = `Câu: ${state.currentIndex + 1}`;
    elements.jump.value = String(state.currentIndex + 1);
    elements.question.textContent = question.text;
    elements.instruction.textContent = `(Chọn ${question.correctAnswer.length} đáp án)`;
    renderAnswerControls(question);
    renderOptions(question);
    if (state.exam) renderExamResult();
    else renderPracticeResult(question);
    renderPracticeControls();
    renderExamControls();
    startExamTimer();
    updateNavigation();
    updateProgress();
  }

  function renderEmptySource() {
    elements.question.textContent = 'Nguồn này không có câu hỏi hợp lệ.';
    elements.answers.replaceChildren();
    elements.options.replaceChildren();
    elements.result.hidden = true;
    elements.previous.disabled = true;
    elements.next.disabled = true;
    renderPracticeControls();
    renderExamControls();
    updateProgress();
  }

  function renderAnswerControls(question) {
    const isRevealed = !state.exam && state.revealedQuestionId === question.id;
    const selected = isRevealed ? question.correctAnswer : (getAnswerStore()[question.id] || '');
    const inputType = question.correctAnswer.length > 1 ? 'checkbox' : 'radio';
    const fragment = document.createDocumentFragment();
    fragment.append(createElement('p', 'answer-heading', 'Chọn đáp án của bạn:'));

    for (const key of Object.keys(question.options)) {
      const label = createElement('label', 'answer-row');
      const input = document.createElement('input');
      input.type = inputType;
      input.name = 'userAnswer';
      input.value = key;
      input.checked = selected.includes(key);
      input.disabled = Boolean(state.exam?.submitted) || isRevealed;
      input.setAttribute('aria-label', `Đáp án ${key}`);
      label.append(input, createElement('span', 'answer-label', key));
      fragment.append(label);
    }
    elements.answers.replaceChildren(fragment);
  }

  function renderOptions(question) {
    const fragment = document.createDocumentFragment();
    for (const [key, value] of Object.entries(question.options)) {
      const option = createElement('div', 'option-text');
      option.append(createElement('span', 'option-letter', `${key}.`), createElement('span', '', value));
      fragment.append(option);
    }
    elements.options.replaceChildren(fragment);
  }

  function renderPracticeResult(question) {
    const answer = state.answers[question.id] || '';
    const isRevealed = state.revealedQuestionId === question.id;
    if (!isRevealed && answer.length < question.correctAnswer.length) {
      elements.result.hidden = true;
      return;
    }
    const isCorrect = isQuestionCorrect(question, answer);
    elements.result.hidden = false;
    elements.result.className = `result-container ${isRevealed || isCorrect ? 'result-correct' : 'result-incorrect'}`;
    elements.resultStatus.textContent = isRevealed && answer.length < question.correctAnswer.length
      ? 'Đáp án tham khảo'
      : isCorrect ? '✓ Chính xác!' : '✗ Chưa chính xác';
    elements.correctAnswer.textContent = `Đáp án đúng: ${question.correctAnswer}`;
    elements.explanation.textContent = question.explanation;
  }

  function getExamResults() {
    const answers = state.exam?.answers || {};
    const correctQuestions = state.questions.filter(question => isQuestionCorrect(question, answers[question.id] || ''));
    return { correct: correctQuestions.length, incorrect: state.questions.length - correctQuestions.length };
  }

  function renderExamResult() {
    elements.result.hidden = true;
    if (!state.exam.submitted) {
      elements.examModal.hidden = true;
      return;
    }

    const results = getExamResults();
    if (state.exam.round === 0) {
      const score = ((results.correct / state.questions.length) * 10).toFixed(2);
      elements.examModalTitle.textContent = state.exam.autoSubmitted ? 'Hết giờ — kết quả bài thi' : 'Kết quả bài thi';
      elements.examModalScore.textContent = `${score}/10`;
      elements.examModalSummary.textContent = `Đúng ${results.correct}/${state.questions.length} câu · Sai hoặc chưa làm: ${results.incorrect} câu.`;
    } else {
      elements.examModalTitle.textContent = `Kết quả làm lại lần ${state.exam.round}`;
      elements.examModalScore.textContent = `${results.correct}/${state.questions.length} câu đúng`;
      elements.examModalSummary.textContent = `Đã sửa đúng ${results.correct} câu · Còn sai: ${results.incorrect} câu.`;
    }
    elements.examModalMessage.textContent = results.incorrect
      ? 'Bạn có thể làm lại câu sai, thi lại đúng đề này, thi một đề khác hoặc thoát.'
      : 'Xuất sắc! Bạn có thể thi lại đề này, thi một đề khác hoặc thoát.';
    elements.examModal.hidden = false;
  }

  function isQuestionIncorrect(question) {
    const answer = state.answers[question.id] || '';
    return answer.length >= question.correctAnswer.length && !isQuestionCorrect(question, answer);
  }

  function getIncorrectQuestions() {
    return state.allQuestions.filter(isQuestionIncorrect);
  }

  function renderPracticeControls() {
    if (state.exam) return;
    const incorrectCount = getIncorrectQuestions().length;
    const isRetryMode = state.practiceMode === 'incorrect';
    elements.retryIncorrect.disabled = incorrectCount === 0;
    elements.resetSource.disabled = state.allQuestions.length === 0;
    elements.showAll.hidden = !isRetryMode;
    elements.practiceMode.hidden = !isRetryMode;
    elements.practiceMode.textContent = isRetryMode ? `Đang làm lại ${state.questions.length} câu đã sai.` : '';
  }

  function renderExamControls() {
    const active = Boolean(state.exam);
    const results = active && state.exam.submitted ? getExamResults() : null;
    elements.source.disabled = active;
    elements.examStart.hidden = active;
    elements.examStart.disabled = state.allQuestions.length === 0;
    elements.examSubmit.hidden = !active || state.exam.submitted;
    elements.examRetry.hidden = !active || !state.exam.submitted || results.incorrect === 0;
    elements.examExit.hidden = !active;
    elements.disableExamTimer.hidden = !active || state.exam.submitted || !hasExamTimer(state.exam);
    elements.disableExamTimer.textContent = state.exam?.timerEnabled ? 'Ơ sao lại tắt' : 'Bật lại đê, sợ à';
  }

  function hasExamTimer(exam) {
    return Boolean(exam && (exam.timerEnabled || Number.isFinite(exam.pausedRemainingMs)));
  }

  function requestExamConfirmation(message, onConfirm) {
    pendingExamConfirmation = onConfirm;
    elements.examConfirmMessage.textContent = message;
    elements.examConfirm.hidden = false;
  }

  function closeExamConfirmation() {
    pendingExamConfirmation = null;
    elements.examConfirm.hidden = true;
  }

  function stopExamTimer() {
    if (examTimerIntervalId !== null) {
      window.clearInterval(examTimerIntervalId);
      examTimerIntervalId = null;
    }
  }

  function formatRemainingTime(remainingMs) {
    const totalSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }

  function updateExamTimer() {
    const exam = state.exam;
    if (!hasExamTimer(exam) || exam.submitted) {
      elements.examTimerControls.hidden = true;
      return false;
    }

    const remainingMs = exam.timerEnabled ? exam.deadline - Date.now() : exam.pausedRemainingMs;
    elements.examTimerControls.hidden = false;
    elements.examTimer.textContent = exam.timerEnabled
      ? `Thời gian còn lại: ${formatRemainingTime(remainingMs)}`
      : `Thời gian đã dừng: ${formatRemainingTime(remainingMs)}`;
    elements.examTimer.classList.toggle('timer-critical', remainingMs <= 60 * 1000);
    return exam.timerEnabled && remainingMs <= 0;
  }

  function startExamTimer() {
    stopExamTimer();
    if (!hasExamTimer(state.exam) || state.exam.submitted) {
      elements.examTimerControls.hidden = true;
      return;
    }
    if (!state.exam.timerEnabled) {
      updateExamTimer();
      return;
    }
    if (updateExamTimer()) {
      submitExam(true);
      return;
    }
    examTimerIntervalId = window.setInterval(() => {
      if (updateExamTimer()) {
        stopExamTimer();
        submitExam(true);
      }
    }, 1000);
  }

  function updateNavigation() {
    const disabled = state.questions.length < 2;
    elements.previous.disabled = disabled;
    elements.next.disabled = disabled;
  }

  function updateProgress() {
    const answers = getAnswerStore();
    const total = state.questions.length;
    const completed = state.questions.filter(question => (answers[question.id] || '').length >= question.correctAnswer.length).length;
    const percent = total ? Math.round((completed / total) * 100) : 0;
    elements.progress.style.width = `${percent}%`;
    elements.progress.setAttribute('aria-valuenow', String(percent));
  }

  function getSelectedAnswer() {
    return [...elements.answers.querySelectorAll('input:checked')].map(input => input.value).sort().join('');
  }

  function handleAnswerChange() {
    const question = state.questions[state.currentIndex];
    if (!question || state.exam?.submitted) return;
    const answer = getSelectedAnswer();

    if (state.exam) {
      state.exam.answers[question.id] = answer;
      saveExamSession();
      renderExamControls();
      updateProgress();
      return;
    }

    state.answers[question.id] = answer;
    savePracticeProgress();
    renderPracticeResult(question);
    renderPracticeControls();
    updateProgress();
  }

  function navigate(direction) {
    const total = state.questions.length;
    if (total < 2) return;
    state.currentIndex = (state.currentIndex + direction + total) % total;
    if (state.exam) saveExamSession();
    else savePracticeProgress();
    renderQuestion();
  }

  function jumpToQuestion() {
    const target = Number(elements.jump.value);
    if (!Number.isInteger(target) || target < 1 || target > state.questions.length) {
      elements.jump.value = String(state.currentIndex + 1);
      return;
    }
    state.currentIndex = target - 1;
    if (state.exam) saveExamSession();
    else savePracticeProgress();
    renderQuestion();
  }

  function resetCurrentSource() {
    if (!state.allQuestions.length || !window.confirm('Xóa toàn bộ đáp án đã chọn và làm lại môn này từ đầu?')) return;
    state.answers = {};
    state.questions = state.allQuestions;
    state.practiceMode = 'all';
    state.practiceReturnIndex = 0;
    state.practiceReturnToStart = false;
    state.currentIndex = 0;
    savePracticeProgress();
    renderQuestion();
  }

  function retryIncorrectQuestions() {
    const incorrectQuestions = getIncorrectQuestions();
    if (!incorrectQuestions.length || !window.confirm(`Làm lại ${incorrectQuestions.length} câu đã sai? Đáp án sai cũ sẽ được xóa.`)) return;
    state.practiceReturnToStart = state.allQuestions.every(question => {
      const answer = state.answers[question.id] || '';
      return answer.length >= question.correctAnswer.length;
    });
    for (const question of incorrectQuestions) delete state.answers[question.id];
    state.practiceReturnIndex = state.currentIndex;
    state.questions = incorrectQuestions;
    state.practiceMode = 'incorrect';
    state.currentIndex = 0;
    savePracticeProgress();
    renderQuestion();
  }

  function showAllQuestions() {
    state.questions = state.allQuestions;
    state.practiceMode = 'all';
    state.currentIndex = state.practiceReturnToStart ? 0 : state.practiceReturnIndex;
    if (state.currentIndex < 0 || state.currentIndex >= state.questions.length) state.currentIndex = 0;
    state.practiceReturnIndex = 0;
    state.practiceReturnToStart = false;
    savePracticeProgress();
    renderQuestion();
  }

  function shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const random = new Uint32Array(1);
      const randomValue = window.crypto?.getRandomValues ? (window.crypto.getRandomValues(random), random[0]) : Math.floor(Math.random() * 0xFFFFFFFF);
      const swapIndex = randomValue % (index + 1);
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  }

  function createRandomExamQuestionIds(previousIds = []) {
    const count = Math.min(EXAM_QUESTION_COUNT, state.allQuestions.length);
    const previousSet = new Set(previousIds);
    if (!previousSet.size || state.allQuestions.length <= count) {
      return shuffleQuestions(state.allQuestions).slice(0, count).map(question => question.id);
    }

    const newQuestions = state.allQuestions.filter(question => !previousSet.has(question.id));
    const reusedQuestions = state.allQuestions.filter(question => previousSet.has(question.id));
    const selected = [
      ...shuffleQuestions(newQuestions).slice(0, count),
      ...shuffleQuestions(reusedQuestions).slice(0, Math.max(count - newQuestions.length, 0))
    ];

    return shuffleQuestions(selected).map(question => question.id);
  }

  function getNewExamQuestionIds() {
    const count = Math.min(EXAM_QUESTION_COUNT, state.allQuestions.length);
    const usedIds = getExamQuestionHistory();
    const usedSet = new Set(usedIds);
    const unusedQuestions = state.allQuestions.filter(question => !usedSet.has(question.id));

    if (unusedQuestions.length < count && usedIds.length) {
      const remaining = unusedQuestions.length;
      window.alert(`Bạn đã làm đúng gần hết ngân hàng câu hỏi của môn này. Chỉ còn ${remaining} câu bạn chưa làm đúng, không đủ để tạo đề ${count} câu.\n\nHệ thống sẽ tự động reset vòng trộn. Đề mới có thể có lại các câu bạn đã làm đúng.`);
      saveExamQuestionHistory([]);
      return createRandomExamQuestionIds();
    }

    return shuffleQuestions(unusedQuestions).slice(0, count).map(question => question.id);
  }

  function beginExam(questionIds, timerEnabled = true) {
    state.exam = {
      answers: {},
      currentIndex: 0,
      initialTotal: questionIds.length,
      originalQuestionIds: [...questionIds],
      questionIds: [...questionIds],
      round: 0,
      sourceVersion: state.sourceVersion,
      submitted: false,
      autoSubmitted: false,
      timerEnabled: Boolean(timerEnabled),
      deadline: timerEnabled ? Date.now() + EXAM_DURATION_MS : null,
      pausedRemainingMs: timerEnabled ? null : EXAM_DURATION_MS
    };
    state.questions = getQuestionsByIds(state.exam.questionIds);
    state.currentIndex = 0;
    elements.examModal.hidden = true;
    elements.quiz.classList.add('exam-mode');
    saveExamSession();
    renderQuestion();
  }

  function startExam() {
    if (!state.allQuestions.length) return;
    const questionIds = getNewExamQuestionIds();
    if (!questionIds) return;
    const count = Math.min(EXAM_QUESTION_COUNT, state.allQuestions.length);
    const message = count === EXAM_QUESTION_COUNT
      ? 'Bắt đầu bài thi gồm 60 câu ngẫu nhiên?'
      : `Ngân hàng chỉ có ${count} câu. Bắt đầu bài thi với toàn bộ ${count} câu?`;
    if (!window.confirm(message)) return;

    beginExam(questionIds);
  }

  function retakeSameExam() {
    if (!state.exam?.submitted) return;
    const questionIds = state.exam.originalQuestionIds || state.exam.questionIds;
    beginExam(questionIds);
  }

  function startDifferentExam() {
    if (!state.exam?.submitted) return;
    const questionIds = getNewExamQuestionIds();
    if (!questionIds) return;
    beginExam(questionIds);
  }

  function submitExam(isAutomatic = false, confirmed = false) {
    if (!state.exam || state.exam.submitted) return;
    const unanswered = state.questions.filter(question => !(state.exam.answers[question.id] || '')).length;
    const message = unanswered ? `Bạn còn ${unanswered} câu chưa trả lời. Vẫn nộp bài?` : 'Bạn chắc chắn muốn nộp bài?';
    if (!isAutomatic && !confirmed) {
      requestExamConfirmation(message, () => submitExam(false, true));
      return;
    }
    state.exam.submitted = true;
    state.exam.autoSubmitted = isAutomatic;
    addExamQuestionsToHistory(
      state.questions
        .filter(question => isQuestionCorrect(question, state.exam.answers[question.id] || ''))
        .map(question => question.id)
    );
    closeExamConfirmation();
    stopExamTimer();
    saveExamSession();
    renderQuestion();
  }

  function toggleExamTimer() {
    if (!state.exam || state.exam.submitted) return;
    if (state.exam.timerEnabled) {
      state.exam.pausedRemainingMs = Math.max(0, state.exam.deadline - Date.now());
      state.exam.timerEnabled = false;
      state.exam.deadline = null;
      stopExamTimer();
    } else {
      state.exam.timerEnabled = true;
      state.exam.deadline = Date.now() + Math.max(0, state.exam.pausedRemainingMs || 0);
      state.exam.pausedRemainingMs = null;
    }
    saveExamSession();
    renderQuestion();
  }

  function retryExamIncorrectQuestions() {
    if (!state.exam?.submitted) return;
    const incorrectQuestions = state.questions.filter(question => !isQuestionCorrect(question, state.exam.answers[question.id] || ''));
    if (!incorrectQuestions.length) return;

    state.exam.answers = {};
    state.exam.questionIds = incorrectQuestions.map(question => question.id);
    state.exam.currentIndex = 0;
    state.exam.round += 1;
    state.exam.submitted = false;
    state.exam.autoSubmitted = false;
    state.exam.timerEnabled = false;
    state.exam.deadline = null;
    state.exam.pausedRemainingMs = null;
    state.questions = incorrectQuestions;
    state.currentIndex = 0;
    elements.examModal.hidden = true;
    saveExamSession();
    renderQuestion();
  }

  function clearExamSession() {
    stopExamTimer();
    removeStorage('exam-session');
    state.exam = null;
    state.questions = state.allQuestions;
    state.practiceMode = 'all';
    state.currentIndex = Number(readStorage('current-index', 0)) || 0;
    if (state.currentIndex < 0 || state.currentIndex >= state.questions.length) state.currentIndex = 0;
    elements.examModal.hidden = true;
    elements.quiz.classList.remove('exam-mode');
  }

  function exitExam(shouldConfirm = true) {
    if (!state.exam) return true;
    if (shouldConfirm) {
      requestExamConfirmation('Thoát chế độ thi? Phiên thi hiện tại sẽ bị xóa.', () => exitExam(false));
      return false;
    }
    closeExamConfirmation();
    clearExamSession();
    renderQuestion();
    return true;
  }

  function revealAnswer() {
    if (state.exam) return;
    const question = state.questions[state.currentIndex];
    if (!question) return;
    state.revealedQuestionId = state.revealedQuestionId === question.id ? null : question.id;
    renderQuestion();
  }

  function isTypingTarget(target) {
    return target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement;
  }

  function handleKeyboard(event) {
    const isAnswerInput = event.target instanceof HTMLInputElement
      && (event.target.type === 'radio' || event.target.type === 'checkbox');
    if (event.code === 'Space' && !state.exam && isAnswerInput) {
      event.preventDefault();
      revealAnswer();
      return;
    }
    if (isTypingTarget(event.target)) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      navigate(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      navigate(1);
    } else if (event.code === 'Space' && !state.exam) {
      event.preventDefault();
      revealAnswer();
    }
  }

  async function handleSourceChange(event) {
    const sourceId = event.target.value;
    if (state.exam && sourceId !== state.activeSourceId && !exitExam(true)) {
      event.target.value = state.activeSourceId;
      return;
    }
    await switchSource(sourceId);
  }

  function bindEvents() {
    elements.source.addEventListener('change', event => handleSourceChange(event).catch(showLoadError));
    elements.answers.addEventListener('change', handleAnswerChange);
    elements.previous.addEventListener('click', () => navigate(-1));
    elements.next.addEventListener('click', () => navigate(1));
    elements.resetSource.addEventListener('click', resetCurrentSource);
    elements.retryIncorrect.addEventListener('click', retryIncorrectQuestions);
    elements.showAll.addEventListener('click', showAllQuestions);
    elements.examStart.addEventListener('click', startExam);
    elements.examSubmit.addEventListener('click', () => submitExam());
    elements.disableExamTimer.addEventListener('click', toggleExamTimer);
    elements.examRetry.addEventListener('click', retryExamIncorrectQuestions);
    elements.examRetake.addEventListener('click', retakeSameExam);
    elements.examNew.addEventListener('click', startDifferentExam);
    elements.examExit.addEventListener('click', () => exitExam(true));
    elements.examModalExit.addEventListener('click', () => exitExam(false));
    elements.cancelExamConfirm.addEventListener('click', closeExamConfirmation);
    elements.acceptExamConfirm.addEventListener('click', () => {
      const action = pendingExamConfirmation;
      closeExamConfirmation();
      if (action) action();
    });
    elements.jump.addEventListener('change', jumpToQuestion);
    elements.jump.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        jumpToQuestion();
        elements.jump.blur();
      }
    });
    document.addEventListener('keydown', handleKeyboard);
  }

  function showLoadError(error) {
    console.error(error);
    setSourceLoading(false);
    elements.question.textContent = error.message || 'Không thể tải câu hỏi.';
  }

  async function initialize() {
    try {
      renderSourceSelect();
      bindEvents();
      await switchSource(state.activeSourceId);
    } catch (error) {
      showLoadError(error);
    }
  }

  document.addEventListener('DOMContentLoaded', initialize);
})();
