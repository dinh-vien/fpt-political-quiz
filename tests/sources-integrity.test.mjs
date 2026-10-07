import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'sources.js'), 'utf8'), sandbox);
const catalog = sandbox.window.quizSourceCatalog;

test('sources.js lists at least one source with unique ids', () => {
  assert.ok(catalog.length > 0);
  assert.equal(new Set(catalog.map(source => source.id)).size, catalog.length);
});

for (const entry of catalog) {
  test(`${entry.id}: data file is valid`, () => {
    const context = { window: {} };
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(path.join(root, entry.file), 'utf8'), context);
    const source = context.window.quizSources[entry.id];

    assert.ok(source, `${entry.file} phải đăng ký window.quizSources.${entry.id}`);
    assert.equal(source.questions.length, entry.count, 'count trong sources.js phải khớp số câu');

    source.questions.forEach((question, index) => {
      const label = `câu ${index + 1}`;
      const keys = Object.keys(question.options).filter(key => question.options[key].trim());
      assert.ok(question.question.trim(), `${label}: thiếu nội dung`);
      assert.ok(keys.length >= 2, `${label}: cần ít nhất 2 phương án`);
      assert.ok(question.answer, `${label}: thiếu đáp án`);
      for (const key of question.answer) {
        assert.ok(keys.includes(key), `${label}: đáp án ${key} không nằm trong phương án hợp lệ`);
      }
    });
  });
}
