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

// Trạng thái hiển thị của một câu hỏi trong danh sách ô số.
// Khi đang thi, chưa chấm nên chỉ phân biệt đã/chưa trả lời để không lộ đáp án.
export function getQuestionStatus(question, answer, { isExam = false, isSubmitted = false } = {}) {
  const selected = String(answer || '');
  if (isExam && !isSubmitted) return selected ? 'answered' : 'unanswered';
  if (!isExam && selected.length < question.correctAnswer.length) return 'unanswered';
  return isQuestionCorrect(question, selected) ? 'correct' : 'incorrect';
}

export function getExamResults(questions, answers) {
  const correct = questions.filter(question => isQuestionCorrect(question, answers[question.id] || '')).length;
  return { correct, incorrect: questions.length - correct };
}

// ---------------------------------------------------------------------------
// Chế độ học cấp tốc: chia câu hỏi thành khối, mỗi khối làm hai lượt, câu sai
// quay lại sau vài câu cho tới khi trả lời đúng, và cứ vài khối lại ôn dồn.
// ---------------------------------------------------------------------------

export const RUSH_BLOCK_SIZE = 50;
export const RUSH_REVIEW_INTERVAL = 3;
const RUSH_MIN_GAP = 3;
const RUSH_MAX_GAP = 5;

export function getRushBlockCount(total, blockSize = RUSH_BLOCK_SIZE) {
  return Math.ceil(total / blockSize);
}

export function getRushBlockRange(total, blockIndex, blockSize = RUSH_BLOCK_SIZE) {
  return { from: blockIndex * blockSize + 1, to: Math.min((blockIndex + 1) * blockSize, total) };
}

export function getRushBlockIds(questions, blockIndex, blockSize = RUSH_BLOCK_SIZE) {
  return questions.slice(blockIndex * blockSize, (blockIndex + 1) * blockSize).map(question => question.id);
}

// Lượt 1 của khối đi theo thứ tự gốc; các lượt sau xáo trộn để không nhớ theo vị trí.
export function createRushPhase({ kind, block = null, pass = null, ids }, random = Math.random) {
  const keepOrder = kind === 'block' && pass === 1;
  return {
    kind,
    block,
    pass,
    ids: [...ids],
    queue: keepOrder ? [...ids] : shuffleQuestions(ids, random),
    attempted: [],
    failed: []
  };
}

// Ghi nhận câu đầu hàng đợi. Câu sai được chèn lại sau 3–5 câu khác.
export function answerRushPhase(phase, isCorrect, random = Math.random) {
  const [id, ...rest] = phase.queue;
  if (id === undefined) return phase;

  const isFirstAttempt = !phase.attempted.includes(id);
  const attempted = isFirstAttempt ? [...phase.attempted, id] : phase.attempted;
  const failed = isFirstAttempt && !isCorrect ? [...phase.failed, id] : phase.failed;
  if (isCorrect) return { ...phase, queue: rest, attempted, failed };

  const gap = RUSH_MIN_GAP + Math.floor(random() * (RUSH_MAX_GAP - RUSH_MIN_GAP + 1));
  const position = Math.min(gap, rest.length);
  return { ...phase, queue: [...rest.slice(0, position), id, ...rest.slice(position)], attempted, failed };
}

export function getRushRemaining(phase) {
  return new Set(phase.queue).size;
}

export function createRushProgress(sourceVersion) {
  return { sourceVersion, active: false, completedBlocks: [], weakIds: [], blocksSinceReview: 0, lastBlock: -1, phase: null, reveal: null };
}

// Khối chưa hoàn thành kế tiếp sau `after`, quay vòng về đầu nếu cần.
export function findNextRushBlock(completedBlocks, totalBlocks, after = -1) {
  for (let offset = 1; offset <= totalBlocks; offset += 1) {
    const block = (after + offset) % totalBlocks;
    if (!completedBlocks.includes(block)) return block;
  }
  return null;
}

export function beginRushBlock(progress, questions, block, random = Math.random) {
  return {
    ...progress,
    lastBlock: block,
    reveal: null,
    phase: createRushPhase({ kind: 'block', block, pass: 1, ids: getRushBlockIds(questions, block) }, random)
  };
}

// Gọi khi hàng đợi của lượt hiện tại đã rỗng; trả về tiến độ với lượt kế tiếp
// (phase = null nghĩa là đã hoàn thành toàn bộ).
export function advanceRush(progress, questions, random = Math.random) {
  const { phase } = progress;
  const totalBlocks = getRushBlockCount(questions.length);
  const next = { ...progress, completedBlocks: [...progress.completedBlocks], weakIds: [...progress.weakIds], reveal: null };
  const startNextBlock = () => {
    const block = findNextRushBlock(next.completedBlocks, totalBlocks, next.lastBlock);
    return block === null ? { ...next, phase: null } : beginRushBlock(next, questions, block, random);
  };

  if (phase.kind === 'block' && phase.pass === 1) {
    return { ...next, phase: createRushPhase({ kind: 'block', block: phase.block, pass: 2, ids: phase.ids }, random) };
  }

  if (phase.kind === 'block') {
    next.weakIds = [...new Set([...next.weakIds, ...phase.failed])];
    if (!next.completedBlocks.includes(phase.block)) next.completedBlocks.push(phase.block);
    next.blocksSinceReview += 1;
    const isLastBlock = next.completedBlocks.length >= totalBlocks;
    const isReviewDue = next.weakIds.length > 0 && (next.blocksSinceReview >= RUSH_REVIEW_INTERVAL || isLastBlock);
    if (isReviewDue) return { ...next, phase: createRushPhase({ kind: 'review', ids: next.weakIds }, random) };
    return startNextBlock();
  }

  // Ôn dồn xong: câu đúng ngay lần đầu được coi là đã chắc, câu sai vẫn giữ lại để ôn.
  next.weakIds = next.weakIds.filter(id => phase.failed.includes(id));
  next.blocksSinceReview = 0;
  return startNextBlock();
}
