(() => {
  'use strict';

  const STORAGE_PREFIX = 'quiz:';
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const state = {
    activeSourceId: '',
    currentIndex: 0,
    questions: [],
    answers: {},
    sourceVersion: ''
  };

  const elements = {
    answers: document.getElementById('dynamicAnswers'),
    correctAnswer: document.getElementById('correctAnswerDisplay'),
    explanation: document.getElementById('explanationDisplay'),
    instruction: document.getElementById('instructionDisplay'),
    jump: document.getElementById('jumpInput'),
    next: document.getElementById('nextBtn'),
    previous: document.getElementById('prevBtn'),
    question: document.getElementById('qContentDisplay'),
    questionNumber: document.getElementById('qNumberDisplay'),
    result: document.getElementById('resultBox'),
    resultStatus: document.getElementById('resultStatus'),
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

  async function loadSources() {
    const files = Array.isArray(window.quizSourceFiles) ? window.quizSourceFiles : [];
    for (const file of files) {
      await loadScript(file);
    }
  }

  function renderSourceSelect() {
    const sources = Object.entries(window.quizSources || {});
    elements.source.replaceChildren();

    if (!sources.length) throw new Error('Không tìm thấy nguồn câu hỏi. Hãy kiểm tra sources.js.');

    for (const [id, source] of sources) {
      const option = new Option(`${source.name} (${source.questions.length} câu)`, id);
      elements.source.add(option);
    }

    const storedSourceId = readGlobalActiveSource();
    state.activeSourceId = window.quizSources[storedSourceId] ? storedSourceId : sources[0][0];
    elements.source.value = state.activeSourceId;
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

  function switchSource(sourceId) {
    const source = window.quizSources[sourceId];
    if (!source) return;

    state.activeSourceId = sourceId;
    state.questions = getPreparedQuestions(source);
    state.sourceVersion = createSourceVersion(state.questions);

    if (readStorage('source-version', '') === state.sourceVersion) {
      state.currentIndex = Number(readStorage('current-index', 0)) || 0;
      state.answers = readStorage('answers', {});
    } else {
      state.currentIndex = 0;
      state.answers = {};
      writeStorage('source-version', state.sourceVersion);
    }

    if (state.currentIndex < 0 || state.currentIndex >= state.questions.length) state.currentIndex = 0;

    elements.source.value = sourceId;
    elements.total.textContent = String(state.questions.length);
    elements.jump.max = String(Math.max(state.questions.length, 1));
    saveGlobalActiveSource();
    renderQuestion();
  }

  function saveProgress() {
    writeStorage('current-index', state.currentIndex);
    writeStorage('answers', state.answers);
  }

  function renderQuestion() {
    const question = state.questions[state.currentIndex];

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
    renderSavedResult(question);
    updateNavigation();
  }

  function renderEmptySource() {
    elements.question.textContent = 'Nguồn này không có câu hỏi hợp lệ.';
    elements.answers.replaceChildren();
    elements.options.replaceChildren();
    elements.result.hidden = true;
    elements.previous.disabled = true;
    elements.next.disabled = true;
  }

  function renderAnswerControls(question) {
    const selected = state.answers[question.id] || '';
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
      input.dataset.option = key;
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

  function renderSavedResult(question) {
    const answer = state.answers[question.id] || '';
    if (answer) showResult(answer, question);
    else elements.result.hidden = true;
  }

  function updateNavigation() {
    elements.previous.disabled = state.currentIndex === 0;
    elements.next.disabled = state.currentIndex === state.questions.length - 1;
  }

  function getSelectedAnswer() {
    return [...elements.answers.querySelectorAll('input:checked')]
      .map(input => input.value)
      .sort()
      .join('');
  }

  function handleAnswerChange() {
    const question = state.questions[state.currentIndex];
    if (!question) return;

    const answer = getSelectedAnswer();
    state.answers[question.id] = answer;
    saveProgress();

    if (answer.length >= question.correctAnswer.length) showResult(answer, question);
    else elements.result.hidden = true;
  }

  function showResult(answer, question) {
    const correct = [...question.correctAnswer].sort().join('');
    const isCorrect = answer.toUpperCase() === correct;

    elements.result.hidden = false;
    elements.result.className = `result-container ${isCorrect ? 'result-correct' : 'result-incorrect'}`;
    elements.resultStatus.textContent = isCorrect ? '✓ Chính xác!' : '✗ Chưa chính xác';
    elements.correctAnswer.textContent = `Đáp án đúng: ${question.correctAnswer}`;
    elements.explanation.textContent = question.explanation;
  }

  function navigate(direction) {
    const nextIndex = state.currentIndex + direction;
    if (nextIndex < 0 || nextIndex >= state.questions.length) return;
    state.currentIndex = nextIndex;
    saveProgress();
    renderQuestion();
  }

  function jumpToQuestion() {
    const target = Number(elements.jump.value);
    if (!Number.isInteger(target) || target < 1 || target > state.questions.length) {
      elements.jump.value = String(state.currentIndex + 1);
      return;
    }
    state.currentIndex = target - 1;
    saveProgress();
    renderQuestion();
  }

  function revealAnswer() {
    const question = state.questions[state.currentIndex];
    if (!question) return;
    state.answers[question.id] = [...question.correctAnswer].sort().join('');
    saveProgress();
    renderQuestion();
  }

  function isTypingTarget(target) {
    return target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement;
  }

  function handleKeyboard(event) {
    if (isTypingTarget(event.target)) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      navigate(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      navigate(1);
    } else if (event.code === 'Space') {
      event.preventDefault();
      revealAnswer();
    }
  }

  function bindEvents() {
    elements.source.addEventListener('change', event => switchSource(event.target.value));
    elements.answers.addEventListener('change', handleAnswerChange);
    elements.previous.addEventListener('click', () => navigate(-1));
    elements.next.addEventListener('click', () => navigate(1));
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

  async function initialize() {
    try {
      await loadSources();
      renderSourceSelect();
      bindEvents();
      switchSource(state.activeSourceId);
    } catch (error) {
      console.error(error);
      elements.question.textContent = error.message || 'Không thể tải câu hỏi.';
    }
  }

  document.addEventListener('DOMContentLoaded', initialize);
})();
