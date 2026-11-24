window.quizSources = window.quizSources || {};

window.quizSources["prm393_flutter_mcq"] = {
  "name": "PRM393 - Flutter MCQ (QuizApp)",
  "questions": [
    {
      "question": "What is the primary advantage of using Flutter in mobile app development?",
      "options": {
        "A": "To enable server-side rendering of applications",
        "B": "To provide a back-end framework for mobile apps",
        "C": "To facilitate the rapid development of cross-platform mobile applications with a single codebase",
        "D": "To enhance the security features of mobile applications"
      },
      "answer": "C",
      "explanation": "Flutter allows developers to use the same codebase for multiple platforms, significantly speeding up the development process and reducing costs."
    },
    {
      "question": "Who maintains Flutter?",
      "options": {
        "A": "Microsoft",
        "B": "Facebook",
        "C": "Google",
        "D": "Apple"
      },
      "answer": "C",
      "explanation": "Flutter is an open-source UI software development kit created and maintained by Google."
    },
    {
      "question": "What language is used to write Flutter apps?",
      "options": {
        "A": "Java",
        "B": "Kotlin",
        "C": "Swift",
        "D": "Dart"
      },
      "answer": "D",
      "explanation": "Flutter apps are written in the Dart programming language."
    },
    {
      "question": "Which of the following platforms is NOT supported by Flutter?",
      "options": {
        "A": "iOS",
        "B": "Android",
        "C": "Web",
        "D": "Nintendo Switch"
      },
      "answer": "D",
      "explanation": "Flutter supports iOS, Android, and web development, but it does not support Nintendo Switch development."
    },
    {
      "question": "How does Flutter achieve high performance in rendering?",
      "options": {
        "A": "Using WebView",
        "B": "Using a JavaScript engine",
        "C": "Using Skia for rendering",
        "D": "Using native device widgets"
      },
      "answer": "C",
      "explanation": "Flutter uses Skia, a high-performance 2D rendering engine, for rendering its UI, which helps achieve high performance."
    },
    {
      "question": "What is a common use of Flutter's hot reload feature?",
      "options": {
        "A": "To optimize app performance",
        "B": "To reduce the app size",
        "C": "To quickly view changes in the UI without restarting the app",
        "D": "To secure the app from vulnerabilities"
      },
      "answer": "C",
      "explanation": "Flutter's hot reload feature allows developers to instantly view changes in the UI without restarting the app, enhancing productivity."
    },
    {
      "question": "Which command is used to create a new Flutter project?",
      "options": {
        "A": "flutter run",
        "B": "flutter create",
        "C": "flutter build",
        "D": "flutter start"
      },
      "answer": "B",
      "explanation": "The flutter create command is used to create a new Flutter project."
    },
    {
      "question": "Which widget in Flutter is used to create a visual hierarchy of the UI that controls the user interface layout?",
      "options": {
        "A": "MaterialApp",
        "B": "Widget",
        "C": "Scaffold",
        "D": "Column"
      },
      "answer": "C",
      "explanation": "The Scaffold widget in Flutter provides a high-level structure for implementing the basic visual layout structure of the mobile app. It includes a number of slots for adding app bar, drawer, bottom navigation bar, floating action buttons, body, and so forth."
    },
    {
      "question": "Which IDE is commonly used for Flutter development?",
      "options": {
        "A": "Visual Studio",
        "B": "PyCharm",
        "C": "Eclipse",
        "D": "Android Studio"
      },
      "answer": "D",
      "explanation": "Android Studio, along with Visual Studio Code, is commonly used for Flutter development."
    },
    {
      "question": "What command installs Flutter on macOS?",
      "options": {
        "A": "flutter install",
        "B": "brew install flutter",
        "C": "apt-get install flutter",
        "D": "install flutter"
      },
      "answer": "B",
      "explanation": "The brew install flutter command is used to install Flutter on macOS."
    },
    {
      "question": "Which operating system does not support Flutter development?",
      "options": {
        "A": "Windows",
        "B": "macOS",
        "C": "Linux",
        "D": "MS-DOS"
      },
      "answer": "D",
      "explanation": "Flutter development is supported on Windows, macOS, and Linux but not on MS-DOS."
    },
    {
      "question": "What is the purpose of the Flutter Doctor command?",
      "options": {
        "A": "To build the app",
        "B": "To run unit tests",
        "C": "To check the environment setup",
        "D": "To deploy the app"
      },
      "answer": "C",
      "explanation": "The flutter doctor command checks the environment setup for Flutter development and provides information on missing dependencies."
    },
    {
      "question": "How do you update the Flutter SDK?",
      "options": {
        "A": "flutter upgrade",
        "B": "flutter update",
        "C": "flutter refresh",
        "D": "flutter reinstall"
      },
      "answer": "A",
      "explanation": "The flutter upgrade command is used to update the Flutter SDK."
    },
    {
      "question": "What is the first step in setting up Flutter on a new machine?",
      "options": {
        "A": "Installing the Flutter SDK",
        "B": "Creating a new project",
        "C": "Running flutter doctor",
        "D": "Configuring the IDE"
      },
      "answer": "A",
      "explanation": "The first step in setting up Flutter on a new machine is installing the Flutter SDK."
    },
    {
      "question": "What is the correct command to create a new Flutter project named my_app?",
      "options": {
        "A": "flutter new my_app",
        "B": "flutter init my_app",
        "C": "flutter create my_app",
        "D": "flutter start my_app"
      },
      "answer": "C",
      "explanation": "The flutter create my_app command is used to create a new Flutter project named my_app."
    },
    {
      "question": "Which file must be configured to use Firebase in a Flutter project?",
      "options": {
        "A": "index.html",
        "B": "main.dart",
        "C": "pubspec.yaml",
        "D": "settings.gradle"
      },
      "answer": "C",
      "explanation": "The pubspec.yaml file must be configured to include dependencies such as Firebase in a Flutter project."
    },
    {
      "question": "What command initializes a Flutter app in an existing directory?",
      "options": {
        "A": "flutter create --init",
        "B": "flutter start --init",
        "C": "flutter init",
        "D": "flutter create ."
      },
      "answer": "D",
      "explanation": "The flutter create . command initializes a Flutter app in the current directory."
    },
    {
      "question": "What might cause a Flutter project to fail to build after setup?",
      "options": {
        "A": "Incorrect project name",
        "B": "Missing dependencies",
        "C": "Using a dark theme",
        "D": "Incorrect Flutter version"
      },
      "answer": "B",
      "explanation": "A common reason for a Flutter project failing to build is missing dependencies that need to be specified in the pubspec.yaml file."
    },
    {
      "question": "If running flutter doctor shows issues, what is a likely first step to resolve them?",
      "options": {
        "A": "Reinstall Flutter",
        "B": "Run flutter clean",
        "C": "Restart the IDE",
        "D": "Follow the recommendations provided by flutter doctor"
      },
      "answer": "D",
      "explanation": "The flutter doctor command provides recommendations to resolve issues; following these recommendations is a common first step to resolving setup problems."
    },
    {
      "question": "Which of the following is a valid variable declaration in Dart?",
      "options": {
        "A": "var name = \"John\";",
        "B": "int number = 42;",
        "C": "String text = 'Hello';",
        "D": "All of the above"
      },
      "answer": "D",
      "explanation": "All of the given options are valid variable declarations in Dart."
    },
    {
      "question": "What is Dart primarily used for in Flutter?",
      "options": {
        "A": "Back-end development",
        "B": "Database management",
        "C": "User interface development",
        "D": "None of the above"
      },
      "answer": "C",
      "explanation": "Dart is primarily used for developing the user interface in Flutter."
    },
    {
      "question": "Which keyword is used to define a constant value in Dart?",
      "options": {
        "A": "constant",
        "B": "static",
        "C": "final",
        "D": "const"
      },
      "answer": "D",
      "explanation": "The const keyword is used to define a constant value in Dart."
    },
    {
      "question": "What type does the main function return in a Dart application?",
      "options": {
        "A": "void",
        "B": "int",
        "C": "String",
        "D": "dynamic"
      },
      "answer": "A",
      "explanation": "The main function in a Dart application returns void."
    },
    {
      "question": "Which of the following is NOT a built-in type in Dart?",
      "options": {
        "A": "int",
        "B": "float",
        "C": "String",
        "D": "bool"
      },
      "answer": "B",
      "explanation": "Dart does not have a built-in float type; instead, it uses double for floating-point numbers."
    },
    {
      "question": "What does the async keyword indicate in Dart?",
      "options": {
        "A": "A function is synchronous",
        "B": "A function returns an integer",
        "C": "A function is asynchronous",
        "D": "A function returns a string"
      },
      "answer": "C",
      "explanation": "The async keyword in Dart indicates that a function is asynchronous and may use the await keyword to wait for future results."
    },
    {
      "question": "Which Dart collection is used to store key-value pairs?",
      "options": {
        "A": "List",
        "B": "Set",
        "C": "Map",
        "D": "Queue"
      },
      "answer": "C",
      "explanation": "In Dart, the Map collection is used to store key-value pairs."
    },
    {
      "question": "What is the output of the following Dart code snippet?\n```dart\nvoid main() {\n  List<int> numbers = [1, 2, 3];\n  print(numbers[1]);\n}\n```",
      "options": {
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "3"
      },
      "answer": "C",
      "explanation": "The code accesses the second element of the list numbers, which is 2."
    },
    {
      "question": "How do you declare a nullable variable of type int in Dart?",
      "options": {
        "A": "int? num;",
        "B": "int num?;",
        "C": "nullable int num;",
        "D": "int num = null;"
      },
      "answer": "A",
      "explanation": "In Dart, the int? type denotes a nullable integer variable."
    },
    {
      "question": "What is the correct way to handle a potential null value using null-aware operators in Dart?\n```dart\nint? a = null;\nint b = a ?? 0;\nprint(b);\n```",
      "options": {
        "A": "0",
        "B": "null",
        "C": "Throws an error",
        "D": "undefined"
      },
      "answer": "A",
      "explanation": "The null-aware operator ?? provides a fallback value if a is null, so b is assigned 0."
    },
    {
      "question": "If a Dart program throws a NoSuchMethodError, what is a likely cause?",
      "options": {
        "A": "A method is missing a return type",
        "B": "A method is called on a null object",
        "C": "A method is missing parameters",
        "D": "A method is using the wrong return type"
      },
      "answer": "B",
      "explanation": "A NoSuchMethodError typically occurs when a method is called on an object that is null."
    },
    {
      "question": "How can you handle exceptions in Dart?",
      "options": {
        "A": "Using try and catch blocks",
        "B": "Using if-else statements",
        "C": "Using switch-case statements",
        "D": "Using break statements"
      },
      "answer": "A",
      "explanation": "Exceptions in Dart are handled using try and catch blocks."
    },
    {
      "question": "A Dart developer is experiencing unexpected behavior in their code. Which tool can they use to debug the issue?",
      "options": {
        "A": "dartfmt",
        "B": "dart analyze",
        "C": "dart doc",
        "D": "dart test"
      },
      "answer": "B",
      "explanation": "The dart analyze tool analyzes the Dart code for potential issues, helping to debug unexpected behavior."
    },
    {
      "question": "Which widget in Flutter is used to display a long list of items?",
      "options": {
        "A": "GridView",
        "B": "ListView",
        "C": "Column",
        "D": "Row"
      },
      "answer": "B",
      "explanation": "The ListView widget in Flutter is used to display a long list of items."
    },
    {
      "question": "What is the purpose of the Container widget in Flutter?",
      "options": {
        "A": "To organize the app's routes",
        "B": "To define a single child widget with padding, margin, and constraints",
        "C": "To create a scrollable list",
        "D": "To handle user input"
      },
      "answer": "B",
      "explanation": "The Container widget in Flutter is used to contain a single child widget and allows for adding padding, margin, and other constraints."
    },
    {
      "question": "Which widget is used for creating a scrollable list of items in a single column in Flutter?",
      "options": {
        "A": "GridView",
        "B": "ListView",
        "C": "Stack",
        "D": "Row"
      },
      "answer": "B",
      "explanation": "The ListView widget is used for creating a scrollable list of items in a single column."
    },
    {
      "question": "What does the Expanded widget do in a Row or Column?",
      "options": {
        "A": "It collapses the child widget",
        "B": "It makes the child widget invisible",
        "C": "It fills the available space in the parent",
        "D": "It aligns the child widget to the left"
      },
      "answer": "C",
      "explanation": "The Expanded widget expands its child to fill the available space in the parent Row or Column."
    },
    {
      "question": "Which widget would you use to create a fixed-size box in Flutter?",
      "options": {
        "A": "Container",
        "B": "SizedBox",
        "C": "Flexible",
        "D": "Wrap"
      },
      "answer": "B",
      "explanation": "The SizedBox widget is used to create a fixed-size box in Flutter."
    },
    {
      "question": "Which widget can be used to overlay widgets on top of each other?",
      "options": {
        "A": "Column",
        "B": "Stack",
        "C": "Row",
        "D": "ListView"
      },
      "answer": "B",
      "explanation": "The Stack widget allows you to overlay widgets on top of each other."
    },
    {
      "question": "What does the following code snippet do?\n```dart\nContainer(\n  padding: EdgeInsets.all(16.0),\n  child: Text(\"Hello World\"),\n)\n```",
      "options": {
        "A": "Adds a margin around the text",
        "B": "Adds padding around the text",
        "C": "Centers the text",
        "D": "Makes the text bold"
      },
      "answer": "B",
      "explanation": "The Container widget adds padding around its child widget, in this case, the Text widget."
    },
    {
      "question": "How would you create a circular avatar in Flutter?\n```dart\nCircleAvatar(\n  radius: 50,\n  backgroundImage: NetworkImage('https://example.com/avatar.jpg'),\n)\n```",
      "options": {
        "A": "Using CircleAvatar widget",
        "B": "Using Container widget",
        "C": "Using ClipOval widget",
        "D": "Using Stack widget"
      },
      "answer": "A",
      "explanation": "The CircleAvatar widget is specifically used to create circular avatars in Flutter."
    },
    {
      "question": "What is the result of the following Flutter code?\n```dart\nColumn(\n  children: [\n    Text(\"Hello\"),\n    Text(\"World\"),\n  ],\n)\n```",
      "options": {
        "A": "Displays \"Hello\" and \"World\" in a row",
        "B": "Displays \"Hello\" and \"World\" in a column",
        "C": "Displays \"Hello\" and \"World\" with padding",
        "D": "Throws an error"
      },
      "answer": "B",
      "explanation": "The Column widget arranges its children vertically, so \"Hello\" and \"World\" will be displayed in a column."
    },
    {
      "question": "What does the InkWell widget do in Flutter?\n```dart\nInkWell(\n  onTap: () {\n    print(\"Tapped\");\n  },\n  child: Container(\n    padding: EdgeInsets.all(16.0),\n    child: Text(\"Tap Me\"),\n  ),\n)\n```",
      "options": {
        "A": "Adds padding around the text",
        "B": "Displays a clickable area",
        "C": "Makes the text bold",
        "D": "Changes the background color"
      },
      "answer": "B",
      "explanation": "The InkWell widget in Flutter is used to create a clickable area, similar to a button, and it handles touch events."
    },
    {
      "question": "If a Text widget is not displaying correctly inside a Column, what could be a possible reason?",
      "options": {
        "A": "Incorrect text alignment",
        "B": "The Column widget does not support Text widgets",
        "C": "Text widget needs to be wrapped in an Expanded widget",
        "D": "Lack of padding"
      },
      "answer": "C",
      "explanation": "Text bị tràn (overflow) trong Column thường được xử lý bằng cách bọc nó trong Expanded hoặc Flexible."
    },
    {
      "question": "A developer is using a Row widget, but its children are not evenly spaced. What could be the solution?",
      "options": {
        "A": "Use MainAxisAlignment.spaceBetween",
        "B": "Wrap children in Container widgets",
        "C": "Use Column instead of Row",
        "D": "Increase the width of the parent widget"
      },
      "answer": "A",
      "explanation": "Using MainAxisAlignment.spaceBetween in the Row widget will evenly space out its children."
    },
    {
      "question": "Which layout widget allows you to arrange its children in a vertical column?",
      "options": {
        "A": "Row",
        "B": "Column",
        "C": "Stack",
        "D": "GridView"
      },
      "answer": "B",
      "explanation": "The Column widget arranges its children in a vertical column."
    },
    {
      "question": "Which widget is used to create a grid-based layout in Flutter?",
      "options": {
        "A": "ListView",
        "B": "Column",
        "C": "GridView",
        "D": "Stack"
      },
      "answer": "C",
      "explanation": "The GridView widget is used to create a grid-based layout in Flutter."
    },
    {
      "question": "What does the Padding widget do in Flutter?",
      "options": {
        "A": "Adds margin",
        "B": "Adds padding",
        "C": "Sets background color",
        "D": "Sets border"
      },
      "answer": "B",
      "explanation": "The Padding widget in Flutter adds padding around its child widget."
    },
    {
      "question": "Which widget lets you make a single child that is too large to fit on screen scrollable (vertical by default, or horizontal via scrollDirection)?",
      "options": {
        "A": "SingleChildScrollView",
        "B": "CustomScrollView",
        "C": "Scrollable",
        "D": "ScrollView"
      },
      "answer": "A",
      "explanation": "SingleChildScrollView bọc MỘT widget con quá lớn để cuộn được; hướng cuộn đặt bằng scrollDirection. CustomScrollView dùng cho nhiều Sliver, còn Scrollable và ScrollView là lớp nền tảng cấp thấp/abstract."
    },
    {
      "question": "How do you create a flexible layout in Flutter?",
      "options": {
        "A": "Using Column widget",
        "B": "Using Row widget",
        "C": "Using Flexible widget",
        "D": "Using Stack widget"
      },
      "answer": "C",
      "explanation": "The Flexible widget allows a child of a Row, Column, or Flex to expand and fill the available space."
    },
    {
      "question": "What is the role of the Wrap widget in Flutter?",
      "options": {
        "A": "To arrange widgets in a horizontal row",
        "B": "To arrange widgets in a vertical column",
        "C": "To arrange widgets in a horizontal or vertical layout with wrapping",
        "D": "To arrange widgets in a stack"
      },
      "answer": "C",
      "explanation": "The Wrap widget arranges its children in a horizontal or vertical layout and wraps them to the next line when there is not enough space."
    },
    {
      "question": "What is the result of the following Flutter code?\n```dart\nRow(\n  children: [\n    Text(\"Hello\"),\n    Text(\"World\"),\n  ],\n)\n```",
      "options": {
        "A": "Displays \"Hello\" and \"World\" in a column",
        "B": "Displays \"Hello\" and \"World\" in a row",
        "C": "Displays \"Hello\" and \"World\" with padding",
        "D": "Throws an error"
      },
      "answer": "B",
      "explanation": "The Row widget arranges its children horizontally in a row."
    },
    {
      "question": "What does the Expanded widget do in the following code?\n```dart\nRow(\n  children: [\n    Expanded(child: Text(\"Hello\")),\n    Text(\"World\"),\n  ],\n)\n```",
      "options": {
        "A": "It collapses the child widget",
        "B": "It makes the child widget invisible",
        "C": "It expands the child to fill the available space",
        "D": "It aligns the child widget to the left"
      },
      "answer": "C",
      "explanation": "The Expanded widget expands its child to fill the available space within the Row or Column."
    },
    {
      "question": "What is the purpose of the Align widget in Flutter?\n```dart\nAlign(\n  alignment: Alignment.topRight,\n  child: Text(\"Hello\"),\n)\n```",
      "options": {
        "A": "Centers the child widget",
        "B": "Aligns the child widget within its parent",
        "C": "Adds padding to the child widget",
        "D": "Adds a border to the child widget"
      },
      "answer": "B",
      "explanation": "The Align widget aligns its child widget within its parent according to the specified alignment."
    },
    {
      "question": "If a widget is overflowing in a Column, what could be a possible solution?",
      "options": {
        "A": "Remove the widget",
        "B": "Wrap the widget in an Expanded widget",
        "C": "Use a Row instead of Column",
        "D": "Change the widget's color"
      },
      "answer": "B",
      "explanation": "Wrapping the widget in an Expanded widget or using a SingleChildScrollView can help prevent overflow issues."
    },
    {
      "question": "The children of a Row are wider than the screen and Flutter shows an overflow error (yellow/black stripes). What is the best solution?",
      "options": {
        "A": "Increase the height of the parent widget",
        "B": "Wrap the children in Expanded or Flexible widgets",
        "C": "Replace the Row with a Stack",
        "D": "Give every child a larger fixed width"
      },
      "answer": "B",
      "explanation": "Lỗi overflow trong Row do tổng chiều rộng các con vượt quá không gian cho phép. Bọc con trong Expanded/Flexible để chúng chia lại không gian còn lại thay vì tràn ra ngoài."
    },
    {
      "question": "Which widget in Flutter is used to manage state locally?",
      "options": {
        "A": "StatefulWidget",
        "B": "StatelessWidget",
        "C": "InheritedWidget",
        "D": "Provider"
      },
      "answer": "A",
      "explanation": "The StatefulWidget is used to manage state locally in Flutter."
    },
    {
      "question": "What method is used to update the state of a StatefulWidget?",
      "options": {
        "A": "setState",
        "B": "updateState",
        "C": "refreshState",
        "D": "changeState"
      },
      "answer": "A",
      "explanation": "The setState method is used to update the state of a StatefulWidget and trigger a rebuild."
    },
    {
      "question": "Which state management approach is built on top of InheritedWidget?",
      "options": {
        "A": "Redux",
        "B": "Provider",
        "C": "Bloc",
        "D": "Riverpod"
      },
      "answer": "B",
      "explanation": "The Provider state management approach is built on top of InheritedWidget."
    },
    {
      "question": "In the context of state management, what does the term \"lifting state up\" refer to?",
      "options": {
        "A": "Moving state to a higher widget in the tree",
        "B": "Removing state from the widget tree",
        "C": "Copying state to a lower widget",
        "D": "Isolating state within a widget"
      },
      "answer": "A",
      "explanation": "Lifting state up refers to moving state to a higher widget in the tree so that it can be shared among multiple child widgets."
    },
    {
      "question": "What is the primary benefit of using the Bloc pattern for state management?",
      "options": {
        "A": "Simplifies UI design",
        "B": "Enhances app performance",
        "C": "Enforces a unidirectional data flow",
        "D": "Reduces code complexity"
      },
      "answer": "C",
      "explanation": "The Bloc pattern enforces a unidirectional data flow, making the state management more predictable and easier to debug."
    },
    {
      "question": "How does the ChangeNotifier class in Flutter work for state management?",
      "options": {
        "A": "It re-renders the entire widget tree",
        "B": "It notifies listeners when a change occurs",
        "C": "It prevents state changes",
        "D": "It provides a local state"
      },
      "answer": "B",
      "explanation": "The ChangeNotifier class allows state changes to notify listeners, making it a useful tool for state management in Flutter."
    },
    {
      "question": "Which of the following is a disadvantage of using setState for state management?",
      "options": {
        "A": "It is difficult to implement",
        "B": "It is not scalable for large applications",
        "C": "It doesn't support state changes",
        "D": "It doesn't work with StatelessWidgets"
      },
      "answer": "B",
      "explanation": "Using setState is not scalable for large applications because it can lead to code that is hard to maintain and test."
    },
    {
      "question": "What is the output of the following code?\n```dart\nclass MyWidget extends StatefulWidget {\n  @override\n  _MyWidgetState createState() => _MyWidgetState();\n}\nclass _MyWidgetState extends State<MyWidget> {\n  int counter = 0;\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n      children: [\n        Text('$counter'),\n        ElevatedButton(\n          onPressed: () {\n            setState(() {\n              counter++;\n            });\n          },\n          child: Text('Increment'),\n        ),\n      ],\n    );\n  }\n}\n```",
      "options": {
        "A": "0",
        "B": "1",
        "C": "Counter increments by 1 on button press",
        "D": "Counter decrements by 1 on button press"
      },
      "answer": "C",
      "explanation": "The setState method increments the counter by 1 each time the button is pressed, updating the UI with the new value."
    },
    {
      "question": "How would you implement a Provider for state management in Flutter?",
      "options": {
        "A": "Using a StatefulWidget",
        "B": "Using a StatelessWidget",
        "C": "Using an InheritedWidget",
        "D": "Using a ChangeNotifierProvider"
      },
      "answer": "D",
      "explanation": "The ChangeNotifierProvider is used to implement a Provider for state management in Flutter."
    },
    {
      "question": "What does the following code snippet demonstrate?\n```dart\nclass Counter with ChangeNotifier {\n  int _count = 0;\n  int get count => _count;\n  void increment() {\n    _count++;\n    notifyListeners();\n  }\n}\n```",
      "options": {
        "A": "Basic state management",
        "B": "Advanced state management",
        "C": "State management using ChangeNotifier",
        "D": "State management using Bloc"
      },
      "answer": "C",
      "explanation": "The code snippet demonstrates state management using ChangeNotifier, where notifyListeners is called to update listeners when the state changes."
    },
    {
      "question": "What is a common issue when using setState that prevents the UI from updating?",
      "options": {
        "A": "Not calling setState inside the build method",
        "B": "Calling setState inside the build method",
        "C": "Not calling setState at all",
        "D": "Calling setState with no state change"
      },
      "answer": "C",
      "explanation": "A common issue is not calling setState at all, which prevents the UI from updating when the state changes."
    },
    {
      "question": "How would you debug a state management issue where the state is not updating as expected?",
      "options": {
        "A": "Rebuild the app",
        "B": "Use print statements to trace state changes",
        "C": "Ignore the issue",
        "D": "Remove the stateful widget"
      },
      "answer": "B",
      "explanation": "Using print statements to trace state changes can help identify where the issue is occurring and why the state is not updating as expected."
    },
    {
      "question": "Why might a ChangeNotifier not notify its listeners even when notifyListeners is called?",
      "options": {
        "A": "The ChangeNotifier is not initialized",
        "B": "Listeners are not registered properly",
        "C": "There is no state change",
        "D": "The app is in debug mode"
      },
      "answer": "B",
      "explanation": "If listeners are not registered properly with the ChangeNotifier, they will not be notified even when notifyListeners is called."
    },
    {
      "question": "Which widget is used to define routes in a Flutter application?",
      "options": {
        "A": "Navigator",
        "B": "Routes",
        "C": "MaterialApp",
        "D": "Scaffold"
      },
      "answer": "C",
      "explanation": "The MaterialApp widget is used to define routes in a Flutter application."
    },
    {
      "question": "What does the Navigator.push method do in Flutter?",
      "options": {
        "A": "Removes the current route",
        "B": "Adds a new route to the stack",
        "C": "Replaces the current route",
        "D": "Closes the current route"
      },
      "answer": "B",
      "explanation": "The Navigator.push method adds a new route to the navigation stack, allowing navigation to a new screen."
    },
    {
      "question": "How can you remove the current route in Flutter?",
      "options": {
        "A": "Navigator.pop",
        "B": "Navigator.push",
        "C": "Navigator.remove",
        "D": "Navigator.replace"
      },
      "answer": "A",
      "explanation": "The Navigator.pop method removes the current route from the navigation stack."
    },
    {
      "question": "What is the purpose of the onGenerateRoute property in the MaterialApp widget?",
      "options": {
        "A": "To handle route errors",
        "B": "To define a default route",
        "C": "To dynamically generate routes",
        "D": "To set the initial route"
      },
      "answer": "C",
      "explanation": "The onGenerateRoute property is used to dynamically generate routes based on the settings and arguments provided."
    },
    {
      "question": "Which navigation method would you use to replace the current route with a new route?",
      "options": {
        "A": "Navigator.push",
        "B": "Navigator.pop",
        "C": "Navigator.pushReplacement",
        "D": "Navigator.add"
      },
      "answer": "C",
      "explanation": "The Navigator.pushReplacement method replaces the current route with a new route."
    },
    {
      "question": "What is the result of the following code?\n```dart\nNavigator.push(\n  context,\n  MaterialPageRoute(builder: (context) => NewScreen()),\n);\n```",
      "options": {
        "A": "Navigates to NewScreen",
        "B": "Replaces current screen with NewScreen",
        "C": "Removes the current screen",
        "D": "Closes the app"
      },
      "answer": "A",
      "explanation": "The code navigates to NewScreen by pushing a new route onto the navigation stack."
    },
    {
      "question": "How would you navigate back to the previous screen in Flutter?\n```dart\nNavigator.of(context).???;\n```",
      "options": {
        "A": "push",
        "B": "pop",
        "C": "replace",
        "D": "pushReplacement"
      },
      "answer": "B",
      "explanation": "The Navigator.of(context).pop method is used to navigate back to the previous screen by popping the current route off the stack."
    },
    {
      "question": "What does the following code do?\n```dart\nNavigator.pushAndRemoveUntil(\n  context,\n  MaterialPageRoute(builder: (context) => HomeScreen()),\n  (Route<dynamic> route) => false,\n);\n```",
      "options": {
        "A": "Adds a route to the stack",
        "B": "Removes all previous routes and navigates to HomeScreen",
        "C": "Replaces the current route",
        "D": "Navigates back to the initial route"
      },
      "answer": "B",
      "explanation": "The Navigator.pushAndRemoveUntil method removes all previous routes from the stack and navigates to HomeScreen."
    },
    {
      "question": "What could be a reason for a navigation error stating \"No MaterialLocalizations found\"?",
      "options": {
        "A": "Missing Navigator widget",
        "B": "Missing MaterialApp widget",
        "C": "Incorrect route name",
        "D": "Missing Scaffold widget"
      },
      "answer": "B",
      "explanation": "The error \"No MaterialLocalizations found\" typically occurs when the MaterialApp widget is missing, as it provides the necessary localizations for material design."
    },
    {
      "question": "How can you debug a routing issue where a screen is not found in Flutter?",
      "options": {
        "A": "Check for missing Navigator",
        "B": "Check for missing routes in MaterialApp",
        "C": "Check for missing Scaffold",
        "D": "Check for missing context"
      },
      "answer": "B",
      "explanation": "Ensuring that all necessary routes are defined in the MaterialApp widget can help debug issues where a screen is not found."
    },
    {
      "question": "What could cause a \"Route not found\" error even if the route is defined in the MaterialApp?",
      "options": {
        "A": "Incorrect route name",
        "B": "Incorrect widget used",
        "C": "Navigator not initialized",
        "D": "Context is null"
      },
      "answer": "A",
      "explanation": "A \"Route not found\" error can occur if the route name provided in the Navigator methods does not match any of the route names defined in the MaterialApp widget."
    },
    {
      "question": "Which widget is commonly used to handle form input in Flutter?",
      "options": {
        "A": "TextField",
        "B": "Form",
        "C": "InputForm",
        "D": "FormField"
      },
      "answer": "A",
      "explanation": "The TextField widget is commonly used to handle form input in Flutter."
    },
    {
      "question": "How do you validate a form in Flutter?",
      "options": {
        "A": "Using a Validator object",
        "B": "Using the validate method on the form key",
        "C": "Using the checkValidity method",
        "D": "Using the validate attribute"
      },
      "answer": "B",
      "explanation": "The validate method on the form key is used to validate a form in Flutter."
    },
    {
      "question": "What is the purpose of a GlobalKey in a form?",
      "options": {
        "A": "To uniquely identify a form and access its state",
        "B": "To style the form",
        "C": "To handle user input",
        "D": "To create a new form"
      },
      "answer": "A",
      "explanation": "A GlobalKey is used to uniquely identify a form and access its state, which is essential for validation and other operations."
    },
    {
      "question": "How can you reset the state of a form in Flutter?",
      "options": {
        "A": "By setting the form fields to null",
        "B": "Using the reset method on the form key",
        "C": "Rebuilding the form widget",
        "D": "Using the clear method on the form key"
      },
      "answer": "B",
      "explanation": "The reset method on the form key is used to reset the state of a form in Flutter."
    },
    {
      "question": "What is the output of the following code?\n```dart\nTextField(\n  controller: TextEditingController(text: 'Hello'),\n)\n```",
      "options": {
        "A": "Displays an empty field",
        "B": "Displays 'Hello' in the text field",
        "C": "Throws an error",
        "D": "Displays a password input"
      },
      "answer": "B",
      "explanation": "The TextEditingController with initial text 'Hello' will display 'Hello' in the text field."
    },
    {
      "question": "How do you capture user input from a TextField in Flutter?\n```dart\nTextField(\n  onChanged: (text) {\n    // Capture input here\n  },\n)\n```",
      "options": {
        "A": "Using the onSubmitted callback",
        "B": "Using the onChanged callback",
        "C": "Using a Validator",
        "D": "Using a GlobalKey"
      },
      "answer": "B",
      "explanation": "The onChanged callback is used to capture user input from a TextField as the user types."
    },
    {
      "question": "How would you create a form with multiple fields and a submit button in Flutter?\n```dart\nForm(\n  key: _formKey,\n  child: Column(\n    children: [\n      TextFormField(),\n      TextFormField(),\n      ElevatedButton(\n        onPressed: () {\n          if (_formKey.currentState.validate()) {\n            // Process data.\n          }\n        },\n        child: Text('Submit'),\n      ),\n    ],\n  ),\n)\n```",
      "options": {
        "A": "Using FormField widget",
        "B": "Using Column widget",
        "C": "Using ListView widget",
        "D": "Using Row widget"
      },
      "answer": "B",
      "explanation": "The Column widget is used to arrange multiple form fields and a submit button vertically in a Form."
    },
    {
      "question": "What does the following code snippet demonstrate?\n```dart\nFormField(\n  builder: (FormFieldState<String> state) {\n    return Column(\n      children: [\n        TextField(\n          onChanged: (text) {\n            state.didChange(text);\n          },\n        ),\n        Text(\n          state.errorText ?? '',\n          style: TextStyle(color: Colors.red),\n        ),\n      ],\n    );\n  },\n)\n```",
      "options": {
        "A": "Basic form handling",
        "B": "Advanced form handling",
        "C": "Custom form field with validation",
        "D": "Form with multiple fields"
      },
      "answer": "C",
      "explanation": "The code snippet demonstrates creating a custom form field with validation by using FormField and managing its state."
    },
    {
      "question": "What could be a reason for a TextField not updating its value correctly?",
      "options": {
        "A": "Incorrect onChanged callback",
        "B": "Missing controller",
        "C": "Not using a form key",
        "D": "Missing validation logic"
      },
      "answer": "B",
      "explanation": "A common reason for a TextField not updating its value correctly is the absence of a controller."
    },
    {
      "question": "How can you debug an issue where the form is not validating as expected?",
      "options": {
        "A": "Ignore the issue",
        "B": "Check the form key and validators",
        "C": "Rebuild the form",
        "D": "Remove the validators"
      },
      "answer": "B",
      "explanation": "Checking the form key and validators helps ensure that the form validation logic is implemented correctly and is functioning as expected."
    },
    {
      "question": "Which package is commonly used for making HTTP requests in Flutter?",
      "options": {
        "A": "http",
        "B": "requests",
        "C": "axios",
        "D": "fetch"
      },
      "answer": "A",
      "explanation": "The http package is commonly used for making HTTP requests in Flutter."
    },
    {
      "question": "What method is used to send a GET request in the http package?",
      "options": {
        "A": "http.send",
        "B": "http.get",
        "C": "http.post",
        "D": "http.fetch"
      },
      "answer": "B",
      "explanation": "The http.get method is used to send a GET request in the http package."
    },
    {
      "question": "What is the purpose of the async and await keywords in Dart?",
      "options": {
        "A": "To handle synchronous operations",
        "B": "To handle asynchronous operations",
        "C": "To define variables",
        "D": "To create classes"
      },
      "answer": "B",
      "explanation": "The async and await keywords are used to handle asynchronous operations in Dart."
    },
    {
      "question": "How do you parse a JSON response in Flutter?",
      "options": {
        "A": "Using the jsonDecode function",
        "B": "Using the jsonEncode function",
        "C": "Using the JSON.parse function",
        "D": "Using the parse function"
      },
      "answer": "A",
      "explanation": "The jsonDecode function from the dart:convert library is used to parse a JSON response in Flutter."
    },
    {
      "question": "What is the output of the following code?\n```dart\nvar url = 'https://api.example.com/data';\nvar response = await http.get(url);\nprint(response.body);\n```",
      "options": {
        "A": "Prints the response body",
        "B": "Prints the response headers",
        "C": "Prints the response status code",
        "D": "Throws an error"
      },
      "answer": "A",
      "explanation": "The code sends a GET request to the specified URL and prints the response body."
    },
    {
      "question": "How would you handle an HTTP POST request in Flutter?\n```dart\nvar url = 'https://api.example.com/data';\nvar response = await http.post(url, body: {'key': 'value'});\n```",
      "options": {
        "A": "Using the http.get method",
        "B": "Using the http.post method",
        "C": "Using the http.send method",
        "D": "Using the http.fetch method"
      },
      "answer": "B",
      "explanation": "The http.post method is used to send an HTTP POST request in Flutter."
    },
    {
      "question": "How do you handle errors when making an HTTP request in Flutter?\n```dart\ntry {\n  var response = await http.get(url);\n  if (response.statusCode == 200) {\n    print('Success');\n  } else {\n    print('Error: ${response.statusCode}');\n  }\n} catch (e) {\n  print('Exception: $e');\n}\n```",
      "options": {
        "A": "Ignore errors",
        "B": "Check response status code and catch exceptions",
        "C": "Only check response body",
        "D": "Use a different package"
      },
      "answer": "B",
      "explanation": "The code demonstrates how to handle errors by checking the response status code and catching exceptions using a try-catch block."
    },
    {
      "question": "What could be a reason for a network request failing in Flutter?",
      "options": {
        "A": "Incorrect URL",
        "B": "Valid URL",
        "C": "Strong internet connection",
        "D": "Valid API key"
      },
      "answer": "A",
      "explanation": "An incorrect URL is a common reason for a network request to fail in Flutter."
    },
    {
      "question": "How can you debug a network issue where the response is not as expected in Flutter?",
      "options": {
        "A": "Check the request URL",
        "B": "Check the response headers",
        "C": "Check the request and response payloads",
        "D": "All of the above"
      },
      "answer": "D",
      "explanation": "Debugging a network issue involves checking the request URL, response headers, and the request and response payloads to identify the cause of the issue."
    },
    {
      "question": "Which package is commonly used for SQLite database integration in Flutter?",
      "options": {
        "A": "sqflite",
        "B": "moor",
        "C": "firebase",
        "D": "realm"
      },
      "answer": "A",
      "explanation": "The sqflite package is commonly used for SQLite database integration in Flutter."
    },
    {
      "question": "What method is used to open a database connection in the sqflite package?",
      "options": {
        "A": "openDatabase",
        "B": "connectDatabase",
        "C": "initDatabase",
        "D": "startDatabase"
      },
      "answer": "A",
      "explanation": "The openDatabase method is used to open a database connection in the sqflite package."
    },
    {
      "question": "How do you define a table schema in SQLite for Flutter?",
      "options": {
        "A": "Using SQL commands",
        "B": "Using Dart classes",
        "C": "Using JSON",
        "D": "Using XML"
      },
      "answer": "A",
      "explanation": "A table schema in SQLite for Flutter is defined using SQL commands."
    },
    {
      "question": "Which of the following is a benefit of using an ORM (Object-Relational Mapping) like moor?",
      "options": {
        "A": "Direct SQL queries",
        "B": "Automatic schema updates",
        "C": "Manual data handling",
        "D": "Low-level database access"
      },
      "answer": "B",
      "explanation": "An ORM like moor provides benefits such as automatic schema updates, making database interactions easier."
    },
    {
      "question": "What is the output of the following code?\n```dart\nDatabase db = await openDatabase('my_db.db');\nawait db.insert('my_table', {'name': 'John', 'age': 30});\n```",
      "options": {
        "A": "Inserts data into 'my_table'",
        "B": "Deletes data from 'my_table'",
        "C": "Updates data in 'my_table'",
        "D": "Creates 'my_table'"
      },
      "answer": "A",
      "explanation": "The code opens a database and inserts data into the table 'my_table'."
    },
    {
      "question": "How would you query all rows from a table named 'users' in SQLite using sqflite?\n```dart\nDatabase db = await openDatabase('my_db.db');\nList<Map<String, dynamic>> maps = await db.query('users');\n```",
      "options": {
        "A": "Using db.select method",
        "B": "Using db.fetch method",
        "C": "Using db.query method",
        "D": "Using db.get method"
      },
      "answer": "C",
      "explanation": "The db.query method is used to query all rows from a table named 'users' in SQLite using sqflite."
    },
    {
      "question": "How do you update a specific row in a table using sqflite?\n```dart\nawait db.update(\n  'users',\n  {'name': 'John'},\n  where: 'id = ?',\n  whereArgs: [1]\n);\n```",
      "options": {
        "A": "Using db.modify method",
        "B": "Using db.update method",
        "C": "Using db.edit method",
        "D": "Using db.change method"
      },
      "answer": "B",
      "explanation": "The db.update method is used to update a specific row in a table using sqflite, with the where clause specifying the row to update."
    },
    {
      "question": "What could be a reason for a database operation failing in Flutter?",
      "options": {
        "A": "Incorrect table name",
        "B": "Valid query",
        "C": "Proper database connection",
        "D": "Correct SQL syntax"
      },
      "answer": "A",
      "explanation": "An incorrect table name is a common reason for a database operation to fail in Flutter."
    },
    {
      "question": "What could be a reason for a database operation failing in Flutter even if the query is correct?",
      "options": {
        "A": "Incorrect table name",
        "B": "Database not opened",
        "C": "Incorrect SQL syntax",
        "D": "Concurrency issues"
      },
      "answer": "B",
      "explanation": "A common reason for a database operation to fail, even if the query is correct, is that the database was not opened properly."
    },
    {
      "question": "What class in Flutter is used to create basic animations?",
      "options": {
        "A": "AnimationController",
        "B": "Animation",
        "C": "Tween",
        "D": "AnimatedBuilder"
      },
      "answer": "A",
      "explanation": "The AnimationController class is used to create and control animations in Flutter."
    },
    {
      "question": "Which widget in Flutter is used to animate the transition between two widgets?",
      "options": {
        "A": "AnimatedBuilder",
        "B": "AnimatedContainer",
        "C": "AnimatedSwitcher",
        "D": "AnimatedOpacity"
      },
      "answer": "C",
      "explanation": "The AnimatedSwitcher widget animates the transition between two widgets in Flutter."
    },
    {
      "question": "How does the Tween class work in Flutter animations?",
      "options": {
        "A": "It defines the start and end values of an animation",
        "B": "It controls the animation duration",
        "C": "It defines the animation curve",
        "D": "It handles user input"
      },
      "answer": "A",
      "explanation": "The Tween class in Flutter defines the start and end values for an animation and interpolates between them."
    },
    {
      "question": "What is the role of the TickerProvider in Flutter animations?",
      "options": {
        "A": "It provides a way to create animations",
        "B": "It provides a way to sync animations to the screen refresh rate",
        "C": "It provides a way to handle user input",
        "D": "It provides a way to control animation duration"
      },
      "answer": "B",
      "explanation": "The TickerProvider is used to create Ticker objects, which sync animations to the screen refresh rate."
    },
    {
      "question": "What does the CurvedAnimation class do in Flutter?",
      "options": {
        "A": "It handles the animation duration",
        "B": "It defines the start and end values",
        "C": "It applies a non-linear curve to an animation",
        "D": "It creates a linear animation"
      },
      "answer": "C",
      "explanation": "The CurvedAnimation class applies a non-linear curve to an animation, providing more control over the animation's timing."
    },
    {
      "question": "What is the purpose of the following code snippet?\n```dart\nAnimationController controller = AnimationController(\n  duration: const Duration(seconds: 2),\n  vsync: this\n);\nAnimation<double> animation = Tween<double>(\n  begin: 0.0,\n  end: 1.0\n).\nanimate(controller);\n```",
      "options": {
        "A": "It creates a delayed animation",
        "B": "It creates a repeating animation",
        "C": "It creates an animation with a duration of 2 seconds",
        "D": "It creates an animation with a delay of 2 seconds"
      },
      "answer": "C",
      "explanation": "The code snippet creates an AnimationController with a duration of 2 seconds and a Tween animation that interpolates between 0.0 and 1.0."
    },
    {
      "question": "What does the AnimatedBuilder widget do in the following code?\n```dart\nAnimatedBuilder(\n  animation: animation,\n  builder: (context, child) {\n    return Transform.scale(\n      scale: animation.value,\n      child: child,\n    );\n  },\n  child: FlutterLogo(),\n);\n```",
      "options": {
        "A": "It creates a scaling animation",
        "B": "It creates a fading animation",
        "C": "It creates a rotating animation",
        "D": "It creates a color-changing animation"
      },
      "answer": "A",
      "explanation": "The AnimatedBuilder widget creates a scaling animation using the Transform.scale widget and the animation's value."
    },
    {
      "question": "What could be a reason for an animation not starting in Flutter?",
      "options": {
        "A": "Incorrect animation duration",
        "B": "Animation controller not initialized",
        "C": "Animation listener not added",
        "D": "Incorrect animation curve"
      },
      "answer": "B",
      "explanation": "An animation may not start if the animation controller is not initialized properly."
    },
    {
      "question": "How can you debug an animation that is not running smoothly in Flutter?",
      "options": {
        "A": "Check the animation curve",
        "B": "Check the device's performance",
        "C": "Check for unnecessary rebuilds",
        "D": "All of the above"
      },
      "answer": "D",
      "explanation": "Debugging an animation involves checking the animation curve, device performance, and looking for unnecessary widget rebuilds that can affect performance."
    },
    {
      "question": "What package is commonly used for writing tests in Flutter?",
      "options": {
        "A": "flutter_test",
        "B": "flutter_testing",
        "C": "test_flutter",
        "D": "flutter_dev"
      },
      "answer": "A",
      "explanation": "The flutter_test package is commonly used for writing tests in Flutter."
    },
    {
      "question": "Which of the following is used to create a widget test in Flutter?",
      "options": {
        "A": "testWidgets",
        "B": "testWidget",
        "C": "widgetTest",
        "D": "unitTest"
      },
      "answer": "A",
      "explanation": "The testWidgets function is used to create a widget test in Flutter."
    },
    {
      "question": "What is the primary purpose of the pumpWidget method in widget testing?",
      "options": {
        "A": "To render a widget",
        "B": "To test widget properties",
        "C": "To simulate user interaction",
        "D": "To create mock data"
      },
      "answer": "A",
      "explanation": "The pumpWidget method is used to render a widget for testing purposes."
    },
    {
      "question": "How can you simulate a tap gesture in a Flutter widget test?",
      "options": {
        "A": "By using the pump method",
        "B": "By using the tap method",
        "C": "By using the tester.tap method",
        "D": "By using the simulateTap method"
      },
      "answer": "C",
      "explanation": "The tester.tap method is used to simulate a tap gesture in a Flutter widget test."
    },
    {
      "question": "What is the role of the expect function in Flutter tests?",
      "options": {
        "A": "To compare actual and expected results",
        "B": "To render the widget",
        "C": "To initialize the test environment",
        "D": "To create mock data"
      },
      "answer": "A",
      "explanation": "The expect function is used to compare actual and expected results in Flutter tests."
    },
    {
      "question": "What does the following code test?\n```dart\ntestWidgets('MyWidget has a title and message', (WidgetTester tester) async {\n  await tester.pumpWidget(MyWidget());\n  final titleFinder = find.text('Title');\n  final messageFinder = find.text('Message');\n  expect(titleFinder, findsOneWidget);\n  expect(messageFinder, findsOneWidget);\n});\n```",
      "options": {
        "A": "It tests the widget's layout",
        "B": "It tests the widget's interaction",
        "C": "It tests for the presence of text widgets",
        "D": "It tests for the widget's state"
      },
      "answer": "C",
      "explanation": "The code tests for the presence of text widgets with the specified titles and messages."
    },
    {
      "question": "How would you test a button tap that triggers a state change?\n```dart\ntestWidgets('Button tap increments counter', (WidgetTester tester) async {\n  await tester.pumpWidget(MyApp());\n  await tester.tap(find.byType(ElevatedButton));\n  await tester.pump();\n  expect(find.text('1'), findsOneWidget);\n});\n```",
      "options": {
        "A": "It tests the button's color",
        "B": "It tests the button's visibility",
        "C": "It tests the state change after button tap",
        "D": "It tests the button's size"
      },
      "answer": "C",
      "explanation": "The code tests the state change that occurs after the button tap by checking the updated text value."
    },
    {
      "question": "What could be a reason for a widget test failing unexpectedly?",
      "options": {
        "A": "Incorrect widget key",
        "B": "Missing dependencies",
        "C": "Incorrect test setup",
        "D": "All of the above"
      },
      "answer": "D",
      "explanation": "Widget tests can fail due to various reasons including incorrect widget keys, missing dependencies, or incorrect test setup."
    },
    {
      "question": "How can you debug a failing Flutter test that involves asynchronous operations?",
      "options": {
        "A": "Use print statements",
        "B": "Use debugPrint",
        "C": "Use expectAsync",
        "D": "Use await and async"
      },
      "answer": "D",
      "explanation": "Using await and async helps manage asynchronous operations correctly and can debug issues related to timing and order of execution in tests."
    },
    {
      "question": "What approach can you take to isolate and identify the cause of a test failure in Flutter?",
      "options": {
        "A": "Remove all expect statements",
        "B": "Test the app manually",
        "C": "Run the test in verbose mode",
        "D": "Break the test into smaller tests"
      },
      "answer": "D",
      "explanation": "Breaking the test into smaller tests can help isolate and identify the specific cause of the test failure by narrowing down the scope of each test."
    },
    {
      "question": "Which Flutter tool is used for debugging applications?",
      "options": {
        "A": "Flutter Doctor",
        "B": "Flutter Analyzer",
        "C": "Flutter Debugger",
        "D": "Flutter Inspector"
      },
      "answer": "D",
      "explanation": "The Flutter Inspector is a tool used for debugging Flutter applications, providing a visual representation of the widget tree and other debug information."
    },
    {
      "question": "What does the flutter analyze command do?",
      "options": {
        "A": "Compiles the code",
        "B": "Runs the application",
        "C": "Analyzes the code for issues",
        "D": "Deploys the application"
      },
      "answer": "C",
      "explanation": "The flutter analyze command analyzes the code for potential issues and warnings, helping maintain code quality."
    },
    {
      "question": "How does the FlutterError class help in error handling?",
      "options": {
        "A": "It logs errors to a file",
        "B": "It displays errors in the console",
        "C": "It provides custom error messages",
        "D": "It helps in exception tracking"
      },
      "answer": "C",
      "explanation": "The FlutterError class provides custom error messages and a structured way to handle errors within Flutter applications."
    },
    {
      "question": "What is the output of the following code if an exception is thrown?\n```dart\ntry {\n  throw Exception('Error');\n} catch (e) {\n  print('Caught: $e');\n}\n```",
      "options": {
        "A": "Uncaught error",
        "B": "Exception: Error",
        "C": "Caught: Exception: Error",
        "D": "Error thrown"
      },
      "answer": "C",
      "explanation": "The code catches the exception and prints \"Caught: Exception: Error\"."
    },
    {
      "question": "How would you handle an asynchronous error in Flutter?\n```dart\nFuture<void> fetchData() async {\n  try {\n    var data = await fetchFromApi();\n  } catch (e) {\n    print('Error: $e');\n  }\n}\n```",
      "options": {
        "A": "Using try-catch",
        "B": "Using Future.error",
        "C": "Using async-catch",
        "D": "Using then-catch"
      },
      "answer": "A",
      "explanation": "The try-catch block is used to handle asynchronous errors in Flutter by catching exceptions thrown during the execution of the Future."
    },
    {
      "question": "What is a common reason for a widget not updating in Flutter?",
      "options": {
        "A": "Incorrect state management",
        "B": "Syntax error",
        "C": "Missing dependency",
        "D": "Outdated Flutter version"
      },
      "answer": "A",
      "explanation": "A common reason for a widget not updating is incorrect state management, such as not calling setState() to trigger a rebuild."
    },
    {
      "question": "How can you debug a performance issue in Flutter applications?",
      "options": {
        "A": "Use Flutter Doctor",
        "B": "Use Flutter Analyzer",
        "C": "Use Flutter DevTools (Performance view)",
        "D": "Use Flutter Inspector"
      },
      "answer": "C",
      "explanation": "Flutter DevTools có Performance view (FPS, thời gian render mỗi frame), CPU Profiler và Memory để chẩn đoán lỗi hiệu năng. Nên chạy ở Profile mode để số liệu chính xác."
    },
    {
      "question": "What should you do if you encounter a StateError in your Flutter app?",
      "options": {
        "A": "Restart the app",
        "B": "Check the widget state lifecycle",
        "C": "Update the Flutter SDK",
        "D": "Rebuild the widget tree"
      },
      "answer": "B",
      "explanation": "A StateError often occurs due to issues in the widget state lifecycle, so checking and managing the state transitions properly is crucial."
    },
    {
      "question": "What is the purpose of using the RepaintBoundary widget in Flutter?",
      "options": {
        "A": "To prevent widget rebuilds",
        "B": "To isolate parts of the widget tree for performance optimization",
        "C": "To handle user input",
        "D": "To improve layout performance"
      },
      "answer": "B",
      "explanation": "The RepaintBoundary widget is used to isolate parts of the widget tree, preventing unnecessary repaints and improving performance."
    },
    {
      "question": "How does the const keyword help in optimizing Flutter performance?",
      "options": {
        "A": "It reduces widget size",
        "B": "It prevents widget rebuilds",
        "C": "It simplifies widget structure",
        "D": "It enhances animation performance"
      },
      "answer": "B",
      "explanation": "The const keyword helps prevent widget rebuilds by marking widgets as immutable, which can be reused without being rebuilt."
    },
    {
      "question": "What is the impact of using setState too frequently in Flutter?",
      "options": {
        "A": "Improves performance",
        "B": "Reduces performance",
        "C": "Has no effect",
        "D": "Increases battery usage"
      },
      "answer": "B",
      "explanation": "Using setState too frequently can reduce performance because it triggers multiple rebuilds of the widget tree, which can be resource-intensive."
    },
    {
      "question": "How can you optimize a list with a large number of items in Flutter?\n```dart\nListView.builder(\n  itemCount: 1000,\n  itemBuilder: (context, index) {\n    return ListTile(\n      title: Text('Item $index'),\n    );\n  },\n);\n```",
      "options": {
        "A": "Use ListView",
        "B": "Use ListView.builder",
        "C": "Use ListView.custom",
        "D": "Use ListView.separated"
      },
      "answer": "B",
      "explanation": "ListView.builder is optimized for lists with a large number of items because it builds items on demand, improving performance."
    },
    {
      "question": "How would you optimize a widget that builds complex layouts frequently?\n```dart\nclass MyWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return ComplexLayoutWidget();\n  }\n}\n```",
      "options": {
        "A": "Use StatefulWidget",
        "B": "Use StatelessWidget",
        "C": "Use Memoization",
        "D": "Use RepaintBoundary"
      },
      "answer": "D",
      "explanation": "Wrapping ComplexLayoutWidget in a RepaintBoundary helps optimize performance by isolating the widget and preventing unnecessary repaints."
    },
    {
      "question": "What tool can you use to profile performance in a Flutter application?",
      "options": {
        "A": "Flutter Doctor",
        "B": "Flutter Analyzer",
        "C": "Flutter DevTools",
        "D": "Flutter Inspector"
      },
      "answer": "C",
      "explanation": "Flutter DevTools là bộ công cụ chính thức để profile hiệu năng: Performance view, CPU Profiler, Memory. Inspector chỉ là một tab của DevTools dùng xem cây widget và layout."
    },
    {
      "question": "How can you identify widgets that are rebuilding unnecessarily in Flutter?",
      "options": {
        "A": "Use the debugPrint function",
        "B": "Use the shouldRebuild method",
        "C": "Use the Debug flags",
        "D": "Use the Widget rebuild profiler"
      },
      "answer": "D",
      "explanation": "The Widget rebuild profiler helps identify widgets that are rebuilding unnecessarily by showing the rebuild counts in the Flutter DevTools."
    },
    {
      "question": "What could be a reason for jank (stuttering) in a Flutter app animation?",
      "options": {
        "A": "Overdraw in the UI",
        "B": "Optimized layout",
        "C": "Efficient state management",
        "D": "Using stateless widgets"
      },
      "answer": "A",
      "explanation": "Overdraw, where the same pixel is painted multiple times per frame, can cause jank in animations. Reducing overdraw can help improve animation performance."
    },
    {
      "question": "What is the first step in preparing a Flutter app for release on the Google Play Store?",
      "options": {
        "A": "Enable ProGuard",
        "B": "Configure app signing",
        "C": "Change app version",
        "D": "Optimize images"
      },
      "answer": "B",
      "explanation": "Configuring app signing is a crucial first step in preparing a Flutter app for release on the Google Play Store."
    },
    {
      "question": "What file must be configured to set the app's version number and build number in Flutter?",
      "options": {
        "A": "pubspec.yaml",
        "B": "build.gradle",
        "C": "AndroidManifest.xml",
        "D": "MainActivity.java"
      },
      "answer": "A",
      "explanation": "The pubspec.yaml file is used to set the app's version number and build number in Flutter."
    },
    {
      "question": "Which tool is used to create a release build for iOS in Flutter?",
      "options": {
        "A": "flutter run",
        "B": "flutter build ios",
        "C": "flutter deploy",
        "D": "flutter release"
      },
      "answer": "B",
      "explanation": "The flutter build ios command is used to create a release build for iOS in Flutter."
    },
    {
      "question": "How do you create a signed APK for Android in Flutter?\n```bash\nflutter build apk --release --split-per-abi\n```",
      "options": {
        "A": "Using flutter run command",
        "B": "Using flutter build apk command",
        "C": "Using flutter deploy command",
        "D": "Using flutter release command"
      },
      "answer": "B",
      "explanation": "The flutter build apk --release --split-per-abi command is used to create a signed APK for Android in Flutter."
    },
    {
      "question": "What is the purpose of the following code in the build.gradle file?\n```groovy\nsigningConfigs {\n  release {\n    keyAlias 'my-key-alias'\n    keyPassword 'my-key-password'\n    storeFile file('my-key.jks')\n    storePassword 'my-store-password'\n  }\n}\n```",
      "options": {
        "A": "It configures ProGuard",
        "B": "It configures app signing",
        "C": "It configures versioning",
        "D": "It configures dependencies"
      },
      "answer": "B",
      "explanation": "This code configures app signing by providing the necessary information for the key alias, key password, store file, and store password in the build.gradle file."
    },
    {
      "question": "What could be a reason for a Flutter app crash only in release mode?",
      "options": {
        "A": "Debug mode configurations",
        "B": "Missing release configurations",
        "C": "Incorrect widget tree",
        "D": "Using const keywords"
      },
      "answer": "B",
      "explanation": "Missing or incorrect release configurations, such as missing ProGuard rules or incorrect signing configurations, can cause a Flutter app to crash only in release mode."
    },
    {
      "question": "How can you debug a Flutter app that works in debug mode but fails in release mode?",
      "options": {
        "A": "Check debug output",
        "B": "Check release logs",
        "C": "Check dependencies",
        "D": "Check widget tree"
      },
      "answer": "B",
      "explanation": "Checking the release logs can provide insights into issues that occur only in release mode, such as missing permissions or incorrect configurations."
    },
    {
      "question": "Which technique can help minimize the size of a Flutter app for deployment?",
      "options": {
        "A": "Enabling ProGuard",
        "B": "Using minification",
        "C": "Removing unused resources",
        "D": "Using compressed images"
      },
      "answer": "C",
      "explanation": "Removing unused resources helps reduce the size of a Flutter app by ensuring that only necessary assets and dependencies are included in the final build."
    }
  ]
};
