export function createQuizStorage(getActiveSourceId, prefix = 'quiz:') {
  const storageKey = name => `${prefix}${getActiveSourceId()}:${name}`;

  function read(name, fallback) {
    try {
      const value = localStorage.getItem(storageKey(name));
      return value === null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  }

  function write(name, value) {
    try {
      localStorage.setItem(storageKey(name), JSON.stringify(value));
    } catch (error) {
      console.warn('Không thể lưu tiến độ làm bài.', error);
    }
  }

  function remove(name) {
    try {
      localStorage.removeItem(storageKey(name));
    } catch (error) {
      console.warn('Không thể xóa tiến độ làm bài.', error);
    }
  }

  function readGlobalActiveSource() {
    try {
      return localStorage.getItem(`${prefix}active-source`) || '';
    } catch {
      return '';
    }
  }

  function saveGlobalActiveSource() {
    try {
      localStorage.setItem(`${prefix}active-source`, getActiveSourceId());
    } catch (error) {
      console.warn('Không thể lưu nguồn câu hỏi đang chọn.', error);
    }
  }

  return { read, write, remove, readGlobalActiveSource, saveGlobalActiveSource };
}
