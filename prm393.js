window.quizSources = window.quizSources || {};

window.quizSources["prm393"] = {
  "name": "PRM393 - Lập trình Flutter",
  "questions": [
    {
      "question": "[M1] Flutter là gì?",
      "options": {
        "A": "Ngôn ngữ lập trình của Google",
        "B": "UI toolkit của Google để build app biên dịch native từ một codebase",
        "C": "Framework JavaScript của Facebook",
        "D": "IDE của Google"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M1] Flutter được viết bằng ngôn ngữ nào?",
      "options": {
        "A": "Kotlin",
        "B": "Swift",
        "C": "Dart",
        "D": "JavaScript"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M1] Rendering engine của Flutter (theo slide) là gì?",
      "options": {
        "A": "WebKit",
        "B": "Skia",
        "C": "V8",
        "D": "Unity"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M1] Kiến trúc Flutter gồm 3 lớp theo thứ tự nào?",
      "options": {
        "A": "Embedder → Engine → Framework",
        "B": "Framework (Dart) → Engine (C++) → Embedder",
        "C": "Engine → Framework → Embedder",
        "D": "Widget → Element → RenderObject"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M1] Luồng render đúng của Flutter là:",
      "options": {
        "A": "Render Tree → Widget Tree → GPU → Scene",
        "B": "Widget Tree → Render Tree → Composited Scene → GPU Rendering",
        "C": "Widget Tree → GPU → Render Tree → Scene",
        "D": "Composited Scene → Widget Tree → Render Tree → GPU"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M1] Lớp nào của Flutter viết bằng C++ và xử lý rendering, accessibility, text layout?",
      "options": {
        "A": "Framework",
        "B": "Engine",
        "C": "Embedder",
        "D": "Dart VM"
      },
      "answer": "B",
      "explanation": "Engine: C++, Skia"
    },
    {
      "question": "[M1] Embedder layer chịu trách nhiệm gì?",
      "options": {
        "A": "Định nghĩa Widget Stateless/Stateful",
        "B": "Tích hợp riêng cho từng nền tảng: input, lifecycle, window management",
        "C": "Compile Dart sang JS",
        "D": "Quản lý state"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M1] Câu nào mô tả đúng \"Hot Reload / Hot Restart\" trong slide?",
      "options": {
        "A": "Là tính năng giúp build release nhanh",
        "B": "Là lợi ích \"Fast Development\" của Flutter",
        "C": "Là cách deploy lên Google Play",
        "D": "Là công cụ test"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M1] Khi nào NÊN chọn Flutter?",
      "options": {
        "A": "Game hiệu năng cao, đồ hoạ real-time",
        "B": "Cần tùy biến sâu OS",
        "C": "MVP, startup, prototype, app nghiệp vụ, đội ít nhân lực native",
        "D": "Truy cập phần cứng mức rất thấp"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M1] Khi nào native development được ưu tiên hơn Flutter?",
      "options": {
        "A": "App e-commerce đơn giản",
        "B": "Dashboard nội bộ",
        "C": "Cần truy cập phần cứng rất thấp / game hiệu năng cao / UI-UX riêng từng nền tảng",
        "D": "MVP cần ra thị trường nhanh"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M1] Cơ chế Flutter gọi code native Android/iOS (Kotlin/Swift) là gì?",
      "options": {
        "A": "REST API",
        "B": "Platform Channels",
        "C": "Isolates",
        "D": "Streams"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M1] So sánh: React Native \"output\" ra sao theo slide?",
      "options": {
        "A": "Native UI + Engine",
        "B": "Bridges to Native",
        "C": "Pure Native",
        "D": "Web only"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M1] Lệnh nào dùng để kiểm tra cài đặt Flutter?",
      "options": {
        "A": "flutter check",
        "B": "flutter verify",
        "C": "flutter doctor",
        "D": "flutter test"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M1] File nào khai báo dependencies và assets của project Flutter?",
      "options": {
        "A": "main.dart",
        "B": "pubspec.yaml",
        "C": "build.gradle",
        "D": "AndroidManifest.xml"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M1] Entry point của app Flutter nằm ở đâu?",
      "options": {
        "A": "android/main.kt",
        "B": "lib/main.dart",
        "C": "test/main.dart",
        "D": "web/index.html"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M1] Thư mục test/ trong project chứa gì?",
      "options": {
        "A": "Code chính",
        "B": "Code Android",
        "C": "Unit test files",
        "D": "Assets"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M1] Môi trường nào KHÔNG cần cài đặt, chạy Flutter ngay trong trình duyệt?",
      "options": {
        "A": "VS Code",
        "B": "Android Studio",
        "C": "DartPad",
        "D": "Xcode"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M1] Chạy app trong VS Code bằng phím/lệnh nào?",
      "options": {
        "A": "F5 hoặc flutter run",
        "B": "F12",
        "C": "Ctrl+B",
        "D": "dart build"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M1] Flutter được hỗ trợ trên nền tảng nào?",
      "options": {
        "A": "Chỉ Android & iOS",
        "B": "Android, iOS, Web, macOS, Linux, Windows",
        "C": "Chỉ mobile và web",
        "D": "Chỉ Android"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M1] Mốc lịch sử nào đúng?",
      "options": {
        "A": "2015 Flutter 1.0",
        "B": "2018 Flutter 1.0",
        "C": "2021 Flutter 1.0",
        "D": "2017 Flutter 3.x"
      },
      "answer": "B",
      "explanation": "2015 Sky, 2017 Alpha, 2018 1.0, 2021 2.0 thêm Web/Desktop, 2023–2025 3.x"
    },
    {
      "question": "[M2] Dart kết hợp hai kiểu biên dịch nào?",
      "options": {
        "A": "AOT và JIT",
        "B": "Chỉ interpreter",
        "C": "Chỉ AOT",
        "D": "Bytecode và JS"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M2] JIT dùng cho giai đoạn nào, AOT dùng cho giai đoạn nào?",
      "options": {
        "A": "JIT: production – AOT: development",
        "B": "JIT: development (fast dev) – AOT: production (fast prod)",
        "C": "Cả hai đều chỉ cho production",
        "D": "Cả hai đều chỉ cho development"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Mọi chương trình Dart bắt đầu từ đâu?",
      "options": {
        "A": "start()",
        "B": "main()",
        "C": "init()",
        "D": "run()"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Kiểu nào đại diện cho \"không có giá trị trả về\"?",
      "options": {
        "A": "Never",
        "B": "null",
        "C": "void",
        "D": "dynamic"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M2] Kiểu Never dùng cho:",
      "options": {
        "A": "Hàm không trả về giá trị",
        "B": "Hàm không bao giờ return (luôn throw)",
        "C": "Biến nullable",
        "D": "Biến hằng"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Sự khác nhau final và const:",
      "options": {
        "A": "final: compile-time, const: runtime",
        "B": "final: gán một lần (runtime), const: hằng compile-time",
        "C": "Hai cái giống hệt",
        "D": "const có thể gán lại"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] dynamic x = 10; x = \"Hello\"; có hợp lệ không?",
      "options": {
        "A": "Không, lỗi compile",
        "B": "Có, vì dynamic có kiểu xác định ở runtime",
        "C": "Chỉ hợp lệ với var",
        "D": "Chỉ hợp lệ với final"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] var name = \"FPT\"; – kiểu của name là gì?",
      "options": {
        "A": "dynamic",
        "B": "String (suy luận)",
        "C": "Object",
        "D": "Không xác định"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Cú pháp nào dùng để nội suy một biểu thức (vd độ dài) vào chuỗi?",
      "options": {
        "A": "\"Length: $name.length\"",
        "B": "\"Length: ${name.length}\"",
        "C": "\"Length: {name.length}\"",
        "D": "\"Length: #{name.length}\""
      },
      "answer": "B",
      "explanation": "`$var` cho biến đơn, `${expr}` cho biểu thức; `$name.length` chỉ nội suy `name`"
    },
    {
      "question": "[M2] Set {1,2,2,3} có kết quả:",
      "options": {
        "A": "{1,2,2,3}",
        "B": "{1,2,3}",
        "C": "[1,2,3]",
        "D": "Lỗi"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Cấu trúc nào lưu cặp key–value?",
      "options": {
        "A": "List",
        "B": "Set",
        "C": "Map",
        "D": "Iterable"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M2] Đâu là cách viết hàm arrow đúng?",
      "options": {
        "A": "int add(int a,int b)=>a+b;",
        "B": "int add(int a,int b)->a+b;",
        "C": "int add(int a,int b)=>{a+b};",
        "D": "int add => (a,b) a+b;"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M2] Named parameter có default trong Dart khai báo bằng:",
      "options": {
        "A": "[]",
        "B": "{}",
        "C": "()",
        "D": "<>"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] void greet({String name = \"Guest\"}) gọi greet(); in ra:",
      "options": {
        "A": "null",
        "B": "Guest",
        "C": "name",
        "D": "Lỗi"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Point.origin(): x=0, y=0; là loại constructor nào?",
      "options": {
        "A": "Default",
        "B": "Named constructor",
        "C": "Factory",
        "D": "Const"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Từ khoá nào dùng để kế thừa, annotation nào dùng để ghi đè?",
      "options": {
        "A": "implements / @override",
        "B": "extends / @override",
        "C": "with / @Override",
        "D": "extends / @inherit"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] map() trên Iterable:",
      "options": {
        "A": "Lọc phần tử",
        "B": "Biến đổi từng phần tử → Iterable mới (giữ nguyên độ dài)",
        "C": "Sắp xếp",
        "D": "Xoá phần tử"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] where() trên Iterable:",
      "options": {
        "A": "Biến đổi kiểu",
        "B": "Giữ phần tử thoả điều kiện (có thể đổi độ dài, giữ kiểu)",
        "C": "Cộng dồn",
        "D": "Đảo ngược"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] map/where là lazy, để lấy kết quả cụ thể cần:",
      "options": {
        "A": "toList() / toSet()",
        "B": "build()",
        "C": "execute()",
        "D": "run()"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M2] Khối nào luôn chạy dù có exception hay không?",
      "options": {
        "A": "try",
        "B": "catch",
        "C": "finally",
        "D": "on"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M2] catch (e, s) – s là gì?",
      "options": {
        "A": "Status",
        "B": "Stack trace",
        "C": "String",
        "D": "Scope"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] rethrow dùng để:",
      "options": {
        "A": "Bỏ qua lỗi",
        "B": "Ném lại lỗi sau khi log để propagate",
        "C": "Thử lại",
        "D": "Kết thúc chương trình"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Hàm async trả về kiểu gì?",
      "options": {
        "A": "void luôn",
        "B": "Future<T>",
        "C": "Stream<T>",
        "D": "Iterable<T>"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] await làm gì?",
      "options": {
        "A": "Chạy song song",
        "B": "Tạm dừng hàm cho tới khi Future hoàn thành",
        "C": "Huỷ Future",
        "D": "Tạo Future mới"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Stream mặc định là loại nào?",
      "options": {
        "A": "Broadcast",
        "B": "Single-subscription (một listener)",
        "C": "Multi-cast",
        "D": "Synchronous"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Hủy lắng nghe stream dùng:",
      "options": {
        "A": "stream.close()",
        "B": "subscription.cancel()",
        "C": "stream.stop()",
        "D": "listen(null)"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Dùng await for để:",
      "options": {
        "A": "Lặp qua List",
        "B": "Tiêu thụ Stream trong hàm async",
        "C": "Tạo Future",
        "D": "Tạo isolate"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Toán tử ?? trong null safety nghĩa là:",
      "options": {
        "A": "Ép non-null",
        "B": "Nếu null thì dùng giá trị mặc định",
        "C": "Truy cập an toàn",
        "D": "So sánh kiểu"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Toán tử ! (sau biến) nghĩa là:",
      "options": {
        "A": "Phủ định bool",
        "B": "Khẳng định giá trị không null (có thể gây lỗi runtime nếu null)",
        "C": "Gán null",
        "D": "So sánh khác"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M2] Null safety của Dart được kiểm tra khi nào?",
      "options": {
        "A": "Runtime",
        "B": "Compile-time",
        "C": "Chỉ khi test",
        "D": "Không kiểm tra"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Abstract class dùng để:",
      "options": {
        "A": "Tạo object trực tiếp",
        "B": "Định nghĩa cấu trúc, ép lớp con phải implement các hàm không có body",
        "C": "Chỉ chứa biến static",
        "D": "Thay thế mixin"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Trong Flutter, State<T> là:",
      "options": {
        "A": "Mixin",
        "B": "Abstract class",
        "C": "Enum",
        "D": "Interface riêng"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Trong Dart, mọi class đều:",
      "options": {
        "A": "Không thể implements",
        "B": "Tự động định nghĩa một implicit interface",
        "C": "Phải khai báo interface riêng",
        "D": "Chỉ là abstract"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] implements buộc:",
      "options": {
        "A": "Kế thừa behavior",
        "B": "Override đầy đủ mọi thành viên (chỉ lấy chữ ký)",
        "C": "Mix code",
        "D": "Không buộc gì"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Ghép đúng: extends / implements / with",
      "options": {
        "A": "Mix code / contract / inherit",
        "B": "Inherit behavior / contract only / mix in reusable code",
        "C": "Contract / inherit / mix",
        "D": "Inherit / mix / contract"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Mixin được khai báo bằng từ khoá:",
      "options": {
        "A": "mixin",
        "B": "trait",
        "C": "interface",
        "D": "include"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M3] Mục đích chính của mixin:",
      "options": {
        "A": "Chia sẻ hành vi mà không cần chuỗi kế thừa",
        "B": "Tạo hằng số",
        "C": "Tạo exception",
        "D": "Tạo isolate"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M3] mixin CanBark on Pet nghĩa là:",
      "options": {
        "A": "CanBark kế thừa Pet",
        "B": "Chỉ class nào là (extends) Pet mới dùng được CanBark",
        "C": "Pet dùng CanBark",
        "D": "Mixin bắt buộc là abstract"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Factory constructor dùng để:",
      "options": {
        "A": "Luôn tạo object mới",
        "B": "Kiểm soát việc tạo instance (cache, singleton, parse JSON, kiểm tra kiểu)",
        "C": "Khai báo biến",
        "D": "Tạo interface"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Ứng dụng nào KHÔNG phải use case của factory theo slide?",
      "options": {
        "A": "Singleton",
        "B": ".fromJson()",
        "C": "Database adapter chọn theo kiểu",
        "D": "Vẽ UI trực tiếp"
      },
      "answer": "D",
      "explanation": ""
    },
    {
      "question": "[M3] Generics giúp:",
      "options": {
        "A": "Giảm tốc độ",
        "B": "Type-safety lúc compile, tránh dùng dynamic sai",
        "C": "Bỏ kiểu dữ liệu",
        "D": "Chỉ dùng cho List"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] class Box<T extends Animal> nghĩa là:",
      "options": {
        "A": "T là bất kỳ kiểu nào",
        "B": "T bắt buộc là lớp con của Animal",
        "C": "T là abstract",
        "D": "Box kế thừa Animal"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Kết quả:\n```dart\nvar base=[1,2,3];\nvar list=[...base, if(true) 99, for(var x in base) x*10];\nprint(list);\n```",
      "options": {
        "A": "[1,2,3,99,10,20,30]",
        "B": "[1,2,3,99]",
        "C": "[99,10,20,30]",
        "D": "Lỗi"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M3] ... trong collection literal gọi là:",
      "options": {
        "A": "Rest operator",
        "B": "Spread operator",
        "C": "Cascade",
        "D": "Range"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Custom exception được tạo bằng cách:",
      "options": {
        "A": "extends Error bắt buộc",
        "B": "class X implements Exception",
        "C": "class X with Exception",
        "D": "Không thể tạo"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Dart có mấy hàng đợi async chính và cái nào ưu tiên cao hơn?",
      "options": {
        "A": "Một hàng đợi",
        "B": "Hai hàng: Microtask (ưu tiên cao) và Event",
        "C": "Hai hàng: Event ưu tiên cao hơn",
        "D": "Ba hàng"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Kết quả của:\n```dart\nprint(\"A\");\nscheduleMicrotask(()=>print(\"micro\"));\nFuture(()=>print(\"future\"));\nprint(\"B\");\n```",
      "options": {
        "A": "A, micro, future, B",
        "B": "A, B, future, micro",
        "C": "A, B, micro, future",
        "D": "micro, A, B, future"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M3] Future thường (Future(() => ...)) được xếp vào:",
      "options": {
        "A": "Microtask queue",
        "B": "Event queue",
        "C": "Không xếp hàng",
        "D": "Isolate khác"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Kết quả:\n```dart\nFuture(() => 1).then((v) => v + 1).then((v) => print(v));\n```",
      "options": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "null"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] async* và yield dùng để:",
      "options": {
        "A": "Tạo Future",
        "B": "Tạo Stream generator",
        "C": "Tạo isolate",
        "D": "Tạo mixin"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] StreamController.broadcast() cho phép:",
      "options": {
        "A": "Chỉ một listener",
        "B": "Nhiều listener nhận cùng event",
        "C": "Chỉ phát một lần",
        "D": "Không phát event"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Với 2 listener broadcast và add(1)..add(2), output là:",
      "options": {
        "A": "A:1 A:2 B:1 B:2",
        "B": "A:1 B:1 A:2 B:2",
        "C": "A:1 A:2",
        "D": "B:1 B:2"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Repository Pattern: luồng đúng là",
      "options": {
        "A": "Data → UI → Repository",
        "B": "UI → Repository → Data (API/DB)",
        "C": "Repository → UI → Data",
        "D": "UI → Data → Repository"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Lợi ích của Repository Pattern:",
      "options": {
        "A": "Testable, maintainable, làm nền cho Bloc/Riverpod/Provider",
        "B": "Tăng kích thước app",
        "C": "Thay thế UI",
        "D": "Chỉ dùng cho SQLite"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M3] Cách tránh block main isolate với tác vụ CPU nặng:",
      "options": {
        "A": "Đặt vòng lặp trong build()",
        "B": "Dùng Isolates",
        "C": "Dùng setState nhiều lần",
        "D": "Dùng GlobalKey"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] StreamBuilder dùng để:",
      "options": {
        "A": "Build stream từ Future",
        "B": "Rebuild widget theo dữ liệu của Stream",
        "C": "Tạo broadcast",
        "D": "Hủy stream"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M3] Cách để giảm rebuild cost theo slide \"Performance Best Practices\":",
      "options": {
        "A": "Dùng const widgets",
        "B": "Dùng nhiều setState",
        "C": "Chạy I/O đồng bộ",
        "D": "Dùng vòng lặp nặng trong UI"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] \"Everything is a Widget\" nghĩa là:",
      "options": {
        "A": "Chỉ Button là widget",
        "B": "Mọi thành phần UI (màn hình, nút, text…) đều là widget; UI xây bằng cách compose widget",
        "C": "Widget chỉ là layout",
        "D": "Widget chỉ dùng cho Android"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M4] Widget mô tả những gì?",
      "options": {
        "A": "Chỉ màu sắc",
        "B": "Cấu trúc (layout), giao diện (style), hành vi (interaction)",
        "C": "Chỉ logic",
        "D": "Chỉ dữ liệu"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M4] Icon trong Flutter lấy từ thư viện nào?",
      "options": {
        "A": "FontAwesome",
        "B": "Material Design Icons",
        "C": "Bootstrap",
        "D": "Ionicons"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M4] Hàm nào mở hộp chọn ngày kiểu Material?",
      "options": {
        "A": "showDatePicker",
        "B": "openCalendar",
        "C": "DatePicker.show",
        "D": "pickDate"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] Widget nào cho phép chọn MỘT lựa chọn trong nhóm?",
      "options": {
        "A": "Switch",
        "B": "Slider",
        "C": "RadioListTile",
        "D": "Checkbox"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M4] Widget nào điều chỉnh giá trị liên tục trong một khoảng?",
      "options": {
        "A": "Switch",
        "B": "Slider",
        "C": "Radio",
        "D": "Chip"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M4] Widget nào bật/tắt giá trị boolean (ON/OFF)?",
      "options": {
        "A": "Slider",
        "B": "Switch",
        "C": "TextField",
        "D": "DropdownButton"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M4] showTimePicker dùng cho:",
      "options": {
        "A": "Chọn ngày",
        "B": "Chọn giờ (dialog Material)",
        "C": "Chọn màu",
        "D": "Chọn file"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M4] Scaffold cung cấp:",
      "options": {
        "A": "AppBar, Body, FloatingActionButton…",
        "B": "Chỉ Body",
        "C": "Chỉ Navigation",
        "D": "Chỉ Theme"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] ThemeData dùng để:",
      "options": {
        "A": "Định nghĩa màu, typography, shape toàn app",
        "B": "Quản lý navigation",
        "C": "Gọi API",
        "D": "Lưu dữ liệu"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] Để hỗ trợ Dark Mode dùng cặp thuộc tính nào?",
      "options": {
        "A": "theme + darkTheme + themeMode",
        "B": "color + mode",
        "C": "dark + light",
        "D": "style + night"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] BoxFit.cover dùng với widget nào?",
      "options": {
        "A": "Text",
        "B": "Image",
        "C": "Icon",
        "D": "Card"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M4] Image.network và Image.asset khác nhau:",
      "options": {
        "A": "network: ảnh từ URL, asset: ảnh trong bundle app",
        "B": "network: ảnh trong máy, asset: URL",
        "C": "Giống nhau",
        "D": "asset chỉ cho icon"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] BottomNavigationBar hiển thị:",
      "options": {
        "A": "2–5 tab điều hướng ở dưới",
        "B": "10 tab",
        "C": "Menu bên trái",
        "D": "Chỉ 1 tab"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] Pattern hiển thị thông tin ngắn gọn theo Material:",
      "options": {
        "A": "Card + ListTile",
        "B": "Container + Text",
        "C": "Stack + Positioned",
        "D": "Row + Column"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] CircleAvatar thường đặt ở thuộc tính nào của ListTile?",
      "options": {
        "A": "title",
        "B": "leading",
        "C": "trailing",
        "D": "subtitle"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M4] Lỗi \"ListView inside Column\" sửa bằng:",
      "options": {
        "A": "Wrap với Expanded",
        "B": "Xoá ListView",
        "C": "Dùng setState",
        "D": "Dùng const"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] Overflow trên màn hình nhỏ sửa bằng:",
      "options": {
        "A": "Flexible / SingleChildScrollView",
        "B": "Tăng font",
        "C": "Xoá padding",
        "D": "Dùng GlobalKey"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] \"UI không cập nhật\" thường do:",
      "options": {
        "A": "Quên gọi setState()",
        "B": "Quên import",
        "C": "Quên build",
        "D": "Quên dispose"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] Picker gọi lỗi, nguyên nhân thường gặp:",
      "options": {
        "A": "Thiếu BuildContext hợp lệ",
        "B": "Thiếu pubspec",
        "C": "Thiếu assets",
        "D": "Thiếu Theme"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] ListView.builder phù hợp khi:",
      "options": {
        "A": "Danh sách ngắn cố định",
        "B": "Danh sách dài (tạo item lười, theo nhu cầu)",
        "C": "Không có dữ liệu",
        "D": "Chỉ dùng cho GridView"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M4] SizedBox và Padding dùng để:",
      "options": {
        "A": "Tạo khoảng cách nhất quán (layout polish)",
        "B": "Tạo animation",
        "C": "Gọi API",
        "D": "Điều hướng"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] Trong VS Code, \"Wrap with Widget\" giúp:",
      "options": {
        "A": "Bọc widget bằng Padding, Center, Expanded… nhanh",
        "B": "Build release",
        "C": "Chạy test",
        "D": "Format code"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M4] Hành động onTap → SnackBar(title) trong practice task nhằm:",
      "options": {
        "A": "Hiển thị thông báo ngắn khi bấm item",
        "B": "Điều hướng",
        "C": "Lưu DB",
        "D": "Gọi API"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Navigator quản lý các màn hình theo cấu trúc nào?",
      "options": {
        "A": "Queue",
        "B": "Stack",
        "C": "Tree",
        "D": "Map"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] Navigator.push():",
      "options": {
        "A": "Xoá route hiện tại",
        "B": "Thêm route mới lên đỉnh stack",
        "C": "Thay route",
        "D": "Quay lại"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] Navigator.pop():",
      "options": {
        "A": "Thêm route",
        "B": "Gỡ route trên cùng, hiển thị route bên dưới",
        "C": "Thay thế route",
        "D": "Không làm gì"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] pushReplacement():",
      "options": {
        "A": "Thêm route chồng lên",
        "B": "Thay route hiện tại bằng route mới",
        "C": "Pop tất cả",
        "D": "Pop có điều kiện"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] maybePop():",
      "options": {
        "A": "Luôn pop",
        "B": "Pop có điều kiện",
        "C": "Push có điều kiện",
        "D": "Xoá stack"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] pushNamed(context, '/home') làm gì?",
      "options": {
        "A": "Điều hướng theo tên route",
        "B": "Điều hướng theo URL web",
        "C": "Đóng app",
        "D": "Tải trang"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] MaterialPageRoute(builder: ...) – builder trả về:",
      "options": {
        "A": "Route tiếp theo",
        "B": "Widget định nghĩa UI của màn hình đích",
        "C": "Context",
        "D": "Theme"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] Named routes giúp:",
      "options": {
        "A": "Tạo map tên → màn hình để điều hướng đơn giản",
        "B": "Tăng tốc build",
        "C": "Lưu state",
        "D": "Gọi API"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Điểm khác biệt chính Navigator 2.0 so với 1.0:",
      "options": {
        "A": "Imperative – gọi push/pop thủ công",
        "B": "Declarative – mô tả stack mong muốn",
        "C": "Không hỗ trợ web",
        "D": "Không dùng Pages"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] Navigator 1.0 là mô hình:",
      "options": {
        "A": "Declarative",
        "B": "Imperative",
        "C": "Reactive",
        "D": "Functional"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] Deep linking cho phép:",
      "options": {
        "A": "Mở màn hình cụ thể qua URL/nguồn ngoài",
        "B": "Chỉ mở trang chủ",
        "C": "Lưu dữ liệu",
        "D": "Gọi API"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Cấu hình deep link Android thực hiện ở:",
      "options": {
        "A": "Info.plist",
        "B": "AndroidManifest.xml (intent-filter)",
        "C": "pubspec.yaml",
        "D": "build.gradle"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] Trong intent-filter deep link, cặp scheme/host ví dụ:",
      "options": {
        "A": "scheme=\"movieapps\" host=\"movies\"",
        "B": "scheme=\"http\" host=\"local\"",
        "C": "scheme=\"app\" host=\"home\"",
        "D": "Không cần"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Lệnh test deep link Android bằng terminal:",
      "options": {
        "A": "adb shell am start -a android.intent.action.VIEW -d \"movieapps://movies?id=12\"",
        "B": "flutter link",
        "C": "adb install",
        "D": "flutter deeplink"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Cấu hình iOS deep link (universal link) cần bật capability:",
      "options": {
        "A": "Push Notifications",
        "B": "Associated Domains",
        "C": "Background Modes",
        "D": "Maps"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] Custom scheme trên iOS khai báo ở đâu?",
      "options": {
        "A": "Info.plist → URL Types → URL Schemes",
        "B": "AndroidManifest",
        "C": "pubspec",
        "D": "main.dart"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Domain entry cho iOS có dạng:",
      "options": {
        "A": "applinks:movieapps.com",
        "B": "http://movieapps.com",
        "C": "ios:movieapps",
        "D": "link:movieapps"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Xử lý deep link đến trong code dùng:",
      "options": {
        "A": "onGenerateRoute",
        "B": "onTap",
        "C": "onPressed",
        "D": "onChanged"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Stack + Positioned trong Hero Banner dùng để:",
      "options": {
        "A": "Chồng widget lên nhau (poster + gradient overlay)",
        "B": "Tạo list",
        "C": "Tạo form",
        "D": "Gọi API"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Wrap + Chip dùng cho:",
      "options": {
        "A": "Genre chips tự xuống dòng",
        "B": "Danh sách dài",
        "C": "Điều hướng",
        "D": "Animation"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] StatelessWidget vs StatefulWidget:",
      "options": {
        "A": "Stateless: rebuild khi thay đổi state",
        "B": "Stateless: UI tĩnh (logo, text); Stateful: UI tương tác (form, counter) dùng setState",
        "C": "Cả hai đều dùng setState",
        "D": "Stateful không rebuild"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] setState() làm gì?",
      "options": {
        "A": "Lưu DB",
        "B": "Báo Flutter rebuild widget",
        "C": "Điều hướng",
        "D": "Huỷ widget"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M5] \"Lifting state up\" là:",
      "options": {
        "A": "Chuyển state lên widget tổ tiên chung để chia sẻ giữa các widget con",
        "B": "Chuyển state xuống widget con",
        "C": "Xoá state",
        "D": "Lưu state vào file"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] InheritedWidget dùng để:",
      "options": {
        "A": "Truyền dữ liệu xuống cây widget hiệu quả",
        "B": "Điều hướng",
        "C": "Lưu DB",
        "D": "Gọi API"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Lấy InheritedWidget từ context bằng:",
      "options": {
        "A": "context.dependOnInheritedWidgetOfExactType<T>()",
        "B": "context.findAll()",
        "C": "Navigator.of(context)",
        "D": "setState()"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Provider cần gì để thông báo UI thay đổi?",
      "options": {
        "A": "Model with ChangeNotifier + gọi notifyListeners()",
        "B": "setState() trong model",
        "C": "Navigator.push",
        "D": "Future.delayed"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] ChangeNotifierProvider có vai trò:",
      "options": {
        "A": "Cung cấp (create) model cho cây widget con",
        "B": "Điều hướng",
        "C": "Tạo animation",
        "D": "Lưu file"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Consumer<CounterModel> dùng để:",
      "options": {
        "A": "Lắng nghe model và rebuild phần UI cần thiết",
        "B": "Tạo model",
        "C": "Gọi API",
        "D": "Điều hướng"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] Trong slide \"Combining Navigation & State\", điều kiện nào dẫn tới /dashboard?",
      "options": {
        "A": "appState.loggedIn == true",
        "B": "loggedIn == false",
        "C": "Luôn luôn",
        "D": "Không có"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M5] AppState extends ChangeNotifier – notifyListeners() được gọi khi:",
      "options": {
        "A": "Khởi tạo class",
        "B": "Sau khi đổi trạng thái (vd login)",
        "C": "Khi build",
        "D": "Khi dispose"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M6] Responsive UI là:",
      "options": {
        "A": "Layout thay đổi theo không gian khả dụng (vd Column → Row, 2 cột → 4 cột)",
        "B": "Layout thay đổi theo loại thiết bị",
        "C": "Chỉ đổi màu",
        "D": "Chỉ đổi font"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] Adaptive UI là:",
      "options": {
        "A": "Layout thay đổi theo loại thiết bị (BottomNav → NavigationRail, Drawer → Sidebar)",
        "B": "Layout thay đổi theo padding",
        "C": "Chỉ cho Android",
        "D": "Chỉ cho Web"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] MediaQuery.of(context).size.width trả về:",
      "options": {
        "A": "Chiều rộng cha",
        "B": "Chiều rộng màn hình",
        "C": "Chiều cao",
        "D": "Orientation"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M6] MediaQuery cung cấp thông tin nào?",
      "options": {
        "A": "Width, height, orientation, safe-area padding, pixel density",
        "B": "Chỉ width",
        "C": "Chỉ theme",
        "D": "Chỉ locale"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] LayoutBuilder cho biết:",
      "options": {
        "A": "Kích thước toàn màn hình",
        "B": "Ràng buộc (constraints) của widget cha",
        "C": "Orientation",
        "D": "Pixel density"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M6] Khác biệt cốt lõi MediaQuery và LayoutBuilder:",
      "options": {
        "A": "MediaQuery: kích thước màn hình; LayoutBuilder: constraint của cha",
        "B": "Giống nhau",
        "C": "LayoutBuilder dùng cho màn hình, MediaQuery cho cha",
        "D": "Không khác"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] OrientationBuilder dùng để:",
      "options": {
        "A": "Phát hiện xoay thiết bị (portrait/landscape)",
        "B": "Đo width",
        "C": "Tạo grid",
        "D": "Điều hướng"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] Demo slide: Portrait hiển thị gì, Landscape hiển thị gì?",
      "options": {
        "A": "Portrait: list – Landscape: two-column",
        "B": "Portrait: grid – Landscape: list",
        "C": "Đều là list",
        "D": "Đều là grid"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] Breakpoint ví dụ trong slide: <400 Small, 400–800 Medium, >800 Large. Width 600 → layout nào?",
      "options": {
        "A": "Small",
        "B": "Medium",
        "C": "Large",
        "D": "Không xác định"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M6] Ví dụ breakpoint 600 trong code: w < 600 ? \"Mobile Layout\" : \"Tablet Layout\". Width 720 → hiển thị:",
      "options": {
        "A": "Mobile Layout",
        "B": "Tablet Layout",
        "C": "Lỗi",
        "D": "Không hiển thị"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M6] Expanded trong Row/Column dùng để:",
      "options": {
        "A": "Chiếm phần không gian còn lại, tránh overflow",
        "B": "Thêm padding",
        "C": "Tạo grid",
        "D": "Tạo list"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] Flexible khác Expanded:",
      "options": {
        "A": "Flexible cho phép child co giãn trong Row/Column linh hoạt hơn (không bắt buộc chiếm hết)",
        "B": "Giống hệt",
        "C": "Flexible chỉ cho Stack",
        "D": "Flexible chỉ cho ListView"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] Wrap dùng để:",
      "options": {
        "A": "Tự xuống dòng khi hết chỗ",
        "B": "Chồng widget",
        "C": "Scroll ngang",
        "D": "Tạo animation"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] AspectRatio giúp:",
      "options": {
        "A": "Tránh ảnh bị méo/kéo giãn",
        "B": "Tăng tốc build",
        "C": "Điều hướng",
        "D": "Tạo form"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] FractionallySizedBox dùng để:",
      "options": {
        "A": "Kích thước theo phần trăm của cha",
        "B": "Kích thước cố định",
        "C": "Tạo grid",
        "D": "Điều hướng"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] GridView.count(crossAxisCount: width < 600 ? 2 : 4) nghĩa là:",
      "options": {
        "A": "<600 → 2 cột, ≥600 → 4 cột",
        "B": "<600 → 4 cột",
        "C": "Luôn 2 cột",
        "D": "Luôn 4 cột"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] Số cột gợi ý: Mobile / Tablet / Desktop:",
      "options": {
        "A": "2 / 3–4 / 5–6",
        "B": "1 / 2 / 3",
        "C": "4 / 4 / 4",
        "D": "6 / 4 / 2"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] SafeArea dùng để:",
      "options": {
        "A": "Tránh notch, Dynamic Island, góc cong",
        "B": "Tăng kích thước",
        "C": "Tạo animation",
        "D": "Lưu dữ liệu"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] Genre chips nên dùng widget nào để tự xuống dòng không cần điều kiện?",
      "options": {
        "A": "Row",
        "B": "Wrap",
        "C": "Stack",
        "D": "Column"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M6] \"Prefer Wrap over Row\" khi nào?",
      "options": {
        "A": "Danh sách chip dài",
        "B": "Một nút duy nhất",
        "C": "Một ảnh",
        "D": "Một icon"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] Best practice nào đúng?",
      "options": {
        "A": "Dùng giá trị cố định cho mọi kích thước",
        "B": "Tránh fixed values, dùng component nhận biết constraint, test nhiều kích thước",
        "C": "Chỉ test trên 1 máy",
        "D": "Không dùng Layout Explorer"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M6] Công cụ nào hỗ trợ kiểm tra layout?",
      "options": {
        "A": "Flutter Inspector – Layout Explorer",
        "B": "flutter doctor",
        "C": "adb",
        "D": "pub get"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] Tablet layout (>800px) trong Lab 6.3 yêu cầu:",
      "options": {
        "A": "Sidebar filter, danh sách 2 cột, spacing lớn hơn",
        "B": "Chỉ 1 cột",
        "C": "Bỏ sidebar",
        "D": "Giảm spacing"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M6] DropdownButton ... onChanged: (v) => setState(() => selectedSort = v!) dùng để:",
      "options": {
        "A": "Chọn kiểu sắp xếp (A–Z, Z–A, Rating, Year)",
        "B": "Điều hướng",
        "C": "Gọi API",
        "D": "Lưu DB"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Khi cần validate, nên dùng widget nào?",
      "options": {
        "A": "TextField trong Column",
        "B": "TextFormField trong Form",
        "C": "Text",
        "D": "Container"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M7] GlobalKey<FormState> cho phép:",
      "options": {
        "A": "Validate, save, reset tất cả field",
        "B": "Điều hướng",
        "C": "Lưu DB",
        "D": "Gọi API"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Ba phương thức chính của FormState:",
      "options": {
        "A": "validate(), save(), reset()",
        "B": "submit(), clear(), load()",
        "C": "check(), keep(), undo()",
        "D": "push(), pop(), replace()"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Chữ ký của validator:",
      "options": {
        "A": "String? Function(String? value)",
        "B": "bool Function(String)",
        "C": "void Function()",
        "D": "String Function(int)"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Validator trả về gì khi hợp lệ?",
      "options": {
        "A": "\"OK\"",
        "B": "null",
        "C": "true",
        "D": "\"\""
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M7] Validator trả về gì khi không hợp lệ?",
      "options": {
        "A": "null",
        "B": "Chuỗi thông báo lỗi",
        "C": "false",
        "D": "Exception"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M7] Luồng submit chuẩn:",
      "options": {
        "A": "save → validate → SnackBar",
        "B": "validate → (nếu hợp lệ) save/submit → SnackBar",
        "C": "SnackBar → validate → save",
        "D": "reset → save → validate"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M7] AutovalidateMode có các giá trị:",
      "options": {
        "A": "disabled, always, onUserInteraction",
        "B": "on, off",
        "C": "early, late",
        "D": "manual, auto"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Giá trị nào được khuyến nghị?",
      "options": {
        "A": "disabled",
        "B": "always",
        "C": "onUserInteraction",
        "D": "Không giá trị nào"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M7] Tại sao always có thể bất tiện?",
      "options": {
        "A": "Báo lỗi đỏ ngay từ đầu, gây khó chịu",
        "B": "Không báo lỗi nào",
        "C": "Chậm app",
        "D": "Gây crash"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Confirm password hoạt động bằng cách:",
      "options": {
        "A": "Lưu _password trong state, so sánh với ô confirm, báo lỗi nếu khác nhau",
        "B": "Gửi lên server",
        "C": "Hash cả hai",
        "D": "Chỉ kiểm tra độ dài"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Yêu cầu Demo 2 cho mật khẩu:",
      "options": {
        "A": "≥ 8 ký tự và chứa số",
        "B": "≥ 6 ký tự",
        "C": "≥ 4 ký tự",
        "D": "Không giới hạn"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Demo 1 (Basic signup) yêu cầu mật khẩu:",
      "options": {
        "A": "≥ 6 ký tự",
        "B": "≥ 8 ký tự",
        "C": "≥ 10 ký tự",
        "D": "Không yêu cầu"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Email hợp lệ (Demo 1) phải:",
      "options": {
        "A": "Chứa @ và .",
        "B": "Chỉ chứa @",
        "C": "Chỉ chứa .",
        "D": "Không kiểm tra"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Thông báo lỗi tốt là:",
      "options": {
        "A": "\"ERROR_400_INVALID_FIELD\"",
        "B": "\"Enter a valid email\"",
        "C": "\"You are wrong!\"",
        "D": "\"Invalid\""
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M7] Best practice về hiển thị lỗi:",
      "options": {
        "A": "Hiện dưới field, tránh ngôn ngữ đổ lỗi, chỉ highlight field liên quan",
        "B": "Hiện toàn màn hình",
        "C": "Highlight mọi field",
        "D": "Dùng mã lỗi kỹ thuật"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] FocusNode dùng để:",
      "options": {
        "A": "Quản lý focus từng field",
        "B": "Validate",
        "C": "Điều hướng",
        "D": "Lưu DB"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] textInputAction: TextInputAction.next kết hợp onFieldSubmitted để:",
      "options": {
        "A": "Chuyển focus sang field kế tiếp",
        "B": "Submit form",
        "C": "Đóng app",
        "D": "Xoá field"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Chuyển focus bằng:",
      "options": {
        "A": "FocusScope.of(context).requestFocus(nextFocusNode)",
        "B": "Navigator.push",
        "C": "setState",
        "D": "dispose()"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Ẩn bàn phím khi chạm ra ngoài dùng:",
      "options": {
        "A": "GestureDetector bọc form",
        "B": "Drawer",
        "C": "Hero",
        "D": "Stack"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Để tránh overflow khi bàn phím hiện:",
      "options": {
        "A": "Bọc form trong ListView / SingleChildScrollView",
        "B": "Dùng Container cố định chiều cao",
        "C": "Tăng font",
        "D": "Dùng Stack"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Điều NÊN TRÁNH trong layout form:",
      "options": {
        "A": "Container cố định chiều cao không scroll, phím che nút submit, quá nhiều field không nhóm",
        "B": "Nhóm section",
        "C": "Scrollable form",
        "D": "Wizard nhiều bước"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Demo 4 – async email check: nếu email bắt đầu bằng \"taken\" thì:",
      "options": {
        "A": "Hiện lỗi \"Email already taken\"",
        "B": "Chấp nhận",
        "C": "Crash",
        "D": "Bỏ qua"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Trong async check, nút submit nên:",
      "options": {
        "A": "Bị disable khi đang kiểm tra",
        "B": "Luôn bật",
        "C": "Ẩn",
        "D": "Đổi màu"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Luồng \"From Form to Backend\":",
      "options": {
        "A": "Form → Validation → POST Request → Server → Response → UI Update",
        "B": "Server → Form → UI",
        "C": "UI → Server → Validation",
        "D": "Response → Form → POST"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M7] Future.delayed(Duration(seconds: 2)) trong demo dùng để:",
      "options": {
        "A": "Mô phỏng độ trễ server",
        "B": "Tăng tốc",
        "C": "Xoá dữ liệu",
        "D": "Điều hướng"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] API là:",
      "options": {
        "A": "Hợp đồng cho client giao tiếp với server, thường qua các URL (endpoint)",
        "B": "Ngôn ngữ lập trình",
        "C": "Cơ sở dữ liệu",
        "D": "IDE"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] HTTP status 200–299 nghĩa là:",
      "options": {
        "A": "Thành công",
        "B": "Lỗi client",
        "C": "Lỗi server",
        "D": "Redirect"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] HTTP status 400–499 là:",
      "options": {
        "A": "Thành công",
        "B": "Lỗi client",
        "C": "Lỗi server",
        "D": "Thông tin"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M8] HTTP status 500–599 là:",
      "options": {
        "A": "Thành công",
        "B": "Lỗi client",
        "C": "Lỗi server",
        "D": "Redirect"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M8] Các phương thức HTTP trong slide:",
      "options": {
        "A": "GET, POST, PUT, DELETE",
        "B": "SEND, RECEIVE",
        "C": "READ, WRITE",
        "D": "OPEN, CLOSE"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] JSON tương ứng trong Dart:",
      "options": {
        "A": "Map<String, dynamic> và List<dynamic>",
        "B": "Set<int>",
        "C": "Iterable<String>",
        "D": "Stream"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Package dùng cho HTTP trong slide:",
      "options": {
        "A": "http",
        "B": "dio bắt buộc",
        "C": "socket",
        "D": "chopper"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Gọi GET đúng:",
      "options": {
        "A": "http.get(Uri.parse(url))",
        "B": "http.get(url)",
        "C": "http.fetch(url)",
        "D": "http.read(url)"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Gọi POST đúng:",
      "options": {
        "A": "http.post(Uri.parse(url), body: {...})",
        "B": "http.send(url)",
        "C": "http.push(url)",
        "D": "http.create(url)"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Vì sao cần async/await cho networking?",
      "options": {
        "A": "Tránh đóng băng UI khi chờ phản hồi",
        "B": "Giảm kích thước app",
        "C": "Tăng độ phân giải",
        "D": "Tạo animation"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] FutureBuilder xử lý cùng lúc:",
      "options": {
        "A": "Loading, success, error trong một chỗ",
        "B": "Chỉ loading",
        "C": "Chỉ error",
        "D": "Chỉ success"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Trong FutureBuilder: khi connectionState == waiting hiển thị:",
      "options": {
        "A": "Loading spinner",
        "B": "Error",
        "C": "Danh sách",
        "D": "Không gì"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Khi snapshot.hasError:",
      "options": {
        "A": "Hiển thị thông báo lỗi",
        "B": "Hiển thị list",
        "C": "Spinner",
        "D": "Không gì"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Khi có data nhưng rỗng nên hiển thị:",
      "options": {
        "A": "\"No data\"",
        "B": "Crash",
        "C": "Spinner",
        "D": "Không gì"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] jsonDecode() trả về với JSON array:",
      "options": {
        "A": "List<dynamic>",
        "B": "String",
        "C": "Map",
        "D": "int"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Chuyển JSON list thành List<Post>:",
      "options": {
        "A": ".map((e) => Post.fromJson(e)).toList()",
        "B": ".where().toList()",
        "C": ".forEach()",
        "D": ".reduce()"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Vì sao nên dùng model class?",
      "options": {
        "A": "Type-safety, cấu trúc rõ, dễ bảo trì/tái sử dụng",
        "B": "Tăng tốc mạng",
        "C": "Giảm RAM",
        "D": "Bắt buộc bởi HTTP"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] POST gửi JSON body cần:",
      "options": {
        "A": "Encode body (vd jsonEncode) và đặt header phù hợp",
        "B": "Không cần encode",
        "C": "Gửi bằng GET",
        "D": "Dùng setState"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Các tình huống lỗi mạng điển hình:",
      "options": {
        "A": "Mất internet, server 500, JSON sai, timeout",
        "B": "Chỉ mất internet",
        "C": "Chỉ 404",
        "D": "Không có"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Chiến lược xử lý lỗi cơ bản:",
      "options": {
        "A": "Throw exception trong hàm fetch, hiện thông báo thân thiện, có nút Retry",
        "B": "Bỏ qua lỗi",
        "C": "Đóng app",
        "D": "Hiện stack trace cho user"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Nút Retry thường gọi:",
      "options": {
        "A": "setState() để chạy lại request",
        "B": "dispose()",
        "C": "Navigator.pop",
        "D": "exit()"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] UX khi gửi request:",
      "options": {
        "A": "Disable nút + spinner + chống double-submit",
        "B": "Cho bấm nhiều lần",
        "C": "Ẩn spinner",
        "D": "Xoá form"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Service Layer Pattern (ApiService):",
      "options": {
        "A": "Gói logic API vào một class riêng, UI chỉ lo giao diện, tái sử dụng nhiều màn hình",
        "B": "Viết HTTP trong build()",
        "C": "Gọi API trong mỗi widget",
        "D": "Hardcode URL"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] Nên gọi API ở đâu?",
      "options": {
        "A": "Trong build()",
        "B": "Một lần trong initState()",
        "C": "Trong constructor Widget",
        "D": "Trong dispose()"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M8] Pitfall nào KHÔNG đúng?",
      "options": {
        "A": "Gọi API trong build()",
        "B": "Không xử lý lỗi → crash",
        "C": "Parse nặng trên UI thread",
        "D": "Tập trung base URL ở một chỗ"
      },
      "answer": "D",
      "explanation": "D là best practice, không phải pitfall"
    },
    {
      "question": "[M8] Sau POST thành công để cập nhật list:",
      "options": {
        "A": "Re-fetch hoặc optimistic update",
        "B": "Không làm gì",
        "C": "Xoá list",
        "D": "Restart app"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M8] API công khai dùng demo GET:",
      "options": {
        "A": "jsonplaceholder.typicode.com/posts",
        "B": "google.com",
        "C": "flutter.dev",
        "D": "dartpad.dev"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Ba phương pháp lưu trữ local chính:",
      "options": {
        "A": "SharedPreferences, JSON file (dart:io), SQLite (sqflite)",
        "B": "Firebase, REST, GraphQL",
        "C": "Cookie, Session, Cache",
        "D": "Hive, Isar, Realm"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] SharedPreferences phù hợp nhất cho:",
      "options": {
        "A": "Cặp key-value đơn giản (settings, flags)",
        "B": "Dữ liệu quan hệ lớn",
        "C": "File ảnh",
        "D": "Video"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] SharedPreferences KHÔNG phù hợp với:",
      "options": {
        "A": "Dark mode flag",
        "B": "Onboarding flag",
        "C": "Đối tượng phức tạp / dữ liệu lớn",
        "D": "Login state"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M9] Quy trình dùng SharedPreferences:",
      "options": {
        "A": "Load instance → đọc → cập nhật theo tương tác → lưu → refresh UI",
        "B": "Lưu → đọc → xoá",
        "C": "Mở DB → query → đóng",
        "D": "Gọi API → lưu"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Lấy instance:",
      "options": {
        "A": "SharedPreferences.getInstance()",
        "B": "SharedPreferences.open()",
        "C": "new SharedPreferences()",
        "D": "Prefs.load()"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Lưu bool theme:",
      "options": {
        "A": "prefs.setBool(\"isDarkMode\", value)",
        "B": "prefs.put(...)",
        "C": "prefs.save(...)",
        "D": "prefs.write(...)"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Trên Flutter Web, SharedPreferences ánh xạ tới:",
      "options": {
        "A": "localStorage của trình duyệt",
        "B": "SQLite",
        "C": "File hệ thống",
        "D": "Không hỗ trợ"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] DartPad (Flutter mode) và SharedPreferences:",
      "options": {
        "A": "Không hỗ trợ → dùng mock FakePrefs",
        "B": "Hỗ trợ đầy đủ",
        "C": "Hỗ trợ qua localStorage",
        "D": "Hỗ trợ qua SQLite"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Dữ liệu FakePrefs khi reload DartPad:",
      "options": {
        "A": "Mất (không persistent)",
        "B": "Giữ nguyên",
        "C": "Lưu vào file",
        "D": "Đồng bộ cloud"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Package tìm thư mục app cho file storage:",
      "options": {
        "A": "path_provider",
        "B": "file_picker",
        "C": "shared_preferences",
        "D": "sqflite"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Ghi và đọc file:",
      "options": {
        "A": "file.writeAsString(json) / file.readAsString()",
        "B": "file.put / file.get",
        "C": "file.save / file.load",
        "D": "file.set / file.fetch"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Khi nào dùng JSON file?",
      "options": {
        "A": "Dữ liệu lớn hơn key-value, có cấu trúc nhưng không cần SQL, cache API, export/import",
        "B": "Chỉ boolean",
        "C": "Quan hệ N–N phức tạp",
        "D": "Không bao giờ"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] sqflite là:",
      "options": {
        "A": "Chính database engine",
        "B": "Plugin Flutter bọc SQLite (cầu nối Flutter → SQLite)",
        "C": "Cloud database",
        "D": "NoSQL"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M9] Chữ \"F\" trong SQFlite là:",
      "options": {
        "A": "Fast",
        "B": "Flutter",
        "C": "File",
        "D": "Free"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M9] Vì sao sqflite không chạy trên Web (theo slide)?",
      "options": {
        "A": "Vì nó là plugin native, không phải database engine",
        "B": "Vì Web không có SQL",
        "C": "Vì bị cấm",
        "D": "Vì quá chậm"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Hàm mở/tạo DB:",
      "options": {
        "A": "openDatabase()",
        "B": "createDB()",
        "C": "initSQL()",
        "D": "loadDatabase()"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] onCreate dùng để:",
      "options": {
        "A": "Chạy CREATE TABLE khi tạo DB lần đầu",
        "B": "Xoá DB",
        "C": "Insert dữ liệu",
        "D": "Đóng DB"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Bộ hàm CRUD của sqflite:",
      "options": {
        "A": "insert / query / update / delete",
        "B": "add / get / set / remove",
        "C": "create / read / write / erase",
        "D": "put / pull / patch / drop"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Mệnh đề SQL dùng lọc hàng:",
      "options": {
        "A": "WHERE",
        "B": "FROM",
        "C": "ORDER BY",
        "D": "LIMIT"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] GROUP BY + HAVING dùng để:",
      "options": {
        "A": "Nhóm và lọc nhóm (SUM, COUNT…)",
        "B": "Sắp xếp",
        "C": "Phân trang",
        "D": "Chọn cột"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] LIMIT / OFFSET hữu ích cho:",
      "options": {
        "A": "Phân trang list mobile",
        "B": "Tạo bảng",
        "C": "Xoá bảng",
        "D": "Index"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Khi nào chọn SQLite?",
      "options": {
        "A": "Dữ liệu có cấu trúc, đọc/ghi nhanh, sort/filter, quan hệ 1–N/N–N, offline, lưu lâu dài",
        "B": "Chỉ 1 cờ boolean",
        "C": "Chỉ ghi chú 1 file",
        "D": "Chỉ ảnh"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Offline-first nghĩa là:",
      "options": {
        "A": "App vẫn hoạt động khi offline: dùng dữ liệu local trước, sync khi online",
        "B": "App chỉ chạy khi có mạng",
        "C": "Không lưu dữ liệu",
        "D": "Chỉ dùng cloud"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Chuỗi chiến lược offline-first:",
      "options": {
        "A": "Store offline → Use offline → Sync online (xử lý conflict, cache expiration)",
        "B": "Sync → Store → Use",
        "C": "Use → Sync → Store",
        "D": "Delete → Sync"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Bảng chọn: Theme, flag nhỏ → ?",
      "options": {
        "A": "SharedPreferences",
        "B": "JSON file",
        "C": "SQLite",
        "D": "Firebase"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Ghi chú đơn giản, 1 file → ?",
      "options": {
        "A": "SharedPreferences",
        "B": "Local JSON file",
        "C": "SQLite",
        "D": "Firebase"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M9] Dữ liệu lớn có cấu trúc → ?",
      "options": {
        "A": "SharedPreferences",
        "B": "JSON file",
        "C": "SQLite (SQFlite)",
        "D": "Chỉ RAM"
      },
      "answer": "C",
      "explanation": ""
    },
    {
      "question": "[M9] Offline-first + cần đồng bộ → ?",
      "options": {
        "A": "SQLite + Firebase/REST",
        "B": "SharedPreferences",
        "C": "JSON file",
        "D": "Chỉ RAM"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Demo 9.3 dùng gì thay SQLite thật trong DartPad?",
      "options": {
        "A": "FakeDatabase in-memory",
        "B": "Firebase",
        "C": "Hive",
        "D": "REST"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M9] Xoá task bằng thao tác nào trong demo 9.3?",
      "options": {
        "A": "Dismissible → delete",
        "B": "Long press",
        "C": "Double tap",
        "D": "Shake"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Authentication vs Authorization:",
      "options": {
        "A": "Authentication: bạn là ai – Authorization: bạn được làm gì",
        "B": "Authentication: bạn được làm gì – Authorization: bạn là ai",
        "C": "Giống nhau",
        "D": "Cả hai đều là mã hoá"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Luồng xác thực tổng quát:",
      "options": {
        "A": "Nhập credential → gửi API → backend xác minh → trả token (JWT) → app lưu token → gửi token mỗi request → duy trì đến khi logout/hết hạn",
        "B": "Lưu mật khẩu local → đăng nhập",
        "C": "Gửi token trước rồi mới nhập",
        "D": "Không cần token"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Token-based auth có lợi ích:",
      "options": {
        "A": "Stateless, bảo mật, dùng chung mobile/web, nhanh",
        "B": "Tốn session server",
        "C": "Chỉ dùng web",
        "D": "Chậm"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Hai loại token:",
      "options": {
        "A": "Access token và Refresh token",
        "B": "Login token và Logout token",
        "C": "Public và Private",
        "D": "Short và Long ID"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Khi access token hết hạn:",
      "options": {
        "A": "Gửi refresh token để lấy access token mới",
        "B": "Bắt đăng nhập lại luôn",
        "C": "Xoá app",
        "D": "Bỏ qua"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] JWT gồm 3 phần:",
      "options": {
        "A": "Header, Payload, Signature",
        "B": "Head, Body, Foot",
        "C": "Key, Value, Hash",
        "D": "User, Pass, Token"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Tính chất của JWT theo slide:",
      "options": {
        "A": "Base64 encoded, signed (không mã hoá), có thời hạn",
        "B": "Được mã hoá hoàn toàn",
        "C": "Không có expiry",
        "D": "Không có chữ ký"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Payload của JWT thường chứa:",
      "options": {
        "A": "User ID, email, role",
        "B": "Thuật toán",
        "C": "Chữ ký",
        "D": "Mật khẩu"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Header của JWT chứa:",
      "options": {
        "A": "Thuật toán và loại token",
        "B": "User ID",
        "C": "Email",
        "D": "Role"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Trường mật khẩu cần thuộc tính:",
      "options": {
        "A": "obscureText: true",
        "B": "hidden: true",
        "C": "secret: true",
        "D": "password: true"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Login UI nên có:",
      "options": {
        "A": "Validate inline, disable nút khi loading, show/hide password",
        "B": "Không validate",
        "C": "Cho bấm nhiều lần",
        "D": "Hiện mật khẩu luôn"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Vì sao Demo 10.1 dùng mock backend?",
      "options": {
        "A": "API công khai có thể lỗi/chặn emulator → mock đảm bảo chạy mọi môi trường",
        "B": "Mock bảo mật hơn",
        "C": "Mock nhanh hơn API thật 100 lần",
        "D": "Bắt buộc bởi Flutter"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Mock API: không cần internet, luôn không lỗi, predictability cao. Real API dùng cho:",
      "options": {
        "A": "Assignment, capstone, dự án thật",
        "B": "Chỉ demo lớp học",
        "C": "Không dùng",
        "D": "Chỉ test"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Mock auth mô phỏng độ trễ bằng:",
      "options": {
        "A": "2 giây delay",
        "B": "10 giây",
        "C": "Không delay",
        "D": "1 phút"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Khi credential sai, AuthService trả về:",
      "options": {
        "A": "null và UI hiện Snackbar \"Invalid credentials\"",
        "B": "Token rỗng",
        "C": "Crash",
        "D": "true"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Real API demo dùng dịch vụ nào?",
      "options": {
        "A": "DummyJSON",
        "B": "Firebase",
        "C": "Stripe",
        "D": "Twitter"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Mock demo account (test scenario) là:",
      "options": {
        "A": "demo@test.com / 123456",
        "B": "admin / admin",
        "C": "user@a.com / 111",
        "D": "test / test"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Signup flow: sau khi đăng ký thành công:",
      "options": {
        "A": "Hiện thông báo thành công và quay về Login",
        "B": "Vào Home ngay",
        "C": "Đóng app",
        "D": "Reload"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Signup dùng lại cái gì?",
      "options": {
        "A": "Cùng AuthService, thêm signup(...)",
        "B": "Service mới hoàn toàn",
        "C": "Không dùng service",
        "D": "Chỉ dùng Firebase"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Quy tắc mật khẩu (field-level):",
      "options": {
        "A": "6–8 ký tự, ≥1 chữ hoa, ≥1 số, không khoảng trắng đầu/cuối",
        "B": "Chỉ 1 ký tự",
        "C": "Không giới hạn",
        "D": "Chỉ chữ thường"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Quy tắc form-level:",
      "options": {
        "A": "Password và Confirm Password phải khớp",
        "B": "Email phải trùng tên",
        "C": "Không có",
        "D": "Password phải bằng 123"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Session gồm:",
      "options": {
        "A": "Access token, user profile, thời điểm hết hạn token",
        "B": "Chỉ username",
        "C": "Chỉ mật khẩu",
        "D": "Không gì"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Session kết thúc khi:",
      "options": {
        "A": "Logout, token hết hạn, server force logout (401)",
        "B": "Đóng app",
        "C": "Xoay màn hình",
        "D": "Đổi theme"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] HTTP 401 nghĩa là:",
      "options": {
        "A": "Unauthorized",
        "B": "Not Found",
        "C": "OK",
        "D": "Server Error"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Token được lưu local bằng:",
      "options": {
        "A": "SharedPreferences (theo demo; best practice là secure storage)",
        "B": "Ảnh",
        "C": "Cookie game",
        "D": "Clipboard"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Best practice về token:",
      "options": {
        "A": "Không lưu token thô → dùng secure storage; luôn dùng HTTPS",
        "B": "Lưu plain text",
        "C": "Dùng HTTP",
        "D": "In token ra log"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Auto-login flow:",
      "options": {
        "A": "Splash → có token? → Home / Login",
        "B": "Login → Splash → Home",
        "C": "Home → Splash",
        "D": "Splash → Login luôn"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Logout cần làm gì?",
      "options": {
        "A": "Xoá token (khỏi SharedPreferences) → lần sau phải đăng nhập lại",
        "B": "Không làm gì",
        "C": "Đóng app",
        "D": "Reset theme"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Dùng pushReplacementNamed() sau login để:",
      "options": {
        "A": "Ngăn người dùng bấm back quay lại Login",
        "B": "Tăng tốc",
        "C": "Lưu token",
        "D": "Tạo animation"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Standard flow:",
      "options": {
        "A": "Splash → Login → Home",
        "B": "Home → Login → Splash",
        "C": "Login → Splash → Home",
        "D": "Splash → Home → Login"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Firebase Authentication cung cấp:",
      "options": {
        "A": "Đăng nhập an toàn, Google/Apple/Facebook, email/password, session persistence, token refresh tự động",
        "B": "Chỉ email",
        "C": "Chỉ Google",
        "D": "Không cung cấp token"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Google Sign-In flow đúng:",
      "options": {
        "A": "Bấm Sign in with Google → chọn tài khoản → Google cấp OAuth tokens → đổi sang Firebase credential → Firebase sign in → app nhận User → Home",
        "B": "Home → Google → Firebase",
        "C": "Firebase → Google → Home",
        "D": "Không có OAuth"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Cấu hình cần thiết cho Google Sign-In (Android):",
      "options": {
        "A": "Tạo Firebase project, thêm app đúng package name, SHA-1 + SHA-256, google-services.json vào android/app/, thêm dependencies, bật Google Sign-In",
        "B": "Chỉ cần cài package",
        "C": "Chỉ cần SHA-1",
        "D": "Không cần cấu hình"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Dependencies của Google Sign-In demo:",
      "options": {
        "A": "firebase_core, firebase_auth, google_sign_in",
        "B": "http, dio",
        "C": "provider, bloc",
        "D": "sqflite, path_provider"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Lỗi \"Google Sign-In screen không hiện\" thường do:",
      "options": {
        "A": "Thiếu SHA-1",
        "B": "Sai theme",
        "C": "Thiếu font",
        "D": "Thiếu icon"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] \"DEVELOPER_ERROR\" thường do:",
      "options": {
        "A": "Sai package name so với Firebase",
        "B": "Thiếu mạng",
        "C": "Thiếu font",
        "D": "Thiếu image"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] \"Firebase initialization error\" do:",
      "options": {
        "A": "Thiếu google-services.json",
        "B": "Thiếu icon",
        "C": "Sai màu",
        "D": "Thiếu font"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] App crash lúc khởi động (Firebase) thường do:",
      "options": {
        "A": "Thiếu Gradle plugin com.google.gms.google-services",
        "B": "Thiếu font",
        "C": "Sai theme",
        "D": "Thiếu ảnh"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] \"Login returns null\" trên emulator do:",
      "options": {
        "A": "Emulator thiếu Google Play Services",
        "B": "Sai theme",
        "C": "Thiếu padding",
        "D": "Thiếu ảnh"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Local Notification khác Push Notification:",
      "options": {
        "A": "Local: do app kích hoạt, không cần internet/backend; Push: gửi từ server, cần internet/backend",
        "B": "Ngược lại",
        "C": "Giống nhau",
        "D": "Local cần server"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Plugin local notification trong slide:",
      "options": {
        "A": "flutter_local_notifications",
        "B": "firebase_messaging",
        "C": "http",
        "D": "provider"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Vì sao dùng notification sau authentication?",
      "options": {
        "A": "Gắn với các hành động quan trọng: login thành công, xác minh tài khoản, reset mật khẩu",
        "B": "Để quảng cáo",
        "C": "Không có lý do",
        "D": "Để xoá token"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Demo 10.5 nên tách:",
      "options": {
        "A": "Logic notification khỏi logic authentication",
        "B": "Không tách",
        "C": "Gộp vào UI",
        "D": "Gộp vào build()"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] AuthService nên là:",
      "options": {
        "A": "Singleton, tách UI khỏi logic",
        "B": "Widget",
        "C": "Mixin",
        "D": "Enum"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M10] Mật khẩu nên được xử lý ở server bằng:",
      "options": {
        "A": "Hash & salt",
        "B": "Plain text",
        "C": "Base64",
        "D": "Không lưu"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Ba loại test chính trong Flutter:",
      "options": {
        "A": "Unit, Widget, Integration",
        "B": "Alpha, Beta, Gamma",
        "C": "UI, DB, API",
        "D": "Smoke, Load, Stress"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Unit test kiểm tra:",
      "options": {
        "A": "Logic không cần UI",
        "B": "Render UI và tương tác",
        "C": "Toàn bộ luồng người dùng",
        "D": "Hiệu năng GPU"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Widget test kiểm tra:",
      "options": {
        "A": "Render UI & tương tác",
        "B": "Logic thuần",
        "C": "Toàn bộ luồng",
        "D": "Chỉ DB"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Integration test kiểm tra:",
      "options": {
        "A": "Toàn bộ luồng người dùng từ đầu đến cuối",
        "B": "Một hàm",
        "C": "Một widget đơn",
        "D": "Chỉ model"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Testing pyramid (số lượng):",
      "options": {
        "A": "Unit nhiều – Widget vừa – Integration ít",
        "B": "Unit ít – Widget vừa – Integration nhiều",
        "C": "Đều nhau",
        "D": "Integration nhiều nhất"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Vì sao Integration test ít?",
      "options": {
        "A": "Chậm và tốn kém, chỉ dùng cho luồng quan trọng",
        "B": "Không hữu ích",
        "C": "Không chạy được",
        "D": "Quá đơn giản"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Unit test: nhanh, ổn định, rẻ, bắt lỗi logic sớm. Đúng hay sai?",
      "options": {
        "A": "Đúng",
        "B": "Sai"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Workflow test chuẩn:",
      "options": {
        "A": "Định nghĩa hành vi mong đợi → chuẩn bị môi trường → chạy logic/render widget → mô phỏng tương tác → expect() kiểm tra",
        "B": "expect trước rồi mới chạy",
        "C": "Chỉ chạy",
        "D": "Chỉ expect"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Mô hình Arrange–Act–Assert trong demo 11.1:",
      "options": {
        "A": "Tạo Task (Arrange) → toggle() (Act) → expect(completed, true) (Assert)",
        "B": "toggle → tạo Task → expect",
        "C": "expect → toggle → tạo",
        "D": "tạo → expect → toggle"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Lỗi \"Logic failure\" nên dùng test:",
      "options": {
        "A": "Unit test",
        "B": "Widget test",
        "C": "Navigation test",
        "D": "Integration test"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] \"UI not updating\" nên dùng:",
      "options": {
        "A": "Widget test",
        "B": "Unit test",
        "C": "Integration",
        "D": "Không test"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] \"Wrong navigation\" nên dùng:",
      "options": {
        "A": "Navigation test (kiểm route + data)",
        "B": "Unit test",
        "C": "Không test",
        "D": "Chỉ DevTools"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] \"Entire feature broken\" nên dùng:",
      "options": {
        "A": "Integration test",
        "B": "Unit test",
        "C": "Widget test",
        "D": "Không test"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Key insight: hầu hết lỗi UI bắt nguồn từ:",
      "options": {
        "A": "Logic → unit test bắt sớm",
        "B": "Màu sắc",
        "C": "Font",
        "D": "Ảnh"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] enterText(...) trong widget test mô phỏng:",
      "options": {
        "A": "Người dùng gõ vào TextField",
        "B": "Bấm nút",
        "C": "Xoay màn hình",
        "D": "Scroll"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] tap(...) mô phỏng:",
      "options": {
        "A": "Người dùng chạm vào widget",
        "B": "Gõ chữ",
        "C": "Kéo",
        "D": "Xoay"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] pump() làm gì?",
      "options": {
        "A": "Rebuild UI (một frame) để thấy thay đổi",
        "B": "Đợi mọi animation xong",
        "C": "Xoá widget",
        "D": "Chạy test khác"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] pumpAndSettle() làm gì?",
      "options": {
        "A": "Chờ animation và điều hướng hoàn tất",
        "B": "Chỉ rebuild 1 frame",
        "C": "Thoát test",
        "D": "Reset app"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] find.text('Task Detail') dùng để:",
      "options": {
        "A": "Tìm widget theo text hiển thị",
        "B": "Tạo widget",
        "C": "Xoá widget",
        "D": "Điều hướng"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Navigation test (11.3) xác nhận:",
      "options": {
        "A": "Bấm item → sang màn Detail đúng, dữ liệu truyền đúng",
        "B": "Chỉ build",
        "C": "Chỉ test logic",
        "D": "Chỉ test DB"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Taskly demo: luồng state:",
      "options": {
        "A": "UI → Provider → Repository",
        "B": "Repository → UI → Provider",
        "C": "Provider → UI → Repository",
        "D": "UI → Repository → Provider"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] TaskRepository chịu trách nhiệm:",
      "options": {
        "A": "CRUD logic cho task",
        "B": "Vẽ UI",
        "C": "Điều hướng",
        "D": "Theme"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Demo 11.2 (Widget test) – trước khi add: hiển thị \"No tasks yet. Add one!\", sau khi add:",
      "options": {
        "A": "\"Buy milk\"",
        "B": "Vẫn như cũ",
        "C": "Crash",
        "D": "Trống"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Best practice testing:",
      "options": {
        "A": "Test nhỏ & tập trung, dùng key, mock repository, không test chức năng framework, không lạm dụng integration test",
        "B": "Test lớn",
        "C": "Không dùng key",
        "D": "Test framework"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Vì sao dùng Key trong widget test?",
      "options": {
        "A": "Để find widget chính xác",
        "B": "Tăng tốc build",
        "C": "Lưu state",
        "D": "Điều hướng"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] UI Overflow error là:",
      "options": {
        "A": "Widget vượt constraint layout, thường không làm crash nên cần test/DevTools để phát hiện",
        "B": "Lỗi mạng",
        "C": "Lỗi DB",
        "D": "Crash app"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Công cụ debug UI & hiệu năng:",
      "options": {
        "A": "Flutter DevTools",
        "B": "Postman",
        "C": "Excel",
        "D": "Git"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Mục tiêu debugging:",
      "options": {
        "A": "Layout, state update, performance, rebuild thừa, navigation",
        "B": "Chỉ màu",
        "C": "Chỉ font",
        "D": "Chỉ ảnh"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Mục tiêu FPS theo slide:",
      "options": {
        "A": "60–120 FPS",
        "B": "10–20 FPS",
        "C": "24 FPS",
        "D": "240 FPS"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M11] Vì sao mock repository?",
      "options": {
        "A": "Cô lập test, nhanh, ổn định, không phụ thuộc DB/API thật",
        "B": "Cho đẹp",
        "C": "Bắt buộc",
        "D": "Giảm RAM"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] 60 FPS tương ứng thời gian mỗi frame:",
      "options": {
        "A": "16.6 ms",
        "B": "8 ms",
        "C": "33 ms",
        "D": "1 ms"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] 120 FPS tương ứng:",
      "options": {
        "A": "16.6 ms",
        "B": "8 ms",
        "C": "33 ms",
        "D": "4 ms"
      },
      "answer": "B",
      "explanation": ""
    },
    {
      "question": "[M12] Trong render pipeline: Widget / Element / RenderObject lần lượt là:",
      "options": {
        "A": "Blueprint bất biến / quản lý lifecycle & state / layout-paint-compositing",
        "B": "Layout / Blueprint / State",
        "C": "State / Layout / Blueprint",
        "D": "Paint / State / Blueprint"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Widget là:",
      "options": {
        "A": "Bản thiết kế bất biến (immutable blueprint)",
        "B": "Đối tượng vẽ",
        "C": "Quản lý state",
        "D": "Thread"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Nguyên nhân gây chậm UI:",
      "options": {
        "A": "Rebuild thừa, logic nặng trong build(), ảnh full-res, cây widget quá sâu, dùng setState/Provider sai, list kém hiệu quả, tác vụ đồng bộ nặng, GlobalKey khắp nơi",
        "B": "Dùng const",
        "C": "Dùng ListView.builder",
        "D": "Dùng Selector"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Đo hiệu năng nên chạy ở chế độ:",
      "options": {
        "A": "Profile mode",
        "B": "Debug mode",
        "C": "Hot reload",
        "D": "Emulator chậm"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Vì sao tránh đo ở Debug mode?",
      "options": {
        "A": "Có overhead debug, số liệu không chính xác",
        "B": "Debug nhanh hơn",
        "C": "Debug không chạy",
        "D": "Không có lý do"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Công cụ nào highlight các thao tác repaint?",
      "options": {
        "A": "Repaint Rainbow",
        "B": "CPU Profiler",
        "C": "Memory",
        "D": "Network"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] DevTools: CPU Profiler dùng để:",
      "options": {
        "A": "Tìm hotspot thời gian thực thi",
        "B": "Tìm leak",
        "C": "Xem FPS",
        "D": "Xem layout"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] DevTools: Memory dùng để:",
      "options": {
        "A": "Tìm leak & allocations",
        "B": "Hotspot CPU",
        "C": "Repaint",
        "D": "Layout"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Widget Inspector dùng để:",
      "options": {
        "A": "Xác định nguồn rebuild/cấu trúc widget",
        "B": "Đo CPU",
        "C": "Build APK",
        "D": "Test API"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] const giúp:",
      "options": {
        "A": "Giảm rebuild, tiết kiệm bộ nhớ, hỗ trợ tree diffing",
        "B": "Tăng rebuild",
        "C": "Tăng RAM",
        "D": "Không ảnh hưởng"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Nếu widget không bao giờ thay đổi thì:",
      "options": {
        "A": "Dùng const",
        "B": "Dùng UniqueKey",
        "C": "Dùng GlobalKey",
        "D": "Dùng setState"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Extract widget (TaskTile) giúp:",
      "options": {
        "A": "Chỉ TaskTile rebuild, ListView cha giữ nguyên, code sạch",
        "B": "Rebuild toàn bộ",
        "C": "Tăng RAM",
        "D": "Không ích gì"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Việc nào KHÔNG nên làm trong build()?",
      "options": {
        "A": "Sorting, parse JSON, tính toán phức tạp, đọc DB, gọi API",
        "B": "Trả về widget",
        "C": "Dùng const",
        "D": "Đọc biến"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Cách đúng với sort danh sách:",
      "options": {
        "A": "Gọi sortTasks() một lần (ngoài build)",
        "B": "tasks..sort() trong build",
        "C": "Sort mỗi frame",
        "D": "Sort trong paint"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Key tốt cho item list:",
      "options": {
        "A": "ValueKey(task.id)",
        "B": "UniqueKey()",
        "C": "GlobalKey mọi nơi",
        "D": "Không key"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Vì sao UniqueKey() xấu?",
      "options": {
        "A": "Buộc rebuild mỗi frame",
        "B": "Quá chậm khởi tạo",
        "C": "Không tồn tại",
        "D": "Gây crash"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] GlobalKey nên:",
      "options": {
        "A": "Tránh dùng trừ khi thật cần (navigation, truy cập state widget)",
        "B": "Dùng khắp nơi",
        "C": "Dùng cho mọi list",
        "D": "Dùng thay const"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Keys hữu ích khi:",
      "options": {
        "A": "Bảo toàn state, animation, đổi thứ tự list, tối ưu diffing",
        "B": "Tăng RAM",
        "C": "Gọi API",
        "D": "Điều hướng"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Tối ưu Provider để giảm rebuild:",
      "options": {
        "A": "Dùng Selector<T> thay vì context.watch<T>() ở top",
        "B": "Dùng watch ở top",
        "C": "Dùng setState to",
        "D": "Dùng GlobalKey"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Nguyên nhân Taskly rebuild toàn màn hình (trước tối ưu):",
      "options": {
        "A": "context.watch<TaskProvider>() ở đầu widget, list render inline, không tách UI tĩnh/động",
        "B": "Dùng const",
        "C": "Dùng Selector",
        "D": "Dùng ValueKey"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Sau tối ưu (Demo 12.1):",
      "options": {
        "A": "Chỉ list rebuild và chỉ TaskTile bị ảnh hưởng rebuild",
        "B": "Toàn màn hình rebuild",
        "C": "Không rebuild",
        "D": "App crash"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] State đặt quá cao thì:",
      "options": {
        "A": "Toàn UI rebuild",
        "B": "Dữ liệu không lan truyền",
        "C": "Không ảnh hưởng",
        "D": "Crash"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] State đặt quá thấp thì:",
      "options": {
        "A": "Dữ liệu không lan truyền đúng",
        "B": "Toàn UI rebuild",
        "C": "Không ảnh hưởng",
        "D": "Crash"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Tối ưu ảnh đúng:",
      "options": {
        "A": "Resize ảnh, precache, dùng FadeInImage cho ảnh remote, không decode trong build()",
        "B": "Dùng ảnh 2000px cho thumbnail 50px",
        "C": "Decode trong build",
        "D": "Không cache"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] precacheImage(const AssetImage(...), context) dùng để:",
      "options": {
        "A": "Nạp trước ảnh hay dùng",
        "B": "Xoá ảnh",
        "C": "Nén ảnh",
        "D": "Tải APK"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] FadeInImage.assetNetwork có placeholder để:",
      "options": {
        "A": "Hiển thị ảnh tạm khi ảnh network đang tải",
        "B": "Hiển thị lỗi",
        "C": "Xoá ảnh",
        "D": "Nén ảnh"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Lệnh phân tích kích thước app:",
      "options": {
        "A": "flutter build apk --analyze-size",
        "B": "flutter analyze",
        "C": "flutter size",
        "D": "flutter doctor"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Kết quả phân tích size gồm:",
      "options": {
        "A": "JSON + HTML tree map: Dart AOT code, native libs, assets, packages",
        "B": "Chỉ text",
        "C": "Chỉ ảnh",
        "D": "Không có"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Mẹo giảm size:",
      "options": {
        "A": "Xoá assets thừa, nén ảnh, xoá dependencies không dùng, bật tree-shaking icons",
        "B": "Thêm assets",
        "C": "Thêm dependencies",
        "D": "Tắt tree-shaking"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Phân biệt versionCode và versionName:",
      "options": {
        "A": "versionCode: số nguyên, phải tăng mỗi lần release; versionName: tên hiển thị",
        "B": "versionCode: tên hiển thị; versionName: số nguyên",
        "C": "Giống nhau",
        "D": "Không cần"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Lệnh chạy Profile mode:",
      "options": {
        "A": "flutter run --profile",
        "B": "flutter run --release",
        "C": "flutter profile",
        "D": "flutter debug"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Build release APK:",
      "options": {
        "A": "flutter build apk --release",
        "B": "flutter apk release",
        "C": "flutter make apk",
        "D": "flutter release"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Đường dẫn output APK:",
      "options": {
        "A": "build/app/outputs/flutter-apk/app-release.apk",
        "B": "lib/app.apk",
        "C": "android/app.apk",
        "D": "web/app.apk"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Google Play yêu cầu định dạng:",
      "options": {
        "A": ".aab (App Bundle)",
        "B": ".apk",
        "C": ".ipa",
        "D": ".zip"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Lệnh build App Bundle:",
      "options": {
        "A": "flutter build appbundle --release",
        "B": "flutter build aab",
        "C": "flutter bundle",
        "D": "flutter make bundle"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Output của AppBundle:",
      "options": {
        "A": "build/app/outputs/bundle/release/app-release.aab",
        "B": "build/app.aab",
        "C": "lib/app.aab",
        "D": "android/app.aab"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Ký ứng dụng (signing) cần:",
      "options": {
        "A": "Keystore + file android/key.properties + cấu hình build.gradle",
        "B": "Không cần gì",
        "C": "Chỉ cần email",
        "D": "Chỉ cần SHA-1"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Release build so với Debug:",
      "options": {
        "A": "Khởi động nhanh, mượt hơn, không có debug banner, không hot reload",
        "B": "Chậm hơn",
        "C": "Có hot reload",
        "D": "Có debug banner"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Trước khi build Release APK nên:",
      "options": {
        "A": "Chạy Profile mode để kiểm tra mượt mà/chi phí render",
        "B": "Bỏ qua",
        "C": "Chạy debug",
        "D": "Xoá code"
      },
      "answer": "A",
      "explanation": ""
    },
    {
      "question": "[M12] Best practice list:",
      "options": {
        "A": "ListView.builder, extract item, stable keys (ValueKey)",
        "B": "ListView với children khổng lồ, UniqueKey",
        "C": "Inline item không tách",
        "D": "GlobalKey mỗi item"
      },
      "answer": "A",
      "explanation": ""
    }
  ]
};
