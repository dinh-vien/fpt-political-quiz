import assert from 'node:assert/strict';
import test from 'node:test';
import {
  advanceRush,
  answerRushPhase,
  beginRushBlock,
  createRushPhase,
  createRushProgress,
  findNextRushBlock,
  getRushBlockCount,
  getRushBlockRange,
  getRushRemaining
} from '../quiz-core.js';

const makeQuestions = count => Array.from({ length: count }, (_, index) => ({ id: index + 1 }));
const fixedRandom = value => () => value;

// Trả lời toàn bộ hàng đợi của một lượt; `wrongOnce` là các câu sai ở lần đầu tiên gặp.
function playPhase(phase, wrongOnce = []) {
  const pending = new Set(wrongOnce);
  let current = phase;
  while (current.queue.length) {
    const id = current.queue[0];
    const isCorrect = !pending.has(id);
    pending.delete(id);
    current = answerRushPhase(current, isCorrect, fixedRandom(0));
  }
  return current;
}

test('chia khối 50 câu, khối cuối có thể ngắn hơn', () => {
  assert.equal(getRushBlockCount(636), 13);
  assert.deepEqual(getRushBlockRange(636, 0), { from: 1, to: 50 });
  assert.deepEqual(getRushBlockRange(636, 12), { from: 601, to: 636 });
});

test('lượt 1 giữ thứ tự gốc, lượt 2 xáo trộn nhưng đủ câu', () => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8];
  assert.deepEqual(createRushPhase({ kind: 'block', pass: 1, ids }).queue, ids);
  const second = createRushPhase({ kind: 'block', pass: 2, ids }, fixedRandom(0));
  assert.deepEqual([...second.queue].sort((a, b) => a - b), ids);
  assert.notDeepEqual(second.queue, ids);
});

test('câu sai quay lại sau 3-5 câu khác và vẫn sai thì tiếp tục quay lại', () => {
  const ids = Array.from({ length: 10 }, (_, index) => index + 1);
  let phase = createRushPhase({ kind: 'block', pass: 1, ids });

  phase = answerRushPhase(phase, false, fixedRandom(0));
  assert.equal(phase.queue.indexOf(1), 3);
  assert.deepEqual(phase.failed, [1]);

  const lastGap = answerRushPhase(createRushPhase({ kind: 'block', pass: 1, ids }), false, fixedRandom(0.999));
  assert.equal(lastGap.queue.indexOf(1), 5);

  while (phase.queue[0] !== 1) phase = answerRushPhase(phase, true);
  phase = answerRushPhase(phase, false, fixedRandom(0));
  assert.ok(phase.queue.includes(1));
  assert.deepEqual(phase.failed, [1], 'chỉ tính sai ở lần đầu tiên gặp');
});

test('câu sai khi hàng đợi ngắn hơn khoảng cách được đặt ở cuối', () => {
  let phase = createRushPhase({ kind: 'block', pass: 1, ids: [1, 2] });
  phase = answerRushPhase(phase, false, fixedRandom(0.5));
  assert.deepEqual(phase.queue, [2, 1]);
  phase = createRushPhase({ kind: 'block', pass: 1, ids: [1] });
  phase = answerRushPhase(phase, false);
  assert.deepEqual(phase.queue, [1]);
  assert.equal(getRushRemaining(phase), 1);
});

test('khối chỉ xong khi mọi câu đã đúng, rồi chuyển sang lượt 2 và khối kế tiếp', () => {
  const questions = makeQuestions(120);
  let progress = beginRushBlock(createRushProgress('v'), questions, 0);
  progress = { ...progress, phase: playPhase(progress.phase, [3, 7]) };
  assert.equal(progress.phase.queue.length, 0);

  progress = advanceRush(progress, questions);
  assert.equal(progress.phase.pass, 2);
  assert.equal(progress.phase.block, 0);
  assert.equal(progress.phase.ids.length, 50);

  progress = { ...progress, phase: playPhase(progress.phase, [10]) };
  progress = advanceRush(progress, questions);
  assert.deepEqual(progress.completedBlocks, [0]);
  assert.deepEqual(progress.weakIds, [10], 'chỉ câu sai ở lượt 2 mới bị coi là chưa thuộc');
  assert.equal(progress.phase.kind, 'block');
  assert.equal(progress.phase.block, 1);
  assert.equal(progress.phase.pass, 1);
});

test('ôn dồn sau mỗi 3 khối với câu chưa thuộc, câu đúng ngay được loại khỏi danh sách', () => {
  const questions = makeQuestions(300);
  let progress = createRushProgress('v');
  const failedPerBlock = { 0: [5], 1: [60], 2: [110] };

  for (let block = 0; block < 3; block += 1) {
    progress = beginRushBlock(progress, questions, block);
    progress = advanceRush({ ...progress, phase: playPhase(progress.phase) }, questions);
    progress = { ...progress, phase: playPhase(progress.phase, failedPerBlock[block]) };
    progress = advanceRush(progress, questions);
  }

  assert.equal(progress.phase.kind, 'review');
  assert.deepEqual([...progress.phase.ids].sort((a, b) => a - b), [5, 60, 110]);
  assert.equal(progress.blocksSinceReview, 3);

  progress = { ...progress, phase: playPhase(progress.phase, [60]) };
  progress = advanceRush(progress, questions);
  assert.deepEqual(progress.weakIds, [60]);
  assert.equal(progress.blocksSinceReview, 0);
  assert.equal(progress.phase.kind, 'block');
  assert.equal(progress.phase.block, 3);
});

test('không có câu yếu thì bỏ qua ôn dồn', () => {
  const questions = makeQuestions(300);
  let progress = createRushProgress('v');
  for (let block = 0; block < 3; block += 1) {
    progress = beginRushBlock(progress, questions, block);
    progress = advanceRush({ ...progress, phase: playPhase(progress.phase) }, questions);
    progress = advanceRush({ ...progress, phase: playPhase(progress.phase) }, questions);
  }
  assert.equal(progress.phase.kind, 'block');
  assert.equal(progress.phase.block, 3);
});

test('ôn dồn ở khối cuối rồi kết thúc toàn bộ', () => {
  const questions = makeQuestions(60);
  let progress = createRushProgress('v');
  for (let block = 0; block < 2; block += 1) {
    progress = beginRushBlock(progress, questions, block);
    progress = advanceRush({ ...progress, phase: playPhase(progress.phase) }, questions);
    progress = { ...progress, phase: playPhase(progress.phase, block === 1 ? [55] : []) };
    progress = advanceRush(progress, questions);
  }
  assert.equal(progress.phase.kind, 'review');
  assert.deepEqual(progress.phase.ids, [55]);

  progress = advanceRush({ ...progress, phase: playPhase(progress.phase) }, questions);
  assert.equal(progress.phase, null);
  assert.deepEqual(progress.weakIds, []);
  assert.deepEqual(progress.completedBlocks, [0, 1]);
});

test('tìm khối kế tiếp bỏ qua khối đã xong và quay vòng', () => {
  assert.equal(findNextRushBlock([], 5), 0);
  assert.equal(findNextRushBlock([0, 1], 5), 2);
  assert.equal(findNextRushBlock([0, 1, 2, 3], 5, 3), 4);
  assert.equal(findNextRushBlock([1, 2, 3, 4], 5, 4), 0);
  assert.equal(findNextRushBlock([0, 1, 2], 3, 1), null);
});
