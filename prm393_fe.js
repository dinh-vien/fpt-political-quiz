window.quizSources = window.quizSources || {};

window.quizSources["prm393_fe"] = {
  "name": "PRM393 - FE (QuizApp)",
  "questions": [
    {
      "question": "Why is clean architecture beneficial?",
      "options": {
        "A": "Fewer files",
        "B": "Easier maintenance and testing",
        "C": "Better UI",
        "D": "Faster builds"
      },
      "answer": "B",
      "explanation": "Clean architecture giúp phân tách các tầng của ứng dụng, giảm sự phụ thuộc lẫn nhau, từ đó làm cho việc bảo trì, tái sử dụng mã nguồn và kiểm thử độc lập trở nên dễ dàng hơn."
    },
    {
      "question": "What is Dart primarily designed for in the Flutter ecosystem?",
      "options": {
        "A": "Database management",
        "B": "User interface development",
        "C": "Operating system kernel development",
        "D": "Network security"
      },
      "answer": "B",
      "explanation": "Dart được Google thiết kế tối ưu cho việc xây dựng giao diện người dùng (UI) trên nhiều nền tảng; đây là lý do Dart là ngôn ngữ của Flutter. Dart có hỗ trợ JIT cho hot reload và AOT cho hiệu năng khi release."
    },
    {
      "question": "Why is secure authentication critical in mobile apps?",
      "options": {
        "A": "UI quality",
        "B": "Protect user data",
        "C": "Reduce code",
        "D": "Improve speed"
      },
      "answer": "B",
      "explanation": "Xác thực bảo mật đóng vai trò quan trọng hàng đầu trong việc bảo vệ dữ liệu nhạy cảm của người dùng khỏi các nguy cơ truy cập trái phép hoặc đánh cắp thông tin."
    },
    {
      "question": "Which HTTP method is typically used to retrieve data?",
      "options": {
        "A": "POST",
        "B": "PUT",
        "C": "GET",
        "D": "DELETE"
      },
      "answer": "C",
      "explanation": "Trong chuẩn giao thức HTTP, phương thức GET được sử dụng đặc tả để truy vấn và lấy thông tin, dữ liệu từ máy chủ mà không làm thay đổi trạng thái tài nguyên."
    },
    {
      "question": "What happens if a non-nullable variable is not initialized in Dart?",
      "options": {
        "A": "The app runs normally",
        "B": "A runtime exception occurs",
        "C": "A compile-time error occurs",
        "D": "The value becomes null automatically"
      },
      "answer": "C",
      "explanation": "Với tính năng Null Safety trong Dart, một biến không cho phép null (non-nullable) bắt buộc phải được khởi tạo trước khi dùng. Nếu không, trình biên dịch sẽ báo lỗi (compile-time error)."
    },
    {
      "question": "Which command builds a release APK?",
      "options": {
        "A": "flutter run",
        "B": "flutter build apk",
        "C": "flutter doctor",
        "D": "flutter clean"
      },
      "answer": "B",
      "explanation": "Lệnh flutter build apk được cung cấp bởi Flutter CLI để biên dịch và đóng gói ứng dụng Android thành tệp APK có thể phân phối (release mode)."
    },
    {
      "question": "Which widget allows overlapping of its child widgets?",
      "options": {
        "A": "Column",
        "B": "Row",
        "C": "Stack",
        "D": "Expanded"
      },
      "answer": "C",
      "explanation": "Widget Stack trong Flutter được dùng để sắp xếp các widget con chồng lên nhau theo trục Z, thay vì dàn hàng ngang như Row hay dọc như Column."
    },
    {
      "question": "Which platforms can Flutter applications target using a single codebase?",
      "options": {
        "A": "Android only",
        "B": "iOS only",
        "C": "Android, iOS, web, and desktop",
        "D": "Web servers only"
      },
      "answer": "C",
      "explanation": "Điểm mạnh của Flutter là khả năng biên dịch đa nền tảng, hỗ trợ Android, iOS, Web và cả ứng dụng Desktop (Windows, macOS, Linux) chỉ với một mã nguồn."
    },
    {
      "question": "What is the main risk of improper state management?",
      "options": {
        "A": "UI inconsistency",
        "B": "Longer compile time",
        "C": "Package conflicts",
        "D": "Build errors"
      },
      "answer": "A",
      "explanation": "Nếu quản lý trạng thái không tốt, giao diện người dùng có thể không phản ánh đúng hoặc bị lệch nhịp với dữ liệu thực tế dưới nền, gây ra sự thiếu đồng nhất (UI inconsistency)."
    },
    {
      "question": "What does CurvedAnimation provide?",
      "options": {
        "A": "Layout control",
        "B": "Animation curve behavior",
        "C": "State updates",
        "D": "Navigation"
      },
      "answer": "B",
      "explanation": "CurvedAnimation áp dụng một đường cong phi tuyến tính (curve behavior) vào animation, giúp hiệu ứng chuyển động tự nhiên hơn (ví dụ: tăng/giảm tốc độ ở đầu/cuối hoạt ảnh)."
    },
    {
      "question": "How can data be passed to a new screen?",
      "options": {
        "A": "Using global variables",
        "B": "Via constructor arguments",
        "C": "Using ThemeData",
        "D": "Using Scaffold"
      },
      "answer": "B",
      "explanation": "Cách cơ bản, an toàn và trực tiếp nhất để truyền dữ liệu từ màn hình này sang màn hình khác là truyền qua tham số hàm khởi tạo (constructor arguments) của Widget màn hình đích."
    },
    {
      "question": "What is the purpose of parsing JSON?",
      "options": {
        "A": "Encrypt data",
        "B": "Convert JSON into Dart objects",
        "C": "Send requests",
        "D": "Cache responses"
      },
      "answer": "B",
      "explanation": "Parsing (Phân tích cú pháp) JSON nhằm chuyển đổi chuỗi định dạng JSON thô từ các phản hồi API thành đối tượng trong Dart để ứng dụng dễ dàng truy xuất và xử lý dữ liệu."
    },
    {
      "question": "Which phase involves gathering requirements?",
      "options": {
        "A": "Implementation",
        "B": "Design",
        "C": "Analysis",
        "D": "Testing"
      },
      "answer": "C",
      "explanation": "Trong quy trình phát triển phần mềm, giai đoạn Phân tích (Analysis) chịu trách nhiệm xác định, làm rõ và thu thập các yêu cầu từ phía nghiệp vụ và người dùng."
    },
    {
      "question": "Which Flutter tool helps debug network requests?",
      "options": {
        "A": "DevTools",
        "B": "Inspector",
        "C": "Emulator",
        "D": "Hot reload"
      },
      "answer": "A",
      "explanation": "Flutter DevTools có tích hợp bộ phân tích mạnh mẽ, bao gồm tính năng Network View để theo dõi, kiểm tra thông tin các lời gọi HTTP/network requests."
    },
    {
      "question": "Which Dart feature supports object-oriented programming?",
      "options": {
        "A": "Widgets",
        "B": "Classes and objects",
        "C": "Hot reload",
        "D": "Layout builders"
      },
      "answer": "B",
      "explanation": "Dart là ngôn ngữ lập trình hướng đối tượng. Các tính năng cốt lõi hỗ trợ OOP là việc khai báo lớp (Classes) và khởi tạo đối tượng (Objects)."
    },
    {
      "question": "Which approach helps reduce unnecessary widget rebuilds?",
      "options": {
        "A": "Using global variables",
        "B": "Fine-grained state updates",
        "C": "Hot restart",
        "D": "Large widgets"
      },
      "answer": "B",
      "explanation": "Thực hiện cập nhật trạng thái chia nhỏ (fine-grained state updates) giúp chỉ tái tạo (rebuild) lại những phần widget cụ thể có dữ liệu thay đổi, nhờ đó tối ưu tài nguyên và hiệu suất."
    },
    {
      "question": "Which action best demonstrates Flutter's reactive UI model?",
      "options": {
        "A": "Manually updating UI elements",
        "B": "Rebuilding UI in response to state changes",
        "C": "Editing layout XML",
        "D": "Calling native APIs"
      },
      "answer": "B",
      "explanation": "Bản chất reactive (phản ứng) của Flutter là UI luôn đóng vai trò đại diện cho state ở thời điểm hiện tại. Việc tự động rebuild lại UI khi state thay đổi thể hiện rõ tính chất này."
    },
    {
      "question": "Why are const widgets recommended?",
      "options": {
        "A": "They improve readability",
        "B": "They reduce rebuild cost",
        "C": "They add state",
        "D": "They handle navigation"
      },
      "answer": "B",
      "explanation": "Các const widget được khởi tạo duy nhất tại thời điểm biên dịch, nên khi framework cần rebuild cây widget, các const widget bị bỏ qua không cần cấp phát lại, giúp tiết kiệm bộ nhớ và tài nguyên."
    },
    {
      "question": "Why should animations be disposed properly?",
      "options": {
        "A": "Improve UI",
        "B": "Prevent memory leaks",
        "C": "Speed up builds",
        "D": "Fix layout"
      },
      "answer": "B",
      "explanation": "AnimationControllers trong Flutter nắm giữ các tài nguyên và callback lắng nghe (listeners). Cần gọi dispose() để giải phóng chúng khi widget bị huỷ, tránh tình trạng rò rỉ bộ nhớ (memory leaks)."
    },
    {
      "question": "Which Flutter test focuses on UI components?",
      "options": {
        "A": "Unit test",
        "B": "Widget test",
        "C": "Integration test",
        "D": "Load test"
      },
      "answer": "B",
      "explanation": "Widget test (hay Component test) được thiết kế chuyên biệt để kiểm thử một widget cụ thể, mô phỏng tương tác người dùng, hiển thị layout để xem thành phần đó có hoạt động đúng thiết kế không."
    },
    {
      "question": "Why should database operations be asynchronous?",
      "options": {
        "A": "Simplify syntax",
        "B": "Avoid blocking UI thread",
        "C": "Reduce code",
        "D": "Improve theme"
      },
      "answer": "B",
      "explanation": "Các truy vấn cơ sở dữ liệu thường mất thời gian I/O. Thực thi bất đồng bộ giúp luồng chính (Main/UI thread) không bị chặn (block), đảm bảo ứng dụng vẫn phản hồi mượt mà."
    },
    {
      "question": "Why is Chapter 13 considered optional (Plus)?",
      "options": {
        "A": "It replaces core concepts",
        "B": "Apps can work without deep optimization",
        "C": "It manages navigation",
        "D": "It handles authentication"
      },
      "answer": "B",
      "explanation": "Các kỹ thuật tối ưu hóa chuyên sâu (deep optimization) thường là tuỳ chọn bởi vì ứng dụng Flutter cơ bản thường có hiệu suất đủ dùng, không yêu cầu thiết lập quá phức tạp từ ban đầu."
    },
    {
      "question": "Which widget applies a theme to an entire Flutter application?",
      "options": {
        "A": "Scaffold",
        "B": "Theme",
        "C": "MaterialApp",
        "D": "Container"
      },
      "answer": "C",
      "explanation": "MaterialApp là widget gốc thường bọc toàn bộ ứng dụng, nó có thuộc tính 'theme' dùng để cấu hình hệ thống màu sắc, typography và phong cách cho các widget khác kế thừa bên trong."
    },
    {
      "question": "What is the purpose of SliverAppBar?",
      "options": {
        "A": "Static app bar",
        "B": "Scrollable flexible app bar",
        "C": "Bottom navigation",
        "D": "Drawer control"
      },
      "answer": "B",
      "explanation": "SliverAppBar tích hợp cùng CustomScrollView cung cấp một thanh điều hướng trên cùng có hiệu ứng đặc biệt như linh hoạt co giãn, cuộn, và ẩn/hiện tùy theo thao tác cuộn của người dùng."
    },
    {
      "question": "Which widget is best used to add fixed empty space?",
      "options": {
        "A": "Padding",
        "B": "Expanded",
        "C": "SizedBox",
        "D": "Container"
      },
      "answer": "C",
      "explanation": "Mặc dù Padding hoặc Container cũng có thể tạo khoảng trống, nhưng SizedBox là widget có chi phí khởi tạo rẻ nhất, đơn giản nhất khi chỉ cần một khoảng đệm cố định với width hoặc height xác định."
    },
    {
      "question": "Which package supports BLOC architecture?",
      "options": {
        "A": "provider",
        "B": "flutter_bloc",
        "C": "sqflite",
        "D": "http"
      },
      "answer": "B",
      "explanation": "Package flutter_bloc cung cấp một tập hợp các công cụ mạnh mẽ và tiêu chuẩn như BlocProvider, BlocBuilder, BlocListener... để tích hợp mô hình BLoC pattern vào Flutter."
    },
    {
      "question": "Which Flutter widget reacts to authentication state changes?",
      "options": {
        "A": "FutureBuilder",
        "B": "StreamBuilder",
        "C": "ListView",
        "D": "Form"
      },
      "answer": "B",
      "explanation": "Trạng thái xác thực thường phát ra nhiều dữ kiện thay đổi liên tục theo thời gian. StreamBuilder cho phép ứng dụng lắng nghe các sự kiện này (Stream) và tự động cập nhật UI mỗi khi state thay đổi."
    },
    {
      "question": "What is technical debt?",
      "options": {
        "A": "UI lag",
        "B": "Future cost of poor design decisions",
        "C": "Memory usage",
        "D": "API limit"
      },
      "answer": "B",
      "explanation": "Nợ kỹ thuật (Technical debt) là một khái niệm ẩn dụ về chi phí mà nhóm phát triển sẽ phải trả trong tương lai do chọn cách viết code nhanh/tạm bợ thay vì thiết kế hệ thống tốt ngay từ đầu."
    },
    {
      "question": "What is implicit animation?",
      "options": {
        "A": "Manual animation control",
        "B": "Animation without controller",
        "C": "API animation",
        "D": "Navigation animation"
      },
      "answer": "B",
      "explanation": "Các Implicit animations (hoạt ảnh ngầm định, ví dụ AnimatedContainer) cho phép thực hiện hiệu ứng chuyển tiếp giữa các thay đổi của giá trị thuộc tính mà không cần phải lập trình và quản lý AnimationController."
    },
    {
      "question": "Which Dart data structure is best suited for storing an ordered collection of items?",
      "options": {
        "A": "Set",
        "B": "Map",
        "C": "List",
        "D": "Queue"
      },
      "answer": "C",
      "explanation": "List là một mảng kích thước động (array) đặc trưng trong Dart. Nó cung cấp cơ chế lưu trữ theo chỉ mục (index-based), hoàn toàn phù hợp cho các cấu trúc dữ liệu có thứ tự (ordered collection)."
    },
    {
      "question": "Which Flutter concept supports reactive UI updates?",
      "options": {
        "A": "Manual refresh",
        "B": "Widget rebuilding",
        "C": "Hot restart",
        "D": "Native callbacks"
      },
      "answer": "B",
      "explanation": "Cơ chế của mô hình UI phản ứng (reactive) được xây dựng dựa trên khái niệm gọi lại phương thức build() để tạo ra một cây widget mới thay thế mô tả cũ mỗi khi state thay đổi."
    },
    {
      "question": "Which type of test checks individual functions or classes?",
      "options": {
        "A": "Widget test",
        "B": "Integration test",
        "C": "Unit test",
        "D": "System test"
      },
      "answer": "C",
      "explanation": "Kiểm thử đơn vị (Unit test) đảm bảo kiểm tra tính đúng đắn về mặt logic của các đơn vị code nhỏ nhất (một hàm, một phương thức hoặc một lớp) hoạt động độc lập."
    },
    {
      "question": "What is the role of events in BLOC?",
      "options": {
        "A": "Store UI",
        "B": "Trigger state changes",
        "C": "Render widgets",
        "D": "Handle layout"
      },
      "answer": "B",
      "explanation": "Trong kiến trúc BLoC, sự kiện (Events) được tạo ra bởi người dùng hoặc hệ thống gửi tới BLoC như một input đầu vào nhằm mục đích kích hoạt luồng xử lý và phát ra trạng thái (States) mới."
    },
    {
      "question": "What is the main purpose of hot reload in Flutter?",
      "options": {
        "A": "Improve runtime performance",
        "B": "Instantly reflect code changes in UI",
        "C": "Publish apps faster",
        "D": "Reduce memory usage"
      },
      "answer": "B",
      "explanation": "Hot reload là tính năng tăng năng suất nổi bật của Flutter, nó tiêm mã nguồn đã thay đổi vào máy ảo Dart ngay lập tức và render lại UI, giúp lập trình viên thấy kết quả tức thì mà không cần build lại toàn bộ ứng dụng."
    },
    {
      "question": "Why are forms important in mobile applications?",
      "options": {
        "A": "UI decoration",
        "B": "User data collection",
        "C": "State management",
        "D": "Navigation"
      },
      "answer": "B",
      "explanation": "Các thành phần form trong ứng dụng (TextField, Checkbox, ...) đóng vai trò cốt lõi trong việc nhận đầu vào, xác thực, và thu thập dữ liệu do người dùng cung cấp."
    },
    {
      "question": "Which method retrieves data from SharedPreferences?",
      "options": {
        "A": "get()",
        "B": "read()",
        "C": "fetch()",
        "D": "load()"
      },
      "answer": "A",
      "explanation": "Thư viện SharedPreferences cung cấp các phương thức như get(), getString(), getInt()... để đọc dữ liệu lưu trữ cục bộ. Trong các lựa chọn trên, get() là phương thức chính xác thuộc về API của nó."
    },
    {
      "question": "What is the main benefit of Flutter's widget-based architecture?",
      "options": {
        "A": "Widgets are only used for layout design",
        "B": "Widgets allow code reuse across platforms",
        "C": "Widgets automatically manage databases",
        "D": "Widgets replace backend services"
      },
      "answer": "B",
      "explanation": "Mô hình dựa trên Widget cho phép mọi thành phần đều là widget (composition), dễ dàng mở rộng và tái sử dụng cùng một mã nguồn trên nhiều thiết bị, nền tảng khác nhau."
    },
    {
      "question": "Why are widgets lightweight in Flutter?",
      "options": {
        "A": "They manage system resources",
        "B": "They are immutable descriptions",
        "C": "They store UI state",
        "D": "They handle rendering directly"
      },
      "answer": "B",
      "explanation": "Widgets bản chất là các đối tượng mô tả khai báo (immutable descriptions) cho một phần giao diện. Chúng không chứa trạng thái thay đổi hay logic vẽ (render objects), vì vậy cực kỳ nhẹ và nhanh khi khởi tạo mới."
    },
    {
      "question": "Why should authentication state be centralized?",
      "options": {
        "A": "Reduce UI code",
        "B": "Ensure consistent access control",
        "C": "Improve animations",
        "D": "Simplify layout"
      },
      "answer": "B",
      "explanation": "Quản lý trạng thái xác thực tại một nguồn tin cậy duy nhất (centralized) giúp kiểm soát quyền truy cập nhất quán trên các luồng điều hướng, ngăn chặn các lỗi truy cập trái phép ở nhiều màn hình khác nhau."
    },
    {
      "question": "Which widget can hide user input text when configured for password entry?",
      "options": {
        "A": "TextField",
        "B": "ObscureText",
        "C": "SecureInput",
        "D": "PasswordField"
      },
      "answer": "A",
      "explanation": "Widget TextField trong Flutter hỗ trợ thuộc tính obscureText: true. Khi được kích hoạt, thuộc tính này sẽ ẩn các ký tự vừa nhập (biến thành dấu chấm/sao) thường dùng cho trường mật khẩu."
    },
    {
      "question": "What is Flutter primarily used for?",
      "options": {
        "A": "Designing databases for mobile apps",
        "B": "Creating native applications from a single codebase",
        "C": "Developing server-side applications only",
        "D": "Building operating systems for mobile devices"
      },
      "answer": "B",
      "explanation": "Flutter là một bộ SDK UI của Google chuyên dành cho việc phát triển các ứng dụng đa nền tảng có hiệu năng nguyên bản (native) từ một codebase duy nhất."
    },
    {
      "question": "Which method resets all form fields?",
      "options": {
        "A": "clear()",
        "B": "reset()",
        "C": "dispose()",
        "D": "remove()"
      },
      "answer": "B",
      "explanation": "Trên đối tượng FormState của Flutter, phương thức reset() được sử dụng để đưa tất cả các FormField con bên trong hệ thống Form về giá trị mặc định ban đầu."
    },
    {
      "question": "Which Dart keyword is used to define a constant value at compile time?",
      "options": {
        "A": "final",
        "B": "static",
        "C": "const",
        "D": "var"
      },
      "answer": "C",
      "explanation": "Từ khóa const trong Dart biểu thị một biến là hằng số với thời gian biên dịch (compile-time constant). Nghĩa là giá trị phải được biết chắc chắn và đóng băng trước khi chương trình chạy."
    },
    {
      "question": "What happens after successful login?",
      "options": {
        "A": "App closes",
        "B": "User session starts",
        "C": "Theme changes",
        "D": "Navigation resets"
      },
      "answer": "B",
      "explanation": "Trong quy trình xác thực tiêu chuẩn, sau khi đăng nhập thành công, hệ thống sẽ cấp phát token hoặc tạo một phiên làm việc (user session) duy trì thông tin người dùng."
    },
    {
      "question": "Which step is required before running a Flutter app for the first time?",
      "options": {
        "A": "Publishing the app",
        "B": "Setting up the Flutter SDK",
        "C": "Configuring a database",
        "D": "Writing backend APIs"
      },
      "answer": "B",
      "explanation": "Bước tiền đề cốt lõi nhất để có thể tạo mới, biên dịch và chạy ứng dụng Flutter là môi trường của máy tính phải được cấu hình và cài đặt Flutter SDK đầy đủ."
    },
    {
      "question": "Which widget reacts to async data from local storage?",
      "options": {
        "A": "FutureBuilder",
        "B": "StreamBuilder",
        "C": "ListView",
        "D": "Provider"
      },
      "answer": "A",
      "explanation": "Lấy dữ liệu từ lưu trữ cục bộ (local storage) thông thường là một Future (ví dụ: truy vấn SQLite/SharedPreferences mất một thời gian chờ). FutureBuilder cho phép tạo giao diện tùy theo các trạng thái loading, error hay success của Future này."
    },
    {
      "question": "What does golden testing verify?",
      "options": {
        "A": "API responses",
        "B": "UI appearance consistency",
        "C": "Database state",
        "D": "Authentication"
      },
      "answer": "B",
      "explanation": "Golden test là một kỹ thuật kiểm thử giao diện trong Flutter để so sánh việc kết xuất widget (pixels) ở thời điểm hiện tại so với một tệp hình ảnh tiêu chuẩn (golden image), đảm bảo sự nhất quán trực quan (UI appearance consistency)."
    },
    {
      "question": "Why should state be kept as local as possible?",
      "options": {
        "A": "Better animations",
        "B": "Reduce unnecessary rebuilds",
        "C": "Simplify UI",
        "D": "Improve navigation"
      },
      "answer": "B",
      "explanation": "Bằng cách giới hạn trạng thái (state) ở phạm vi nhỏ nhất của widget cần nó, khi có thay đổi trạng thái, Flutter chỉ tiến hành rebuild khu vực nhỏ bé đó thay vì toàn bộ cây cha, từ đó cải thiện hiệu năng tối đa."
    },
    {
      "question": "What is the benefit of composing widgets in Flutter?",
      "options": {
        "A": "Faster compilation",
        "B": "Better code reuse and UI consistency",
        "C": "Reduced memory usage",
        "D": "Automatic navigation"
      },
      "answer": "B",
      "explanation": "Kết hợp các widget nhỏ, đơn giản để xây dựng thành một widget lớn và phức tạp hơn (composition) giúp khả năng tái sử dụng mã (code reuse) cao hơn, giữ UI luôn nhất quán."
    },
    {
      "question": "Which status code indicates server error?",
      "options": {
        "A": "200",
        "B": "301",
        "C": "404",
        "D": "500"
      },
      "answer": "D",
      "explanation": "Theo tiêu chuẩn phản hồi HTTP, nhóm mã lỗi 5xx dùng để báo cáo lỗi từ phía máy chủ, ví dụ mã 500 là Internal Server Error chỉ ra server gặp sự cố trong lúc xử lý yêu cầu."
    },
    {
      "question": "Which widget pattern protects authenticated routes?",
      "options": {
        "A": "Navigator",
        "B": "Guard",
        "C": "Route protection",
        "D": "Middleware"
      },
      "answer": "B",
      "explanation": "Trong Flutter, pattern Guard (hoặc Route Guard) thường được sử dụng kết hợp với các thư viện điều hướng (như auto_route hoặc GoRouter) để kiểm tra trạng thái đăng nhập, từ đó ngăn chặn hoặc điều hướng người dùng khỏi các tuyến đường yêu cầu xác thực."
    },
    {
      "question": "Why are tests important for refactoring?",
      "options": {
        "A": "Reduce UI work",
        "B": "Ensure changes don't break functionality",
        "C": "Improve animations",
        "D": "Change layout"
      },
      "answer": "B",
      "explanation": "Kiểm thử (tests) đảm bảo rằng việc tối ưu hóa hoặc thay đổi cấu trúc mã nguồn (refactoring) không làm hỏng các chức năng đã hoạt động ổn định trước đó."
    },
    {
      "question": "What is the role of BuildContext in Flutter?",
      "options": {
        "A": "Store application data",
        "B": "Locate widgets in the widget tree",
        "C": "Manage navigation history",
        "D": "Render UI pixels"
      },
      "answer": "B",
      "explanation": "BuildContext đóng vai trò như một tay cầm (handle) để xác định vị trí của một widget cụ thể bên trong cây widget (widget tree), giúp widget đó giao tiếp với các widget cha hoặc truy cập các provider/theme."
    },
    {
      "question": "What role does the Flutter framework play in application development?",
      "options": {
        "A": "It manages database servers",
        "B": "It provides UI components and rendering logic",
        "C": "It replaces the operating system",
        "D": "It runs backend business logic"
      },
      "answer": "B",
      "explanation": "Flutter framework cung cấp một tập hợp phong phú các thành phần giao diện (UI components) và hệ thống engine kết xuất (rendering logic) giúp nhà phát triển xây dựng ứng dụng đa nền tảng một cách nhanh chóng."
    },
    {
      "question": "How is the Flutter UI constructed internally?",
      "options": {
        "A": "Using XML layout files",
        "B": "Using HTML and CSS",
        "C": "Using a hierarchical widget tree",
        "D": "Using native UI components only"
      },
      "answer": "C",
      "explanation": "Giao diện người dùng trong Flutter được xây dựng hoàn toàn dựa trên cấu trúc phân cấp cây (hierarchical widget tree), trong đó mỗi phần tử đều là một widget lồng vào nhau."
    },
    {
      "question": "Which widget enables custom scroll effects in Flutter?",
      "options": {
        "A": "ListView",
        "B": "SingleChildScrollView",
        "C": "CustomScrollView",
        "D": "Column"
      },
      "answer": "C",
      "explanation": "CustomScrollView cho phép kết hợp nhiều Sliver khác nhau (như SliverAppBar, SliverList, SliverGrid) để tạo ra các hiệu ứng cuộn tùy chỉnh và phức tạp."
    },
    {
      "question": "Which practice improves rendering performance?",
      "options": {
        "A": "Large widget trees",
        "B": "Splitting widgets",
        "C": "Global state",
        "D": "Frequent rebuilds"
      },
      "answer": "B",
      "explanation": "Việc chia nhỏ các widget lớn thành các widget nhỏ hơn (và sử dụng từ khóa const) giúp giới hạn phạm vi rebuild, từ đó tăng hiệu suất kết xuất (rendering) của ứng dụng."
    },
    {
      "question": "What does an integration test verify?",
      "options": {
        "A": "Single function",
        "B": "Widget rendering",
        "C": "End-to-end app behavior",
        "D": "Theme consistency"
      },
      "answer": "C",
      "explanation": "Kiểm thử tích hợp (Integration test) kiểm tra ứng dụng một cách toàn diện (end-to-end), đánh giá sự tương tác giữa tất cả các thành phần trong hệ thống thực tế."
    },
    {
      "question": "Why is separating UI and state logic recommended?",
      "options": {
        "A": "Reduce code size",
        "B": "Improve maintainability",
        "C": "Faster execution",
        "D": "Better animations"
      },
      "answer": "B",
      "explanation": "Việc tách biệt giao diện (UI) và logic trạng thái giúp mã nguồn rõ ràng, dễ đọc, dễ kiểm thử và dễ bảo trì (maintainability) khi dự án mở rộng."
    },
    {
      "question": "When does Flutter rebuild the widget tree?",
      "options": {
        "A": "On every frame",
        "B": "When state changes",
        "C": "Only when app restarts",
        "D": "Only during hot restart"
      },
      "answer": "B",
      "explanation": "Flutter chỉ tiến hành xây dựng lại (rebuild) các thành phần của cây widget bị ảnh hưởng khi có sự thay đổi trạng thái (state changes), ví dụ như khi gọi setState()."
    },
    {
      "question": "Which concept does BLoC heavily rely on?",
      "options": {
        "A": "Future",
        "B": "Stream",
        "C": "Animation",
        "D": "Theme"
      },
      "answer": "B",
      "explanation": "Kiến trúc BLoC (Business Logic Component) phụ thuộc nhiều vào Streams (luồng dữ liệu bất đồng bộ) để nhận các sự kiện (Events) và phát ra các trạng thái (States) mới."
    },
    {
      "question": "Why is version control critical?",
      "options": {
        "A": "UI changes",
        "B": "Track and manage code changes",
        "C": "Improve animations",
        "D": "Store data"
      },
      "answer": "B",
      "explanation": "Hệ thống quản lý phiên bản (như Git) là yếu tố then chốt để theo dõi lịch sử chỉnh sửa, quản lý các thay đổi mã nguồn và hỗ trợ làm việc nhóm hiệu quả."
    },
    {
      "question": "Why is immutability important in BLoC states?",
      "options": {
        "A": "UI speed",
        "B": "Predictable state changes",
        "C": "Memory usage",
        "D": "Theme control"
      },
      "answer": "B",
      "explanation": "Tính bất biến (immutability) đảm bảo rằng thay vì sửa đổi state hiện tại, ta luôn tạo ra state mới. Điều này giúp theo dõi sự thay đổi state một cách dễ dự đoán (predictable) và báo cho UI biết để rebuild."
    },
    {
      "question": "Which Flutter plugin provides SQLite support?",
      "options": {
        "A": "hive",
        "B": "moor",
        "C": "sqflite",
        "D": "shared_preferences"
      },
      "answer": "C",
      "explanation": "Plugin sqflite cung cấp các API để làm việc trực tiếp với cơ sở dữ liệu SQLite trong nền tảng Android, iOS và macOS của Flutter."
    },
    {
      "question": "What is the main benefit of using Maps in Dart?",
      "options": {
        "A": "Storing values without keys",
        "B": "Storing key-value pairs",
        "C": "Rendering UI components",
        "D": "Managing asynchronous tasks"
      },
      "answer": "B",
      "explanation": "Map trong Dart là một cấu trúc dữ liệu collection được thiết kế tối ưu để lưu trữ và truy xuất các cặp khóa-giá trị (key-value pairs) một cách nhanh chóng."
    },
    {
      "question": "Which tool helps analyze UI performance in Flutter?",
      "options": {
        "A": "Inspector",
        "B": "DevTools",
        "C": "Emulator",
        "D": "Hot reload"
      },
      "answer": "B",
      "explanation": "Flutter DevTools là bộ công cụ gỡ lỗi và profiling toàn diện, bao gồm Performance View để đo lường và phân tích hiệu suất render UI của ứng dụng."
    },
    {
      "question": "What does a Dart class primarily represent?",
      "options": {
        "A": "UI widget only",
        "B": "A blueprint for creating objects",
        "C": "A database table",
        "D": "A network request"
      },
      "answer": "B",
      "explanation": "Trong lập trình hướng đối tượng với Dart, một class (lớp) đóng vai trò là một bản thiết kế (blueprint) định nghĩa các thuộc tính và phương thức để tạo ra các đối tượng (objects)."
    },
    {
      "question": "What is Hive mainly used for?",
      "options": {
        "A": "Remote database",
        "B": "Lightweight local NoSQL storage",
        "C": "State management",
        "D": "Routing"
      },
      "answer": "B",
      "explanation": "Hive là một cơ sở dữ liệu NoSQL cục bộ, nhẹ và cực kỳ nhanh dành riêng cho Dart/Flutter, dùng để lưu trữ dữ liệu dạng key-value."
    },
    {
      "question": "Which HTTP header is commonly used for authorization?",
      "options": {
        "A": "Content-Type",
        "B": "Accept",
        "C": "Authorization",
        "D": "Cache-Control"
      },
      "answer": "C",
      "explanation": "Header 'Authorization' thường được sử dụng trong giao thức HTTP để truyền các token (như Bearer token) nhằm mục đích xác thực và phân quyền trên máy chủ."
    },
    {
      "question": "What does TextEditingController manage?",
      "options": {
        "A": "Theme",
        "B": "Text input value",
        "C": "Validation rules",
        "D": "Layout constraints"
      },
      "answer": "B",
      "explanation": "TextEditingController được dùng để quản lý giá trị văn bản được nhập vào (text input value), cũng như trạng thái chọn (selection state) trong TextField."
    },
    {
      "question": "Why is Dart considered suitable for Flutter development?",
      "options": {
        "A": "It is only used for backend systems",
        "B": "It supports both UI and application logic efficiently",
        "C": "It replaces native languages",
        "D": "It does not support asynchronous programming"
      },
      "answer": "B",
      "explanation": "Dart được thiết kế tối ưu hóa cho phát triển giao diện người dùng, hỗ trợ cả biên dịch AOT (dành cho hiệu năng) và JIT (dành cho hot reload), xử lý hiệu quả UI và logic ứng dụng."
    },
    {
      "question": "What does the build() method return in a widget?",
      "options": {
        "A": "screen",
        "B": "A widget tree describing the UI",
        "C": "Application state",
        "D": "Rendered pixels"
      },
      "answer": "B",
      "explanation": "Phương thức build() luôn trả về một widget tree (hoặc một widget đơn lẻ), đóng vai trò mô tả cách giao diện người dùng cần được hiển thị ra sao."
    },
    {
      "question": "What represents the output of a BLoC?",
      "options": {
        "A": "Events",
        "B": "Widgets",
        "C": "States",
        "D": "Controllers"
      },
      "answer": "C",
      "explanation": "Đầu vào của BLoC là các Events, sau khi xử lý logic nghiệp vụ, đầu ra (output) của BLoC chính là các States (trạng thái) để UI lắng nghe và cập nhật."
    },
    {
      "question": "What is Cubit in BLoC?",
      "options": {
        "A": "UI widget",
        "B": "Simplified BLoC without events",
        "C": "Database layer",
        "D": "Animation helper"
      },
      "answer": "B",
      "explanation": "Cubit là một tập con của BLoC, giúp quản lý trạng thái đơn giản hơn bằng cách loại bỏ khái niệm Events và thay thế bằng việc gọi trực tiếp các hàm (functions) để phát ra States."
    },
    {
      "question": "Which activity is typically performed after creating a new Flutter project?",
      "options": {
        "A": "Deploying to app stores",
        "B": "Running the default app on a device",
        "C": "Configuring authentication",
        "D": "Optimizing database queries"
      },
      "answer": "B",
      "explanation": "Sau khi khởi tạo một dự án Flutter mới, bước đầu tiên thông thường là chạy ứng dụng mẫu mặc định (counter app) trên máy ảo hoặc thiết bị vật lý để đảm bảo môi trường đã được cài đặt đúng."
    },
    {
      "question": "Which practice improves deployment security?",
      "options": {
        "A": "Debug builds",
        "B": "Secure signing keys",
        "C": "Hardcoding secrets",
        "D": "Skipping validation"
      },
      "answer": "B",
      "explanation": "Việc giữ bí mật và bảo mật các khóa ký (Secure signing keys) như keystore trên Android hay chứng chỉ phân phối trên iOS là điều bắt buộc để đảm bảo an toàn bảo mật khi phát hành ứng dụng."
    },
    {
      "question": "Why is Chapter 14 considered optional (Plus)?",
      "options": {
        "A": "Deployment is UI logic",
        "B": "Apps can be tested without publishing",
        "C": "It replaces authentication",
        "D": "It handles APIs"
      },
      "answer": "B",
      "explanation": "Các nội dung liên quan đến triển khai (Deployment) thường là giai đoạn cuối cùng. Quá trình phát triển và kiểm thử ứng dụng vẫn có thể diễn ra bình thường mà không cần phải thực sự phát hành nó lên các chợ ứng dụng."
    },
    {
      "question": "What is the primary purpose of ThemeData in Flutter?",
      "options": {
        "A": "Manage navigation",
        "B": "Define application-wide visual styles",
        "C": "Handle state changes",
        "D": "Control animations"
      },
      "answer": "B",
      "explanation": "ThemeData được sử dụng để thiết lập các quy tắc trực quan (visual styles) mang tính toàn cục cho toàn bộ ứng dụng, như màu sắc cơ bản, typography, hình dạng widget, v.v."
    },
    {
      "question": "Which method is used to update the UI when state changes?",
      "options": {
        "A": "build()",
        "B": "setState()",
        "C": "initState()",
        "D": "dispose()"
      },
      "answer": "B",
      "explanation": "Trong một StatefulWidget, gọi hàm setState() sẽ thông báo cho framework biết rằng dữ liệu nội bộ đã thay đổi, kích hoạt việc gọi lại hàm build() để cập nhật UI."
    },
    {
      "question": "Which Flutter package is commonly used for simple key-value storage?",
      "options": {
        "A": "sqflite",
        "B": "shared_preferences",
        "C": "provider",
        "D": "http"
      },
      "answer": "B",
      "explanation": "Package shared_preferences là giải pháp tiêu chuẩn và phổ biến nhất trong Flutter để lưu trữ vĩnh viễn các dữ liệu dạng key-value cơ bản (như cấu hình, cờ trạng thái đăng nhập)."
    },
    {
      "question": "Why should architecture be decided early?",
      "options": {
        "A": "Avoid UI work",
        "B": "Reduce refactoring cost",
        "C": "Improve animations",
        "D": "Change theme"
      },
      "answer": "B",
      "explanation": "Lựa chọn một kiến trúc phù hợp ngay từ giai đoạn đầu phát triển giúp dự án có cấu trúc thống nhất, dễ mở rộng và giảm thiểu đáng kể chi phí, thời gian phải cấu trúc lại mã (refactoring) sau này."
    },
    {
      "question": "What is pagination used for?",
      "options": {
        "A": "UI animation",
        "B": "Handling large datasets efficiently",
        "C": "Theme management",
        "D": "Authentication"
      },
      "answer": "B",
      "explanation": "Phân trang (Pagination) là kỹ thuật nạp dữ liệu theo từng phần nhỏ, giúp tối ưu hóa băng thông, bộ nhớ và khả năng xử lý của ứng dụng khi phải đối mặt với các tập dữ liệu cực lớn."
    },
    {
      "question": "Which widget helps avoid rebuilding unchanged UI parts?",
      "options": {
        "A": "Container",
        "B": "RepaintBoundary",
        "C": "Column",
        "D": "FutureBuilder"
      },
      "answer": "B",
      "explanation": "RepaintBoundary hướng dẫn cho engine của Flutter tạo một lớp kết xuất (render layer) riêng biệt, giúp ngăn các phần UI không thay đổi bị vẽ lại (repaint) khi các phần khác thay đổi, cải thiện hiệu suất."
    },
    {
      "question": "Which widget is used to handle asynchronous API responses in UI?",
      "options": {
        "A": "FutureBuilder",
        "B": "ListView",
        "C": "Provider",
        "D": "Form"
      },
      "answer": "A",
      "explanation": "FutureBuilder là một widget tiện ích giúp lắng nghe quá trình thực thi của một Future (như lệnh gọi API trả về dữ liệu bất đồng bộ) và xây dựng lại giao diện tương ứng với các trạng thái: đang tải, thành công hoặc lỗi."
    },
    {
      "question": "Which Dart feature helps organize code into reusable libraries?",
      "options": {
        "A": "Widgets",
        "B": "Packages and imports",
        "C": "Hot reload",
        "D": "Layout constraints"
      },
      "answer": "B",
      "explanation": "Dart sử dụng hệ thống Packages (gói) và chỉ thị imports để chia sẻ và module hóa mã nguồn thành các thư viện có thể tái sử dụng dễ dàng."
    },
    {
      "question": "What is refresh token used for?",
      "options": {
        "A": "UI refresh",
        "B": "Extend session without re-login",
        "C": "Theme update",
        "D": "Navigation reset"
      },
      "answer": "B",
      "explanation": "Refresh token được sử dụng để âm thầm yêu cầu cấp mới Access Token khi Access Token hiện tại đã hết hạn, qua đó giúp kéo dài phiên đăng nhập của người dùng mà không cần yêu cầu họ đăng nhập lại."
    },
    {
      "question": "What is rebuild scope optimization in Flutter?",
      "options": {
        "A": "Reducing widget tree depth",
        "B": "Limiting rebuild to affected widgets",
        "C": "Caching API responses",
        "D": "Using global state"
      },
      "answer": "B",
      "explanation": "Tối ưu hóa phạm vi rebuild là kỹ thuật sử dụng state management, chia nhỏ widget và sử dụng const để giới hạn việc vẽ lại giao diện chỉ ở những widget có dữ liệu thực sự thay đổi."
    },
    {
      "question": "Why is BLoC suitable for large teams?",
      "options": {
        "A": "Less code",
        "B": "Standardized architecture",
        "C": "Faster builds",
        "D": "UI reuse"
      },
      "answer": "B",
      "explanation": "Kiến trúc BLoC tuân thủ các quy tắc tách biệt mối quan tâm rất nghiêm ngặt, tạo ra một tiêu chuẩn kiến trúc rõ ràng (Standardized architecture) giúp các nhóm làm việc với quy mô lớn dễ dàng phân chia và hợp tác phát triển."
    },
    {
      "question": "What is a token in authentication systems?",
      "options": {
        "A": "UI key",
        "B": "Temporary access credential",
        "C": "Database ID",
        "D": "Theme value"
      },
      "answer": "B",
      "explanation": "Trong hệ thống xác thực (như JWT), Token đóng vai trò là bằng chứng định danh hoặc chứng chỉ truy cập tạm thời (Temporary access credential) được cấp cho máy khách sau khi đăng nhập hợp lệ."
    },
    {
      "question": "What does a Tween define?",
      "options": {
        "A": "Animation speed",
        "B": "Value range for animation",
        "C": "UI layout",
        "D": "State logic"
      },
      "answer": "B",
      "explanation": "Tween (Between) nội suy dữ liệu và định nghĩa phạm vi giá trị từ điểm bắt đầu (begin) đến điểm kết thúc (end) trong quá trình diễn ra một chuyển động hoặc hiệu ứng (Animation)."
    },
    {
      "question": "Which Dart feature allows defining reusable, type-safe components?",
      "options": {
        "A": "Mixins",
        "B": "Generics",
        "C": "Futures",
        "D": "Streams"
      },
      "answer": "B",
      "explanation": "Cơ chế Generics cho phép định nghĩa các lớp, phương thức với kiểu dữ liệu được tham số hóa, nhờ đó tạo ra các thành phần tái sử dụng nhưng vẫn đảm bảo tính an toàn kiểu dữ liệu (type-safety)."
    },
    {
      "question": "Which widget animates between two widgets?",
      "options": {
        "A": "AnimatedSwitcher",
        "B": "AnimatedOpacity",
        "C": "AnimatedAlign",
        "D": "AnimatedSize"
      },
      "answer": "A",
      "explanation": "AnimatedSwitcher sẽ tự động tạo hiệu ứng chuyển tiếp (như cross-fade mặc định) giữa một widget cũ và một widget mới khi được thay đổi (thường dựa vào thuộc tính 'key')."
    },
    {
      "question": "Why should setState() be called sparingly?",
      "options": {
        "A": "It increases app size",
        "B": "It may trigger unnecessary rebuilds",
        "C": "It blocks UI thread",
        "D": "It causes memory leaks"
      },
      "answer": "B",
      "explanation": "Việc lạm dụng gọi setState() ở cấp cao trong cấu trúc cây hoặc gọi quá thường xuyên có thể kích hoạt việc xây dựng lại (rebuilds) các nhánh widget không cần thiết, làm lãng phí tài nguyên CPU."
    },
    {
      "question": "What is test isolation?",
      "options": {
        "A": "Running all tests together",
        "B": "Independence of test cases",
        "C": "UI separation",
        "D": "Mocking only"
      },
      "answer": "B",
      "explanation": "Test isolation (Cách ly kiểm thử) là nguyên tắc trong đó mỗi trường hợp kiểm thử (test case) chạy hoàn toàn độc lập, không phụ thuộc vào trạng thái sinh ra từ các bài test khác, đảm bảo tính ổn định và chính xác."
    },
    {
      "question": "What does crossAxisAlignment control?",
      "options": {
        "A": "Vertical alignment in Column",
        "B": "Horizontal alignment in Column",
        "C": "Child order",
        "D": "Widget size"
      },
      "answer": "B",
      "explanation": "Trong widget Column (trục chính - main axis - là chiều dọc), thuộc tính crossAxisAlignment sẽ chịu trách nhiệm điều khiển cách các child widget căn chỉnh trên trục ngang (chiều ngang)."
    },
    {
      "question": "Which tool is commonly used for version control?",
      "options": {
        "A": "SVN",
        "B": "Git",
        "C": "FTP",
        "D": "ZIP"
      },
      "answer": "B",
      "explanation": "Git là hệ thống quản lý phiên bản phân tán phổ biến nhất hiện nay, được các nhà phát triển sử dụng để theo dõi mã nguồn một cách hiệu quả."
    }
  ]
};
