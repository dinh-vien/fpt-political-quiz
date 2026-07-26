# Hệ thống học trắc nghiệm

Website tĩnh để luyện trắc nghiệm các môn lý luận chính trị. Không cần framework hay bước cài đặt phụ thuộc.

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
- `app.js`: tải nguồn, điều hướng, chấm điểm và lưu tiến độ trong trình duyệt.
- `build_sources.js`: pipeline duy nhất để chuyển Markdown thành nguồn câu hỏi JavaScript.
- `sources.js`: danh sách nguồn được tạo tự động.
- `*.md`: dữ liệu gốc có thể chỉnh sửa.
- `*.js` theo tên môn: dữ liệu đã build, được website tải.

## Phím tắt

- `←` / `→`: chuyển câu trước hoặc sau.
- `Space`: hiện đáp án đúng.
