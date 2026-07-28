# Hệ thống học trắc nghiệm

Website tĩnh để luyện trắc nghiệm các môn lý luận chính trị. Không cần framework hay bước cài đặt phụ thuộc.

## Kiểm tra logic

Chạy các bài kiểm tra tự động bằng Node.js:

```powershell
node --test tests/quiz-core.test.mjs
```

## Chạy website

Mở `index.html` bằng trình duyệt, hoặc dùng một static server (khuyến nghị khi public website).

## Thêm một bộ câu hỏi mới

1. Chép file Markdown vào thư mục gốc, ví dụ `ten-mon.md`.
2. Viết câu hỏi theo mẫu:

   ```md
   Nội dung câu hỏi?
   A. Phương án A
   B. Phương án B
   C. Phương án C
   D. Phương án D
   A
   ```

   Số lượng lựa chọn linh hoạt từ `A` đến `Z`. Dòng đáp án có thể viết `A` hoặc `Đáp án: A`; đáp án nhiều lựa chọn dùng dạng `AC`.

3. Chạy:

   ```powershell
   node build_sources.js
   ```

4. Tải lại website. Môn mới sẽ xuất hiện trong danh sách.

Để build lại duy nhất một nguồn sau khi chỉnh Markdown:

```powershell
node build_sources.js ten-mon.md --force
```

> Không chạy `--force` không kèm tên file: các file JavaScript đã tạo sẵn sẽ được giữ nguyên.

## Cấu trúc

- `index.html`: cấu trúc giao diện.
- `styles.css`: toàn bộ giao diện responsive.
- `app.js`: điều phối giao diện, điều hướng và các luồng luyện tập/thi thử.
- `quiz-core.js`: logic thuần cho chuẩn hóa câu hỏi, chấm điểm, tạo phiên luyện tập và trộn dữ liệu.
- `quiz-state.js`: trạng thái khởi tạo của ứng dụng.
- `quiz-storage.js`: đọc/ghi tiến độ trong trình duyệt.
- `tests/quiz-core.test.mjs`: test cho chấm điểm, làm lại câu sai, refresh và kết quả thi.
- `build_sources.js`: pipeline duy nhất để chuyển Markdown thành nguồn câu hỏi JavaScript.
- `sources.js`: danh sách nguồn được tạo tự động.
- `*.md`: dữ liệu gốc có thể chỉnh sửa.
- `*.js` theo tên môn: dữ liệu đã build, được website tải.

## Phím tắt

- `←` / `→`: chuyển câu trước hoặc sau.
- `Space`: hiện hoặc ẩn đáp án đúng ở chế độ luyện tập.

## Chế độ thi

- Mỗi đề thi lấy ngẫu nhiên 60 câu không trùng từ môn đang chọn (hoặc toàn bộ câu nếu môn có ít hơn 60 câu).
- Mỗi bài thi bắt đầu với giới hạn 15 phút và tự nộp khi hết giờ. Trong lúc thi có thể tắt giới hạn thời gian; các vòng làm lại câu sai không giới hạn thời gian.
- Đáp án chỉ được chấm khi bấm **Nộp bài**; điểm được quy đổi về thang 10.
- Có thể làm lại các câu sai nhiều lần. Các vòng làm lại không thay đổi điểm bài thi ban đầu.
- Sau khi nộp bài, có thể thi lại đúng bộ 60 câu hoặc bốc một bộ 60 câu khác.
- Các đề mới ưu tiên không lặp lại các câu bạn đã làm đúng; câu sai hoặc chưa làm vẫn có thể xuất hiện lại để ôn. Khi không còn đủ câu chưa làm đúng để tạo một đề, website sẽ thông báo rồi tự reset vòng trộn.
- Phiên thi đang làm được lưu trong trình duyệt. Bấm **Thoát chế độ thi** để xóa phiên đó và quay lại chế độ luyện tập.
