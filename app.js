import {
  LETTERS,
  advanceRush,
  answerRushPhase,
  beginRushBlock,
  createPracticeSession,
  createRushProgress,
  createSourceVersion,
  findNextRushBlock,
  getExamDurationMs,
  getExamResults,
  getIncorrectQuestions,
  getPreparedQuestions,
  getQuestionStatus,
  getRushBlockCount,
  getRushBlockRange,
  getRushRemaining,
  isQuestionCorrect,
  shuffleQuestions
} from './quiz-core.js?v=66f9733e515d';
import { createInitialState } from './quiz-state.js?v=905b79661e1c';
import { createQuizStorage } from './quiz-storage.js?v=442950530dff';

  const EXAM_QUESTION_COUNT = 60;
  const RUSH_AUTO_ADVANCE_MS = 700;
  const state = createInitialState();
  const storage = createQuizStorage(() => state.activeSourceId);
  const sourceLoadPromises = new Map();
  let examTimerIntervalId = null;
  let pendingExamConfirmation = null;
  let dialogCancelable = true;
  let dialogReturnFocus = null;
  let questionMapSource = null;
  let rushAdvanceTimer = null;

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
    examConfirmTitle: document.getElementById('examConfirmTitle'),
    examCount: document.getElementById('examCountInput'),
    examCountControl: document.getElementById('examCountControl'),
    examFrom: document.getElementById('examFromInput'),
    examTo: document.getElementById('examToInput'),
    examRangeControl: document.getElementById('examRangeControl'),
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
    questionMap: document.getElementById('questionMap'),
    questionMapPanel: document.getElementById('questionMapPanel'),
    previous: document.getElementById('prevBtn'),
    progress: document.getElementById('progressBar'),
    question: document.getElementById('qContentDisplay'),
    questionNumber: document.getElementById('qNumberDisplay'),
    quiz: document.getElementById('quizContainer'),
    resetRush: document.getElementById('resetRushBtn'),
    resetSource: document.getElementById('resetSourceBtn'),
    rushBlock: document.getElementById('rushBlockSelect'),
    rushBlockControl: document.getElementById('rushBlockControl'),
    rushContinue: document.getElementById('rushContinueBtn'),
    rushControls: document.getElementById('rushControls'),
    rushExit: document.getElementById('exitRushBtn'),
    rushStart: document.getElementById('startRushBtn'),
    rushStatus: document.getElementById('rushStatus'),
    result: document.getElementById('resultBox'),
    resultStatus: document.getElementById('resultStatus'),
    retryIncorrect: document.getElementById('retryIncorrectBtn'),
    reshuffleOptions: document.getElementById('reshuffleOptionsBtn'),
    showAll: document.getElementById('showAllBtn'),
    shuffleOptions: document.getElementById('shuffleOptionsBtn'),
    source: document.getElementById('sourceSelect'),
    options: document.getElementById('dynamicOptions'),
    total: document.getElementById('totalQuestionsDisplay')
  };

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

    const sourceUrl = sourceInfo.version ? `${sourceInfo.file}?v=${sourceInfo.version}` : sourceInfo.file;
    if (!sourceLoadPromises.has(sourceId)) sourceLoadPromises.set(sourceId, loadScript(sourceUrl));
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

  function renderSourceSelect() {
    const sources = getSourceCatalog();
    elements.source.replaceChildren();
    if (!sources.length) throw new Error('Không tìm thấy nguồn câu hỏi. Hãy kiểm tra sources.js.');

    for (const source of sources) {
      const countLabel = Number.isInteger(source.count) ? ` (${source.count} câu)` : '';
      elements.source.add(new Option(`${source.name}${countLabel}`, source.id));
    }

    const storedSourceId = storage.readGlobalActiveSource();
    state.activeSourceId = sources.some(source => source.id === storedSourceId) ? storedSourceId : sources[0].id;
    elements.source.value = state.activeSourceId;
  }

  function setSourceLoading(isLoading) {
    elements.source.disabled = isLoading;
    if (!isLoading) return;
    elements.question.textContent = 'Đang tải dữ liệu câu hỏi…';
    elements.answers.replaceChildren();
    elements.options.replaceChildren();
    elements.result.hidden = true;
  }

  function getQuestionsByIds(ids) {
    const questionMap = new Map(state.allQuestions.map(question => [question.id, question]));
    return ids.map(id => questionMap.get(id)).filter(Boolean);
  }

  function getSavedExamSession() {
    const session = storage.read('exam-session', null);
    if (!session || session.sourceVersion !== state.sourceVersion || !Array.isArray(session.questionIds)) return null;
    const questions = getQuestionsByIds(session.questionIds);
    return questions.length === session.questionIds.length ? session : null;
  }

  function getSavedPracticeSession() {
    const session = storage.read('practice-session', null);
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
    updateExamCountLimit();
    state.practiceMode = 'all';
    state.revealedQuestionId = null;
    state.answers = storage.read('source-version', '') === state.sourceVersion ? storage.read('answers', {}) : {};
    state.shuffleOptions = storage.read('shuffle-options', false) === true;
    state.optionOrders = storage.read('option-orders', {});
    if (storage.read('source-version', '') !== state.sourceVersion) storage.write('source-version', state.sourceVersion);

    state.exam = getSavedExamSession();
    const practiceSession = state.exam ? null : getSavedPracticeSession();
    if (state.exam) {
      elements.examCount.value = String(state.exam.questionCount || state.exam.originalQuestionIds?.length || state.exam.questionIds.length);
      state.questions = getQuestionsByIds(state.exam.questionIds);
      state.currentIndex = Math.min(Math.max(Number(state.exam.currentIndex) || 0, 0), Math.max(state.questions.length - 1, 0));
    } else if (practiceSession) {
      state.questions = getQuestionsByIds(practiceSession.questionIds);
      state.practiceMode = 'incorrect';
      state.practiceReturnIndex = Number(practiceSession.practiceReturnIndex) || 0;
      state.currentIndex = Math.min(Math.max(Number(practiceSession.currentIndex) || 0, 0), Math.max(state.questions.length - 1, 0));
    } else {
      state.questions = state.allQuestions;
      state.currentIndex = Number(storage.read('current-index', 0)) || 0;
      if (state.currentIndex < 0 || state.currentIndex >= state.questions.length) state.currentIndex = 0;
    }

    state.rush = getSavedRush();
    state.rushActive = !state.exam && Boolean(state.rush?.active && state.rush.phase);
    if (state.rushActive) state.practiceMode = 'all';
    renderRushBlockOptions();

    const sourceOption = [...elements.source.options].find(option => option.value === sourceId);
    if (sourceOption) sourceOption.textContent = `${source.name} (${source.questions.length} câu)`;
    elements.source.value = sourceId;
    elements.quiz.classList.toggle('exam-mode', Boolean(state.exam));
    elements.quiz.classList.toggle('rush-mode', state.rushActive);
    setSourceLoading(false);
    storage.saveGlobalActiveSource();
    renderQuestion();
  }

  function savePracticeProgress() {
    storage.write('current-index', state.currentIndex);
    storage.write('answers', state.answers);
    storage.write('option-orders', state.optionOrders);
    if (state.practiceMode === 'incorrect') {
      storage.write('practice-session', createPracticeSession({
        sourceVersion: state.sourceVersion,
        questions: state.questions,
        currentIndex: state.currentIndex,
        practiceReturnIndex: state.practiceReturnIndex
      }));
    } else {
      storage.remove('practice-session');
    }
  }

  function saveExamSession() {
    if (!state.exam) return;
    state.exam.currentIndex = state.currentIndex;
    storage.write('exam-session', state.exam);
  }

  function getExamQuestionHistory() {
    const savedHistory = storage.read('exam-correct-question-history', null);
    if (!savedHistory || savedHistory.sourceVersion !== state.sourceVersion || !Array.isArray(savedHistory.questionIds)) return [];
    const validIds = new Set(state.allQuestions.map(question => question.id));
    return [...new Set(savedHistory.questionIds)].filter(id => validIds.has(id));
  }

  function saveExamQuestionHistory(questionIds) {
    storage.write('exam-correct-question-history', {
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

  function getOptionOrderStore() {
    if (state.exam) return state.exam.optionOrders ||= {};
    if (!state.optionOrders || typeof state.optionOrders !== 'object' || Array.isArray(state.optionOrders)) state.optionOrders = {};
    return state.optionOrders;
  }

  function getOptionOrder(question) {
    const optionKeys = Object.keys(question.options);
    if (!state.shuffleOptions || state.rushActive) return optionKeys;

    const orders = getOptionOrderStore();
    const savedOrder = orders[question.id];
    const isValid = Array.isArray(savedOrder)
      && savedOrder.length === optionKeys.length
      && savedOrder.every(key => optionKeys.includes(key));
    if (isValid) return savedOrder;

    const order = shuffleQuestions(optionKeys);
    orders[question.id] = order;
    if (state.exam) saveExamSession();
    else storage.write('option-orders', state.optionOrders);
    return order;
  }

  function getDisplayedAnswer(question) {
    const optionOrder = getOptionOrder(question);
    return [...question.correctAnswer]
      .map(key => LETTERS[optionOrder.indexOf(key)])
      .sort()
      .join('');
  }

  function renderQuestionContent(questionText) {
    const fragment = document.createDocumentFragment();
    const textLines = [];
    const codeLines = [];
    let inCodeBlock = false;

    const appendText = () => {
      if (!textLines.length) return;
      const text = document.createElement('div');
      text.className = 'question-text-part';
      text.textContent = textLines.join('\n').trim();
      if (text.textContent) fragment.append(text);
      textLines.length = 0;
    };

    const appendCode = () => {
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      code.textContent = codeLines.join('\n');
      pre.append(code);
      fragment.append(pre);
      codeLines.length = 0;
    };

    for (const line of String(questionText || '').split('\n')) {
      if (/^\s*```/.test(line)) {
        if (inCodeBlock) appendCode();
        else appendText();
        inCodeBlock = !inCodeBlock;
      } else if (inCodeBlock) {
        codeLines.push(line);
      } else {
        const imageMatch = line.match(/^\s*!\[([^\]]*)\]\(([^)\s]+)\)\s*$/);
        if (!imageMatch) {
          textLines.push(line);
          continue;
        }

        appendText();
        const image = document.createElement('img');
        image.className = 'question-image';
        image.src = imageMatch[2];
        image.alt = imageMatch[1] || 'Hình minh họa cho câu hỏi';
        image.loading = 'lazy';
        fragment.append(image);
      }
    }

    if (inCodeBlock) appendCode();
    else appendText();
    elements.question.replaceChildren(fragment);
  }

  function renderQuestion() {
    if (state.rushActive) {
      renderRushQuestion();
      return;
    }
    const question = state.questions[state.currentIndex];
    elements.total.textContent = String(state.questions.length);
    elements.jump.max = String(Math.max(state.questions.length, 1));
    if (!question) {
      renderEmptySource();
      return;
    }

    elements.questionNumber.textContent = `Câu: ${state.currentIndex + 1}`;
    elements.jump.value = String(state.currentIndex + 1);
    renderQuestionContent(question.text);
    elements.instruction.textContent = `(Chọn ${question.correctAnswer.length} đáp án đúng)`;
    renderAnswerControls(question);
    renderOptions(question);
    if (state.exam) renderExamResult();
    else renderPracticeResult(question);
    renderPracticeControls();
    renderExamControls();
    renderRushControls();
    startExamTimer();
    updateNavigation();
    refreshProgress();
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
    renderRushControls();
    refreshProgress();
  }

  function renderAnswerControls(question) {
    const isRevealed = !state.exam && state.revealedQuestionId === question.id;
    const savedAnswer = getAnswerStore()[question.id] || '';
    const selected = isRevealed ? question.correctAnswer : savedAnswer;
    const inputType = question.correctAnswer.length > 1 ? 'checkbox' : 'radio';
    const fragment = document.createDocumentFragment();
    fragment.append(createElement('p', 'answer-heading', 'Chọn đáp án:'));

    for (const [index, key] of getOptionOrder(question).entries()) {
      const label = createElement('label', 'answer-row');
      const input = document.createElement('input');
      const displayedKey = LETTERS[index];
      input.type = inputType;
      input.name = 'userAnswer';
      input.value = key;
      input.checked = selected.includes(key);
      input.disabled = Boolean(state.exam?.submitted) || isRevealed;
      input.setAttribute('aria-label', `Đáp án ${displayedKey}`);
      label.append(input, createElement('span', 'answer-label', displayedKey));
      fragment.append(label);
    }
    const clearButton = createElement('button', 'clear-answer-btn', 'Bỏ chọn đáp án');
    clearButton.type = 'button';
    clearButton.disabled = Boolean(state.exam?.submitted) || isRevealed;
    clearButton.setAttribute('aria-label', 'Bỏ chọn đáp án của câu này');
    clearButton.dataset.action = 'clear-answer';
    fragment.append(clearButton);
    elements.answers.replaceChildren(fragment);
  }

  function renderOptions(question) {
    const fragment = document.createDocumentFragment();
    for (const [index, key] of getOptionOrder(question).entries()) {
      const value = question.options[key];
      const displayedKey = LETTERS[index];
      const option = createElement('div', 'option-text');
      option.dataset.answer = key;
      option.append(createElement('span', 'option-letter', `${displayedKey}.`), createElement('span', '', value));
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
      : isCorrect ? '✓ Chính xác' : '✗ Chưa chính xác';
    elements.correctAnswer.textContent = `Đáp án đúng: ${getDisplayedAnswer(question)}`;
    elements.explanation.textContent = question.explanation;
  }

  function renderExamResult() {
    elements.result.hidden = true;
    if (!state.exam.submitted) {
      elements.examModal.hidden = true;
      return;
    }

    const results = getExamResults(state.questions, state.exam.answers);
    if (state.exam.round === 0) {
      const score = ((results.correct / state.questions.length) * 10).toFixed(2);
      elements.examModalTitle.textContent = state.exam.autoSubmitted ? 'Hết thời gian làm bài — Kết quả' : 'Kết quả bài thi';
      elements.examModalScore.textContent = `${score}/10`;
      elements.examModalSummary.textContent = `Đúng ${results.correct}/${state.questions.length} câu · Sai hoặc chưa trả lời: ${results.incorrect} câu.`;
    } else {
      elements.examModalTitle.textContent = `Kết quả làm lại lần ${state.exam.round}`;
      elements.examModalScore.textContent = `${results.correct}/${state.questions.length} câu đúng`;
      elements.examModalSummary.textContent = `Đã sửa đúng ${results.correct} câu · Còn sai: ${results.incorrect} câu.`;
    }
    elements.examModalMessage.textContent = results.incorrect
      ? 'Bạn có thể làm lại các câu sai, làm lại đề này, làm đề mới hoặc kết thúc bài thi.'
      : 'Bạn đã trả lời đúng toàn bộ câu hỏi. Bạn có thể làm lại đề này, làm đề mới hoặc kết thúc bài thi.';
    const wasHidden = elements.examModal.hidden;
    elements.examModal.hidden = false;
    if (wasHidden) elements.examModal.querySelector('button:not([hidden])')?.focus();
  }

  function renderPracticeControls() {
    if (state.exam) return;
    const incorrectCount = getIncorrectQuestions(state.allQuestions, state.answers).length;
    const isRetryMode = state.practiceMode === 'incorrect';
    elements.retryIncorrect.disabled = incorrectCount === 0;
    elements.resetSource.disabled = state.allQuestions.length === 0;
    elements.showAll.hidden = !isRetryMode;
    elements.practiceMode.hidden = !isRetryMode;
    elements.practiceMode.textContent = isRetryMode ? `Đang làm lại ${state.questions.length} câu đã sai.` : '';
  }

  function renderExamControls() {
    const active = Boolean(state.exam);
    const results = active && state.exam.submitted ? getExamResults(state.questions, state.exam.answers) : null;
    elements.source.disabled = active;
    elements.examCount.disabled = active || state.allQuestions.length === 0;
    elements.examCountControl.hidden = active;
    elements.examFrom.disabled = elements.examTo.disabled = active || state.allQuestions.length === 0;
    elements.examRangeControl.hidden = active;
    elements.examStart.hidden = active;
    elements.examStart.disabled = state.allQuestions.length === 0;
    elements.examSubmit.hidden = !active || state.exam.submitted;
    elements.examRetry.hidden = !active || !state.exam.submitted || results.incorrect === 0;
    elements.examExit.hidden = !active;
    elements.disableExamTimer.hidden = !active || state.exam.submitted || !hasExamTimer(state.exam);
    elements.disableExamTimer.textContent = state.exam?.timerEnabled ? 'Tắt đồng hồ' : 'Bật lại đồng hồ';
    elements.shuffleOptions.setAttribute('aria-pressed', String(state.shuffleOptions));
    elements.shuffleOptions.textContent = `Đảo thứ tự đáp án: ${state.shuffleOptions ? 'Bật' : 'Tắt'}`;
    elements.reshuffleOptions.hidden = !state.shuffleOptions;
    elements.reshuffleOptions.disabled = Boolean(state.exam?.submitted);
  }

  function hasExamTimer(exam) {
    return Boolean(exam && (exam.timerEnabled || Number.isFinite(exam.pausedRemainingMs)));
  }

  function openDialog({ title = 'Xác nhận', message, confirmText = 'Xác nhận', cancelText = 'Quay lại', cancelable = true, onConfirm = null }) {
    pendingExamConfirmation = onConfirm;
    dialogCancelable = cancelable;
    dialogReturnFocus = document.activeElement;
    elements.examConfirmTitle.textContent = title;
    elements.examConfirmMessage.textContent = message;
    elements.acceptExamConfirm.textContent = confirmText;
    elements.cancelExamConfirm.textContent = cancelText;
    elements.cancelExamConfirm.hidden = !cancelable;
    elements.examConfirm.hidden = false;
    elements.acceptExamConfirm.focus();
  }

  function showNotice(message, onClose = null) {
    openDialog({ title: 'Thông báo', message, confirmText: 'Đã hiểu', cancelable: false, onConfirm: onClose });
  }

  function closeExamConfirmation() {
    pendingExamConfirmation = null;
    elements.examConfirm.hidden = true;
    if (dialogReturnFocus?.isConnected) dialogReturnFocus.focus();
    dialogReturnFocus = null;
  }

  function formatDuration(durationMs) {
    const totalSeconds = Math.round(durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return seconds ? `${minutes} phút ${seconds} giây` : `${minutes} phút`;
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
    if (state.rushActive) {
      elements.previous.disabled = true;
      elements.next.disabled = !state.rush.reveal;
      return;
    }
    const disabled = state.questions.length < 2;
    elements.previous.disabled = disabled;
    elements.next.disabled = disabled;
  }

  const STATUS_LABELS = {
    answered: 'đã trả lời',
    correct: 'đúng',
    incorrect: 'sai',
    unanswered: 'chưa trả lời'
  };

  function updateQuestionMap() {
    const map = elements.questionMap;
    if (questionMapSource !== state.questions) {
      const fragment = document.createDocumentFragment();
      for (const [index] of state.questions.entries()) {
        const cell = createElement('button', 'question-map-cell', String(index + 1));
        cell.type = 'button';
        cell.dataset.index = String(index);
        fragment.append(cell);
      }
      map.replaceChildren(fragment);
      questionMapSource = state.questions;
    }

    const answers = getAnswerStore();
    const mode = { isExam: Boolean(state.exam), isSubmitted: Boolean(state.exam?.submitted) };
    for (const [index, cell] of [...map.children].entries()) {
      const question = state.questions[index];
      const status = getQuestionStatus(question, answers[question.id], mode);
      const isCurrent = index === state.currentIndex;
      cell.className = `question-map-cell is-${status}${isCurrent ? ' is-current' : ''}`;
      cell.setAttribute('aria-label', `Câu ${index + 1}, ${STATUS_LABELS[status]}`);
      if (isCurrent) {
        cell.setAttribute('aria-current', 'true');
        if (cell.offsetTop < map.scrollTop || cell.offsetTop + cell.offsetHeight > map.scrollTop + map.clientHeight) {
          map.scrollTop = Math.max(0, cell.offsetTop - map.clientHeight / 2);
        }
      } else {
        cell.removeAttribute('aria-current');
      }
    }
  }

  function goToQuestion(index) {
    if (!Number.isInteger(index) || index < 0 || index >= state.questions.length) return;
    state.currentIndex = index;
    if (state.exam) saveExamSession();
    else savePracticeProgress();
    renderQuestion();
  }

  function updateProgressBar() {
    const answers = getAnswerStore();
    const total = state.questions.length;
    const completed = state.questions.filter(question => (answers[question.id] || '').length >= question.correctAnswer.length).length;
    const percent = total ? Math.round((completed / total) * 100) : 0;
    elements.progress.style.width = `${percent}%`;
    elements.progress.setAttribute('aria-valuenow', String(percent));
  }

  function refreshProgress() {
    updateProgressBar();
    updateQuestionMap();
  }

  function getSelectedAnswer() {
    return [...elements.answers.querySelectorAll('input:checked')].map(input => input.value).sort().join('');
  }

  function handleAnswerChange() {
    if (state.rushActive) {
      handleRushAnswer();
      return;
    }
    const question = state.questions[state.currentIndex];
    if (!question || state.exam?.submitted) return;
    const answer = getSelectedAnswer();

    if (state.exam) {
      state.exam.answers[question.id] = answer;
      saveExamSession();
      renderExamControls();
      refreshProgress();
      return;
    }

    state.answers[question.id] = answer;
    savePracticeProgress();
    renderPracticeResult(question);
    renderPracticeControls();
    refreshProgress();
  }

  function clearCurrentAnswer() {
    const question = state.questions[state.currentIndex];
    if (!question || state.exam?.submitted || (!state.exam && state.revealedQuestionId === question.id)) return;

    const answers = getAnswerStore();
    if (!(answers[question.id] || '')) return;
    delete answers[question.id];

    if (state.exam) saveExamSession();
    else savePracticeProgress();
    renderQuestion();
  }

  function updateExamCountLimit() {
    const total = state.allQuestions.length;
    elements.examCount.max = String(total);
    elements.examFrom.max = elements.examTo.max = String(total);
    elements.examFrom.value = total ? '1' : '';
    elements.examTo.value = total ? String(total) : '';
    if (!total) {
      elements.examCount.value = '';
      return;
    }

    const requestedCount = Number(elements.examCount.value);
    const defaultCount = Math.min(EXAM_QUESTION_COUNT, total);
    elements.examCount.value = String(
      Number.isInteger(requestedCount) && requestedCount > 0
        ? Math.min(requestedCount, total)
        : defaultCount
    );
  }

  function getRequestedExamRange() {
    const total = state.allQuestions.length;
    const from = Number(elements.examFrom.value);
    const to = Number(elements.examTo.value);
    if (Number.isInteger(from) && Number.isInteger(to) && from >= 1 && to <= total && from <= to) return { from, to };

    showNotice(`Khoảng câu không hợp lệ. Vui lòng nhập "Từ câu" nhỏ hơn hoặc bằng "Đến câu", trong khoảng 1–${total}.`, () => elements.examFrom.focus());
    return null;
  }

  function syncExamCountToRange() {
    const total = state.allQuestions.length;
    const from = Number(elements.examFrom.value);
    const to = Number(elements.examTo.value);
    if (!total || !Number.isInteger(from) || !Number.isInteger(to) || from < 1 || to > total || from > to) {
      elements.examCount.max = String(total);
      return;
    }

    const rangeSize = to - from + 1;
    elements.examCount.max = String(rangeSize);
    const count = Number(elements.examCount.value);
    if (Number.isInteger(count) && count > rangeSize) elements.examCount.value = String(rangeSize);
  }

  function getRequestedExamCount(rangeSize) {
    const count = Number(elements.examCount.value);
    if (Number.isInteger(count) && count > rangeSize) {
      elements.examCount.value = String(rangeSize);
      return rangeSize;
    }
    if (Number.isInteger(count) && count > 0) return count;

    showNotice(`Số câu hỏi phải là số nguyên lớn hơn 0 và không vượt quá ${rangeSize} câu trong khoảng đã chọn.`, () => elements.examCount.focus());
    return null;
  }

  function selectAnswerFromOption(option) {
    const answerKey = option?.dataset.answer;
    if (!answerKey) return;
    const input = [...elements.answers.querySelectorAll('input')]
      .find(answer => answer.value === answerKey);
    if (!input || input.disabled) return;
    input.click();
  }

  function navigate(direction) {
    if (state.rushActive) {
      if (direction > 0) continueRush();
      return;
    }
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
    if (!state.allQuestions.length) return;
    openDialog({
      message: 'Xóa toàn bộ đáp án đã chọn và bắt đầu lại môn học này từ đầu?',
      confirmText: 'Đặt lại',
      cancelText: 'Hủy',
      onConfirm: () => {
        state.answers = {};
        state.questions = state.allQuestions;
        state.practiceMode = 'all';
        state.practiceReturnIndex = 0;
        state.currentIndex = 0;
        savePracticeProgress();
        renderQuestion();
      }
    });
  }

  function retryIncorrectQuestions() {
    const incorrectQuestions = getIncorrectQuestions(state.allQuestions, state.answers);
    if (!incorrectQuestions.length) return;
    openDialog({
      message: `Làm lại ${incorrectQuestions.length} câu đã sai? Đáp án sai cũ sẽ được xóa.`,
      confirmText: 'Làm lại',
      cancelText: 'Hủy',
      onConfirm: () => {
        if (state.practiceMode !== 'incorrect') {
          state.practiceReturnIndex = state.currentIndex;
        }
        for (const question of incorrectQuestions) delete state.answers[question.id];
        state.questions = incorrectQuestions;
        state.practiceMode = 'incorrect';
        state.currentIndex = 0;
        savePracticeProgress();
        renderQuestion();
      }
    });
  }

  function showAllQuestions() {
    state.questions = state.allQuestions;
    state.practiceMode = 'all';
    state.currentIndex = state.practiceReturnIndex;
    if (state.currentIndex < 0 || state.currentIndex >= state.questions.length) state.currentIndex = 0;
    state.practiceReturnIndex = 0;
    savePracticeProgress();
    renderQuestion();
  }

  function toggleOptionShuffle() {
    state.shuffleOptions = !state.shuffleOptions;
    storage.write('shuffle-options', state.shuffleOptions);
    if (state.exam) saveExamSession();
    renderQuestion();
  }

  function reshuffleOptions() {
    if (!state.shuffleOptions || state.exam?.submitted) return;
    const orders = getOptionOrderStore();
    for (const question of state.questions) orders[question.id] = shuffleQuestions(Object.keys(question.options));
    if (state.exam) saveExamSession();
    else storage.write('option-orders', state.optionOrders);
    renderQuestion();
  }

  function getQuestionsInRange(range) {
    if (!range) return state.allQuestions;
    return state.allQuestions.slice(range.from - 1, range.to);
  }

  function getUnusedQuestions(range) {
    const usedIds = new Set(getExamQuestionHistory());
    return getQuestionsInRange(range).filter(question => !usedIds.has(question.id));
  }

  function needsHistoryReset(count, range) {
    return getExamQuestionHistory().length > 0 && getUnusedQuestions(range).length < count;
  }

  function getNewExamQuestionIds(count, range) {
    if (needsHistoryReset(count, range)) saveExamQuestionHistory([]);
    return shuffleQuestions(getUnusedQuestions(range)).slice(0, count).map(question => question.id);
  }

  function describeHistoryReset(count, range) {
    const scope = range ? ` trong khoảng câu ${range.from}–${range.to}` : ' của môn này';
    return `Số câu chưa trả lời đúng${scope} chỉ còn ${getUnusedQuestions(range).length}, không đủ để tạo đề ${count} câu. Hệ thống sẽ đặt lại vòng xáo trộn câu hỏi; đề mới có thể bao gồm cả những câu bạn đã trả lời đúng.`;
  }

  function requestNewExam(count, range, intro = '') {
    const message = [intro, needsHistoryReset(count, range) ? describeHistoryReset(count, range) : ''].filter(Boolean).join('\n\n');
    const begin = () => beginExam(getNewExamQuestionIds(count, range), true, range);
    if (!message) {
      begin();
      return;
    }
    openDialog({ message, confirmText: intro ? 'Bắt đầu' : 'Tiếp tục', cancelText: 'Hủy', onConfirm: begin });
  }

  function beginExam(questionIds, timerEnabled = true, range = null) {
    const durationMs = getExamDurationMs(questionIds.length);
    storage.remove('practice-session');
    state.practiceMode = 'all';
    state.practiceReturnIndex = 0;
    state.exam = {
      answers: {},
      currentIndex: 0,
      originalQuestionIds: [...questionIds],
      optionOrders: {},
      questionIds: [...questionIds],
      round: 0,
      sourceVersion: state.sourceVersion,
      submitted: false,
      autoSubmitted: false,
      questionCount: questionIds.length,
      range,
      timerEnabled: Boolean(timerEnabled),
      deadline: timerEnabled ? Date.now() + durationMs : null,
      pausedRemainingMs: timerEnabled ? null : durationMs
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
    const range = getRequestedExamRange();
    if (!range) return;
    const isFullRange = range.from === 1 && range.to === state.allQuestions.length;
    const count = getRequestedExamCount(range.to - range.from + 1);
    if (!count) return;
    const rangeText = isFullRange ? '' : ` trong khoảng câu ${range.from}–${range.to}`;
    const intro = `Bắt đầu bài thi gồm ${count} câu hỏi được chọn ngẫu nhiên${rangeText}.\nThời gian làm bài: ${formatDuration(getExamDurationMs(count))}.`;
    requestNewExam(count, isFullRange ? null : range, intro);
  }

  function retakeSameExam() {
    if (!state.exam?.submitted) return;
    const questionIds = state.exam.originalQuestionIds || state.exam.questionIds;
    beginExam(questionIds, true, state.exam.range || null);
  }

  function startDifferentExam() {
    if (!state.exam?.submitted) return;
    const count = state.exam.questionCount || state.exam.originalQuestionIds?.length || state.exam.questionIds.length;
    const range = state.exam.range || null;
    requestNewExam(count, range);
  }

  function submitExam(isAutomatic = false, confirmed = false) {
    if (!state.exam || state.exam.submitted) return;
    const unanswered = state.questions.filter(question => !(state.exam.answers[question.id] || '')).length;
    const message = unanswered ? `Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài?` : 'Bạn có chắc chắn muốn nộp bài?';
    if (!isAutomatic && !confirmed) {
      openDialog({ message, confirmText: 'Nộp bài', cancelText: 'Quay lại làm bài', onConfirm: () => submitExam(false, true) });
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
    storage.remove('exam-session');
    storage.remove('practice-session');
    state.exam = null;
    state.questions = state.allQuestions;
    state.practiceMode = 'all';
    state.practiceReturnIndex = 0;
    state.currentIndex = Number(storage.read('current-index', 0)) || 0;
    if (state.currentIndex < 0 || state.currentIndex >= state.questions.length) state.currentIndex = 0;
    elements.examModal.hidden = true;
    elements.quiz.classList.remove('exam-mode');
  }

  function exitExam(shouldConfirm = true) {
    if (!state.exam) return true;
    if (shouldConfirm) {
      openDialog({
        message: 'Kết thúc bài thi? Kết quả của phiên làm bài hiện tại sẽ không được lưu.',
        confirmText: 'Kết thúc',
        cancelText: 'Quay lại làm bài',
        onConfirm: () => exitExam(false)
      });
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

  function isModalOpen() {
    return !elements.examModal.hidden || !elements.examConfirm.hidden;
  }

  function isInteractiveTarget(target) {
    return target instanceof Element && Boolean(target.closest('button, summary, a, select'));
  }

  function handleKeyboard(event) {
    if (event.key === 'Escape' && !elements.examConfirm.hidden) {
      event.preventDefault();
      if (dialogCancelable) closeExamConfirmation();
      else elements.acceptExamConfirm.click();
      return;
    }
    if (isModalOpen() || event.ctrlKey || event.metaKey || event.altKey) return;
    if (state.rushActive) {
      handleRushKeyboard(event);
      return;
    }
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
    } else if (event.code === 'Space' && !state.exam && !isInteractiveTarget(event.target)) {
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

  // ----- Học cấp tốc -----

  function getSavedRush() {
    const rush = storage.read('rush', null);
    if (!rush || rush.sourceVersion !== state.sourceVersion || !Array.isArray(rush.weakIds) || !Array.isArray(rush.completedBlocks)) return null;
    const validIds = new Set(state.allQuestions.map(question => question.id));
    const hasValidIds = ids => Array.isArray(ids) && ids.every(id => validIds.has(id));
    const { phase, reveal } = rush;
    const isPhaseValid = !phase || (hasValidIds(phase.ids) && hasValidIds(phase.queue) && (phase.queue.length > 0 || Boolean(reveal)));
    const isRevealValid = !reveal || validIds.has(reveal.id);
    return hasValidIds(rush.weakIds) && isPhaseValid && isRevealValid ? rush : null;
  }

  function saveRush() {
    storage.write('rush', state.rush);
  }

  function getRushQuestion(id) {
    return state.allQuestions.find(question => question.id === id);
  }

  function renderRushBlockOptions() {
    const select = elements.rushBlock;
    const previous = select.value;
    const total = getRushBlockCount(state.allQuestions.length);
    const completed = state.rush?.completedBlocks ?? [];
    select.replaceChildren(new Option('Tự động', 'auto'));
    for (let block = 0; block < total; block += 1) {
      const { from, to } = getRushBlockRange(state.allQuestions.length, block);
      select.add(new Option(`${completed.includes(block) ? '✓ ' : ''}Khối ${block + 1} (câu ${from}–${to})`, String(block)));
    }
    select.value = [...select.options].some(option => option.value === previous) ? previous : 'auto';
  }

  function renderRushControls() {
    const isResumable = Boolean(state.rush?.phase);
    elements.rushControls.hidden = Boolean(state.exam);
    elements.rushBlockControl.hidden = state.rushActive || isResumable;
    elements.rushStart.hidden = state.rushActive;
    elements.rushStart.disabled = state.allQuestions.length === 0;
    elements.rushStart.textContent = isResumable ? 'Tiếp tục học cấp tốc' : 'Học cấp tốc';
    elements.rushExit.hidden = !state.rushActive;
    elements.resetRush.disabled = !state.rush;
    elements.rushStatus.hidden = !state.rushActive;
    elements.source.disabled = state.rushActive || Boolean(state.exam);
  }

  function renderRushStatus() {
    const { phase } = state.rush;
    const remaining = getRushRemaining(phase);
    const label = phase.kind === 'review'
      ? 'Ôn dồn'
      : `Khối ${phase.block + 1}/${getRushBlockCount(state.allQuestions.length)} · Lượt ${phase.pass}/2`;
    elements.rushStatus.textContent = `${label} · Còn ${remaining} câu`;

    const percent = Math.round(((phase.ids.length - remaining) / phase.ids.length) * 100);
    elements.progress.style.width = `${percent}%`;
    elements.progress.setAttribute('aria-valuenow', String(percent));
  }

  function renderRushAnswerControls(question) {
    const { phase, reveal } = state.rush;
    const selected = reveal ? reveal.picked : '';
    const inputType = question.correctAnswer.length > 1 ? 'checkbox' : 'radio';
    const fragment = document.createDocumentFragment();
    fragment.append(createElement('p', 'answer-heading', 'Chọn đáp án:'));

    for (const [index, key] of getOptionOrder(question).entries()) {
      const label = createElement('label', 'answer-row');
      const input = document.createElement('input');
      const displayedKey = LETTERS[index];
      input.type = inputType;
      input.name = 'userAnswer';
      input.value = key;
      input.checked = selected.includes(key);
      input.disabled = Boolean(reveal);
      input.setAttribute('aria-label', `Đáp án ${displayedKey}`);
      label.append(input, createElement('span', 'answer-label', displayedKey));
      fragment.append(label);
    }

    if (!reveal && phase.kind === 'block' && phase.pass === 1) {
      const unsureButton = createElement('button', 'rush-unsure-btn', 'Không chắc');
      unsureButton.type = 'button';
      unsureButton.dataset.action = 'rush-unsure';
      unsureButton.title = 'Xem đáp án đúng (phím 0)';
      fragment.append(unsureButton);
    }
    elements.answers.replaceChildren(fragment);
  }

  function renderRushFeedback(question) {
    const { reveal } = state.rush;
    elements.rushContinue.hidden = !reveal;
    elements.result.hidden = !reveal;
    if (!reveal) return;

    const feedback = {
      correct: ['result-correct', '✓ Chính xác'],
      wrong: ['result-incorrect', '✗ Chưa chính xác'],
      unsure: ['exam-summary', 'Đáp án đúng']
    }[reveal.status];
    elements.result.className = `result-container ${feedback[0]}`;
    elements.resultStatus.textContent = feedback[1];
    elements.correctAnswer.textContent = `Đáp án đúng: ${getDisplayedAnswer(question)}`;
    elements.explanation.textContent = question.explanation;
    for (const option of elements.options.querySelectorAll('[data-answer]')) {
      const isCorrectOption = question.correctAnswer.includes(option.dataset.answer);
      option.classList.toggle('is-correct-option', isCorrectOption);
      option.classList.toggle('is-wrong-option', !isCorrectOption && reveal.picked.includes(option.dataset.answer));
    }
  }

  function renderRushQuestion() {
    const { phase, reveal } = state.rush;
    const question = getRushQuestion(reveal ? reveal.id : phase.queue[0]);
    state.questions = getQuestionsByIds(phase.ids);
    state.currentIndex = Math.max(0, state.questions.findIndex(item => item.id === question.id));
    elements.quiz.classList.add('rush-mode');
    elements.examTimerControls.hidden = true;
    elements.examModal.hidden = true;
    stopExamTimer();

    renderQuestionContent(question.text);
    elements.instruction.textContent = `(Chọn ${question.correctAnswer.length} đáp án đúng)`;
    renderRushAnswerControls(question);
    renderOptions(question);
    renderRushFeedback(question);
    renderRushStatus();
    renderRushControls();
    updateNavigation();
  }

  function submitRushAnswer(question, picked) {
    const rush = state.rush;
    if (!rush || rush.reveal) return;
    const isCorrect = picked !== '' && isQuestionCorrect(question, picked);
    rush.phase = answerRushPhase(rush.phase, isCorrect);
    rush.reveal = { id: question.id, picked, status: picked === '' ? 'unsure' : isCorrect ? 'correct' : 'wrong' };
    saveRush();
    renderQuestion();
    if (isCorrect) rushAdvanceTimer = window.setTimeout(continueRush, RUSH_AUTO_ADVANCE_MS);
  }

  function handleRushAnswer() {
    const rush = state.rush;
    if (!rush || rush.reveal) return;
    const question = getRushQuestion(rush.phase.queue[0]);
    const picked = getSelectedAnswer();
    if (picked.length >= question.correctAnswer.length) submitRushAnswer(question, picked);
  }

  function submitRushUnsure() {
    const rush = state.rush;
    if (!rush || rush.reveal) return;
    submitRushAnswer(getRushQuestion(rush.phase.queue[0]), '');
  }

  function continueRush() {
    window.clearTimeout(rushAdvanceTimer);
    if (!state.rushActive || !state.rush.reveal) return;
    state.rush.reveal = null;
    if (!state.rush.phase.queue.length) {
      state.rush = advanceRush(state.rush, state.allQuestions);
      if (!state.rush.phase) {
        saveRush();
        exitRush();
        showNotice(`Bạn đã hoàn thành toàn bộ ${getRushBlockCount(state.allQuestions.length)} khối của môn này.`);
        return;
      }
    }
    saveRush();
    renderQuestion();
  }

  function handleRushKeyboard(event) {
    const { target } = event;
    if (target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) return;
    const { phase, reveal } = state.rush;

    if (reveal) {
      const isContinueKey = ['Enter', ' ', 'ArrowRight'].includes(event.key);
      if (isContinueKey && (!isInteractiveTarget(target) || target === elements.rushContinue)) {
        event.preventDefault();
        continueRush();
      }
      return;
    }

    if (event.key === '0' && phase.kind === 'block' && phase.pass === 1) {
      event.preventDefault();
      submitRushUnsure();
      return;
    }
    const answerIndex = event.key.length === 1 ? LETTERS.indexOf(event.key.toUpperCase()) : -1;
    const input = answerIndex >= 0 ? elements.answers.querySelectorAll('input')[answerIndex] : null;
    if (input && !input.disabled) {
      event.preventDefault();
      input.click();
    }
  }

  function startRush() {
    if (!state.allQuestions.length || state.exam) return;
    const totalBlocks = getRushBlockCount(state.allQuestions.length);
    let rush = state.rush ?? createRushProgress(state.sourceVersion);

    if (!rush.phase) {
      const requested = elements.rushBlock.value;
      let block = requested === 'auto' ? findNextRushBlock(rush.completedBlocks, totalBlocks) : Number(requested);
      if (block === null) {
        rush = createRushProgress(state.sourceVersion);
        block = 0;
      }
      rush = beginRushBlock(rush, state.allQuestions, block);
    }

    storage.remove('practice-session');
    state.practiceMode = 'all';
    state.practiceReturnIndex = 0;
    state.rush = { ...rush, active: true };
    state.rushActive = true;
    saveRush();
    renderQuestion();
  }

  function exitRush() {
    window.clearTimeout(rushAdvanceTimer);
    if (state.rush) {
      state.rush.active = false;
      saveRush();
    }
    state.rushActive = false;
    state.questions = state.allQuestions;
    state.currentIndex = Number(storage.read('current-index', 0)) || 0;
    if (state.currentIndex < 0 || state.currentIndex >= state.questions.length) state.currentIndex = 0;
    elements.quiz.classList.remove('rush-mode');
    renderRushBlockOptions();
    renderQuestion();
  }

  function resetRushProgress() {
    if (!state.rush) return;
    openDialog({
      message: 'Xóa toàn bộ tiến độ học cấp tốc của môn này (các khối đã hoàn thành và danh sách câu chưa thuộc)?',
      confirmText: 'Đặt lại',
      cancelText: 'Hủy',
      onConfirm: () => {
        storage.remove('rush');
        state.rush = null;
        renderRushBlockOptions();
        renderQuestion();
      }
    });
  }

  function bindEvents() {
    elements.source.addEventListener('change', event => handleSourceChange(event).catch(showSourceSwitchError));
    elements.answers.addEventListener('change', handleAnswerChange);
    elements.answers.addEventListener('click', event => {
      if (event.target.closest('[data-action="clear-answer"]')) clearCurrentAnswer();
      else if (event.target.closest('[data-action="rush-unsure"]')) submitRushUnsure();
    });
    elements.options.addEventListener('click', event => {
      selectAnswerFromOption(event.target.closest('[data-answer]'));
    });
    elements.previous.addEventListener('click', () => navigate(-1));
    elements.next.addEventListener('click', () => navigate(1));
    elements.resetSource.addEventListener('click', resetCurrentSource);
    elements.retryIncorrect.addEventListener('click', retryIncorrectQuestions);
    elements.showAll.addEventListener('click', showAllQuestions);
    elements.shuffleOptions.addEventListener('click', toggleOptionShuffle);
    elements.reshuffleOptions.addEventListener('click', reshuffleOptions);
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
    elements.rushStart.addEventListener('click', startRush);
    elements.rushExit.addEventListener('click', exitRush);
    elements.rushContinue.addEventListener('click', continueRush);
    elements.resetRush.addEventListener('click', resetRushProgress);
    elements.questionMap.addEventListener('click', event => {
      const cell = event.target.closest('[data-index]');
      if (cell) goToQuestion(Number(cell.dataset.index));
    });
    for (const input of [elements.examFrom, elements.examTo, elements.examCount]) {
      input.addEventListener('input', syncExamCountToRange);
      input.addEventListener('change', syncExamCountToRange);
    }
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

  function showSourceSwitchError(error) {
    console.error(error);
    setSourceLoading(false);
    elements.source.value = state.activeSourceId;
    if (state.allQuestions.length) renderQuestion();
    showNotice(error.message || 'Không thể tải nguồn câu hỏi.');
  }

  async function initialize() {
    try {
      renderSourceSelect();
      bindEvents();
      if (window.matchMedia('(max-width: 720px)').matches) elements.questionMapPanel.open = false;
      await switchSource(state.activeSourceId);
    } catch (error) {
      showLoadError(error);
    }
  }

  document.addEventListener('DOMContentLoaded', initialize);
