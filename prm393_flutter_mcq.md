What is the primary advantage of using Flutter in mobile app development?
A. To enable server-side rendering of applications
B. To provide a back-end framework for mobile apps
C. To facilitate the rapid development of cross-platform mobile applications with a single codebase
D. To enhance the security features of mobile applications
C (Flutter allows developers to use the same codebase for multiple platforms, significantly speeding up the development process and reducing costs.)

Who maintains Flutter?
A. Microsoft
B. Facebook
C. Google
D. Apple
C (Flutter is an open-source UI software development kit created and maintained by Google.)

What language is used to write Flutter apps?
A. Java
B. Kotlin
C. Swift
D. Dart
D (Flutter apps are written in the Dart programming language.)

Which of the following platforms is NOT supported by Flutter?
A. iOS
B. Android
C. Web
D. Nintendo Switch
D (Flutter supports iOS, Android, and web development, but it does not support Nintendo Switch development.)

How does Flutter achieve high performance in rendering?
A. Using WebView
B. Using a JavaScript engine
C. Using Skia for rendering
D. Using native device widgets
C (Flutter uses Skia, a high-performance 2D rendering engine, for rendering its UI, which helps achieve high performance.)

What is a common use of Flutter's hot reload feature?
A. To optimize app performance
B. To reduce the app size
C. To quickly view changes in the UI without restarting the app
D. To secure the app from vulnerabilities
C (Flutter's hot reload feature allows developers to instantly view changes in the UI without restarting the app, enhancing productivity.)

Which command is used to create a new Flutter project?
A. flutter run
B. flutter create
C. flutter build
D. flutter start
B (The flutter create command is used to create a new Flutter project.)

Which widget in Flutter is used to create a visual hierarchy of the UI that controls the user interface layout?
A. MaterialApp
B. Widget
C. Scaffold
D. Column
C (The Scaffold widget in Flutter provides a high-level structure for implementing the basic visual layout structure of the mobile app. It includes a number of slots for adding app bar, drawer, bottom navigation bar, floating action buttons, body, and so forth.)

Which IDE is commonly used for Flutter development?
A. Visual Studio
B. PyCharm
C. Eclipse
D. Android Studio
D (Android Studio, along with Visual Studio Code, is commonly used for Flutter development.)

What command installs Flutter on macOS?
A. flutter install
B. brew install flutter
C. apt-get install flutter
D. install flutter
B (The brew install flutter command is used to install Flutter on macOS.)

Which operating system does not support Flutter development?
A. Windows
B. macOS
C. Linux
D. MS-DOS
D (Flutter development is supported on Windows, macOS, and Linux but not on MS-DOS.)

What is the purpose of the Flutter Doctor command?
A. To build the app
B. To run unit tests
C. To check the environment setup
D. To deploy the app
C (The flutter doctor command checks the environment setup for Flutter development and provides information on missing dependencies.)

How do you update the Flutter SDK?
A. flutter upgrade
B. flutter update
C. flutter refresh
D. flutter reinstall
A (The flutter upgrade command is used to update the Flutter SDK.)

What is the first step in setting up Flutter on a new machine?
A. Installing the Flutter SDK
B. Creating a new project
C. Running flutter doctor
D. Configuring the IDE
A (The first step in setting up Flutter on a new machine is installing the Flutter SDK.)

What is the correct command to create a new Flutter project named my_app?
A. flutter new my_app
B. flutter init my_app
C. flutter create my_app
D. flutter start my_app
C (The flutter create my_app command is used to create a new Flutter project named my_app.)

Which file must be configured to use Firebase in a Flutter project?
A. index.html
B. main.dart
C. pubspec.yaml
D. settings.gradle
C (The pubspec.yaml file must be configured to include dependencies such as Firebase in a Flutter project.)

What command initializes a Flutter app in an existing directory?
A. flutter create --init
B. flutter start --init
C. flutter init
D. flutter create .
D (The flutter create . command initializes a Flutter app in the current directory.)

What might cause a Flutter project to fail to build after setup?
A. Incorrect project name
B. Missing dependencies
C. Using a dark theme
D. Incorrect Flutter version
B (A common reason for a Flutter project failing to build is missing dependencies that need to be specified in the pubspec.yaml file.)

If running flutter doctor shows issues, what is a likely first step to resolve them?
A. Reinstall Flutter
B. Run flutter clean
C. Restart the IDE
D. Follow the recommendations provided by flutter doctor
D (The flutter doctor command provides recommendations to resolve issues; following these recommendations is a common first step to resolving setup problems.)

Which of the following is a valid variable declaration in Dart?
A. var name = "John";
B. int number = 42;
C. String text = 'Hello';
D. All of the above
D (All of the given options are valid variable declarations in Dart.)

What is Dart primarily used for in Flutter?
A. Back-end development
B. Database management
C. User interface development
D. None of the above
C (Dart is primarily used for developing the user interface in Flutter.)

Which keyword is used to define a constant value in Dart?
A. constant
B. static
C. final
D. const
D (The const keyword is used to define a constant value in Dart.)

What type does the main function return in a Dart application?
A. void
B. int
C. String
D. dynamic
A (The main function in a Dart application returns void.)

Which of the following is NOT a built-in type in Dart?
A. int
B. float
C. String
D. bool
B (Dart does not have a built-in float type; instead, it uses double for floating-point numbers.)

What does the async keyword indicate in Dart?
A. A function is synchronous
B. A function returns an integer
C. A function is asynchronous
D. A function returns a string
C (The async keyword in Dart indicates that a function is asynchronous and may use the await keyword to wait for future results.)

Which Dart collection is used to store key-value pairs?
A. List
B. Set
C. Map
D. Queue
C (In Dart, the Map collection is used to store key-value pairs.)

What is the output of the following Dart code snippet?
```dart
void main() {
  List<int> numbers = [1, 2, 3];
  print(numbers[1]);
}
```
A. 0
B. 1
C. 2
D. 3
C (The code accesses the second element of the list numbers, which is 2.)

How do you declare a nullable variable of type int in Dart?
A. int? num;
B. int num?;
C. nullable int num;
D. int num = null;
A (In Dart, the int? type denotes a nullable integer variable.)

What is the correct way to handle a potential null value using null-aware operators in Dart?
```dart
int? a = null;
int b = a ?? 0;
print(b);
```
A. 0
B. null
C. Throws an error
D. undefined
A (The null-aware operator ?? provides a fallback value if a is null, so b is assigned 0.)

If a Dart program throws a NoSuchMethodError, what is a likely cause?
A. A method is missing a return type
B. A method is called on a null object
C. A method is missing parameters
D. A method is using the wrong return type
B (A NoSuchMethodError typically occurs when a method is called on an object that is null.)

How can you handle exceptions in Dart?
A. Using try and catch blocks
B. Using if-else statements
C. Using switch-case statements
D. Using break statements
A (Exceptions in Dart are handled using try and catch blocks.)

A Dart developer is experiencing unexpected behavior in their code. Which tool can they use to debug the issue?
A. dartfmt
B. dart analyze
C. dart doc
D. dart test
B (The dart analyze tool analyzes the Dart code for potential issues, helping to debug unexpected behavior.)

Which widget in Flutter is used to display a long list of items?
A. GridView
B. ListView
C. Column
D. Row
B (The ListView widget in Flutter is used to display a long list of items.)

What is the purpose of the Container widget in Flutter?
A. To organize the app's routes
B. To define a single child widget with padding, margin, and constraints
C. To create a scrollable list
D. To handle user input
B (The Container widget in Flutter is used to contain a single child widget and allows for adding padding, margin, and other constraints.)

Which widget is used for creating a scrollable list of items in a single column in Flutter?
A. GridView
B. ListView
C. Stack
D. Row
B (The ListView widget is used for creating a scrollable list of items in a single column.)

What does the Expanded widget do in a Row or Column?
A. It collapses the child widget
B. It makes the child widget invisible
C. It fills the available space in the parent
D. It aligns the child widget to the left
C (The Expanded widget expands its child to fill the available space in the parent Row or Column.)

Which widget would you use to create a fixed-size box in Flutter?
A. Container
B. SizedBox
C. Flexible
D. Wrap
B (The SizedBox widget is used to create a fixed-size box in Flutter.)

Which widget can be used to overlay widgets on top of each other?
A. Column
B. Stack
C. Row
D. ListView
B (The Stack widget allows you to overlay widgets on top of each other.)

What does the following code snippet do?
```dart
Container(
  padding: EdgeInsets.all(16.0),
  child: Text("Hello World"),
)
```
A. Adds a margin around the text
B. Adds padding around the text
C. Centers the text
D. Makes the text bold
B (The Container widget adds padding around its child widget, in this case, the Text widget.)

How would you create a circular avatar in Flutter?
```dart
CircleAvatar(
  radius: 50,
  backgroundImage: NetworkImage('https://example.com/avatar.jpg'),
)
```
A. Using CircleAvatar widget
B. Using Container widget
C. Using ClipOval widget
D. Using Stack widget
A (The CircleAvatar widget is specifically used to create circular avatars in Flutter.)

What is the result of the following Flutter code?
```dart
Column(
  children: [
    Text("Hello"),
    Text("World"),
  ],
)
```
A. Displays "Hello" and "World" in a row
B. Displays "Hello" and "World" in a column
C. Displays "Hello" and "World" with padding
D. Throws an error
B (The Column widget arranges its children vertically, so "Hello" and "World" will be displayed in a column.)

What does the InkWell widget do in Flutter?
```dart
InkWell(
  onTap: () {
    print("Tapped");
  },
  child: Container(
    padding: EdgeInsets.all(16.0),
    child: Text("Tap Me"),
  ),
)
```
A. Adds padding around the text
B. Displays a clickable area
C. Makes the text bold
D. Changes the background color
B (The InkWell widget in Flutter is used to create a clickable area, similar to a button, and it handles touch events.)

If a Text widget is not displaying correctly inside a Column, what could be a possible reason?
A. Incorrect text alignment
B. The Column widget does not support Text widgets
C. Text widget needs to be wrapped in an Expanded widget
D. Lack of padding
C (Text bị tràn (overflow) trong Column thường được xử lý bằng cách bọc nó trong Expanded hoặc Flexible.)

A developer is using a Row widget, but its children are not evenly spaced. What could be the solution?
A. Use MainAxisAlignment.spaceBetween
B. Wrap children in Container widgets
C. Use Column instead of Row
D. Increase the width of the parent widget
A (Using MainAxisAlignment.spaceBetween in the Row widget will evenly space out its children.)

Which layout widget allows you to arrange its children in a vertical column?
A. Row
B. Column
C. Stack
D. GridView
B (The Column widget arranges its children in a vertical column.)

Which widget is used to create a grid-based layout in Flutter?
A. ListView
B. Column
C. GridView
D. Stack
C (The GridView widget is used to create a grid-based layout in Flutter.)

What does the Padding widget do in Flutter?
A. Adds margin
B. Adds padding
C. Sets background color
D. Sets border
B (The Padding widget in Flutter adds padding around its child widget.)

Which widget lets you make a single child that is too large to fit on screen scrollable (vertical by default, or horizontal via scrollDirection)?
A. SingleChildScrollView
B. CustomScrollView
C. Scrollable
D. ScrollView
A (SingleChildScrollView bọc MỘT widget con quá lớn để cuộn được; hướng cuộn đặt bằng scrollDirection. CustomScrollView dùng cho nhiều Sliver, còn Scrollable và ScrollView là lớp nền tảng cấp thấp/abstract.)

How do you create a flexible layout in Flutter?
A. Using Column widget
B. Using Row widget
C. Using Flexible widget
D. Using Stack widget
C (The Flexible widget allows a child of a Row, Column, or Flex to expand and fill the available space.)

What is the role of the Wrap widget in Flutter?
A. To arrange widgets in a horizontal row
B. To arrange widgets in a vertical column
C. To arrange widgets in a horizontal or vertical layout with wrapping
D. To arrange widgets in a stack
C (The Wrap widget arranges its children in a horizontal or vertical layout and wraps them to the next line when there is not enough space.)

What is the result of the following Flutter code?
```dart
Row(
  children: [
    Text("Hello"),
    Text("World"),
  ],
)
```
A. Displays "Hello" and "World" in a column
B. Displays "Hello" and "World" in a row
C. Displays "Hello" and "World" with padding
D. Throws an error
B (The Row widget arranges its children horizontally in a row.)

What does the Expanded widget do in the following code?
```dart
Row(
  children: [
    Expanded(child: Text("Hello")),
    Text("World"),
  ],
)
```
A. It collapses the child widget
B. It makes the child widget invisible
C. It expands the child to fill the available space
D. It aligns the child widget to the left
C (The Expanded widget expands its child to fill the available space within the Row or Column.)

What is the purpose of the Align widget in Flutter?
```dart
Align(
  alignment: Alignment.topRight,
  child: Text("Hello"),
)
```
A. Centers the child widget
B. Aligns the child widget within its parent
C. Adds padding to the child widget
D. Adds a border to the child widget
B (The Align widget aligns its child widget within its parent according to the specified alignment.)

If a widget is overflowing in a Column, what could be a possible solution?
A. Remove the widget
B. Wrap the widget in an Expanded widget
C. Use a Row instead of Column
D. Change the widget's color
B (Wrapping the widget in an Expanded widget or using a SingleChildScrollView can help prevent overflow issues.)

The children of a Row are wider than the screen and Flutter shows an overflow error (yellow/black stripes). What is the best solution?
A. Increase the height of the parent widget
B. Wrap the children in Expanded or Flexible widgets
C. Replace the Row with a Stack
D. Give every child a larger fixed width
B (Lỗi overflow trong Row do tổng chiều rộng các con vượt quá không gian cho phép. Bọc con trong Expanded/Flexible để chúng chia lại không gian còn lại thay vì tràn ra ngoài.)

Which widget in Flutter is used to manage state locally?
A. StatefulWidget
B. StatelessWidget
C. InheritedWidget
D. Provider
A (The StatefulWidget is used to manage state locally in Flutter.)

What method is used to update the state of a StatefulWidget?
A. setState
B. updateState
C. refreshState
D. changeState
A (The setState method is used to update the state of a StatefulWidget and trigger a rebuild.)

Which state management approach is built on top of InheritedWidget?
A. Redux
B. Provider
C. Bloc
D. Riverpod
B (The Provider state management approach is built on top of InheritedWidget.)

In the context of state management, what does the term "lifting state up" refer to?
A. Moving state to a higher widget in the tree
B. Removing state from the widget tree
C. Copying state to a lower widget
D. Isolating state within a widget
A (Lifting state up refers to moving state to a higher widget in the tree so that it can be shared among multiple child widgets.)

What is the primary benefit of using the Bloc pattern for state management?
A. Simplifies UI design
B. Enhances app performance
C. Enforces a unidirectional data flow
D. Reduces code complexity
C (The Bloc pattern enforces a unidirectional data flow, making the state management more predictable and easier to debug.)

How does the ChangeNotifier class in Flutter work for state management?
A. It re-renders the entire widget tree
B. It notifies listeners when a change occurs
C. It prevents state changes
D. It provides a local state
B (The ChangeNotifier class allows state changes to notify listeners, making it a useful tool for state management in Flutter.)

Which of the following is a disadvantage of using setState for state management?
A. It is difficult to implement
B. It is not scalable for large applications
C. It doesn't support state changes
D. It doesn't work with StatelessWidgets
B (Using setState is not scalable for large applications because it can lead to code that is hard to maintain and test.)

What is the output of the following code?
```dart
class MyWidget extends StatefulWidget {
  @override
  _MyWidgetState createState() => _MyWidgetState();
}
class _MyWidgetState extends State<MyWidget> {
  int counter = 0;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('$counter'),
        ElevatedButton(
          onPressed: () {
            setState(() {
              counter++;
            });
          },
          child: Text('Increment'),
        ),
      ],
    );
  }
}
```
A. 0
B. 1
C. Counter increments by 1 on button press
D. Counter decrements by 1 on button press
C (The setState method increments the counter by 1 each time the button is pressed, updating the UI with the new value.)

How would you implement a Provider for state management in Flutter?
A. Using a StatefulWidget
B. Using a StatelessWidget
C. Using an InheritedWidget
D. Using a ChangeNotifierProvider
D (The ChangeNotifierProvider is used to implement a Provider for state management in Flutter.)

What does the following code snippet demonstrate?
```dart
class Counter with ChangeNotifier {
  int _count = 0;
  int get count => _count;
  void increment() {
    _count++;
    notifyListeners();
  }
}
```
A. Basic state management
B. Advanced state management
C. State management using ChangeNotifier
D. State management using Bloc
C (The code snippet demonstrates state management using ChangeNotifier, where notifyListeners is called to update listeners when the state changes.)

What is a common issue when using setState that prevents the UI from updating?
A. Not calling setState inside the build method
B. Calling setState inside the build method
C. Not calling setState at all
D. Calling setState with no state change
C (A common issue is not calling setState at all, which prevents the UI from updating when the state changes.)

How would you debug a state management issue where the state is not updating as expected?
A. Rebuild the app
B. Use print statements to trace state changes
C. Ignore the issue
D. Remove the stateful widget
B (Using print statements to trace state changes can help identify where the issue is occurring and why the state is not updating as expected.)

Why might a ChangeNotifier not notify its listeners even when notifyListeners is called?
A. The ChangeNotifier is not initialized
B. Listeners are not registered properly
C. There is no state change
D. The app is in debug mode
B (If listeners are not registered properly with the ChangeNotifier, they will not be notified even when notifyListeners is called.)

Which widget is used to define routes in a Flutter application?
A. Navigator
B. Routes
C. MaterialApp
D. Scaffold
C (The MaterialApp widget is used to define routes in a Flutter application.)

What does the Navigator.push method do in Flutter?
A. Removes the current route
B. Adds a new route to the stack
C. Replaces the current route
D. Closes the current route
B (The Navigator.push method adds a new route to the navigation stack, allowing navigation to a new screen.)

How can you remove the current route in Flutter?
A. Navigator.pop
B. Navigator.push
C. Navigator.remove
D. Navigator.replace
A (The Navigator.pop method removes the current route from the navigation stack.)

What is the purpose of the onGenerateRoute property in the MaterialApp widget?
A. To handle route errors
B. To define a default route
C. To dynamically generate routes
D. To set the initial route
C (The onGenerateRoute property is used to dynamically generate routes based on the settings and arguments provided.)

Which navigation method would you use to replace the current route with a new route?
A. Navigator.push
B. Navigator.pop
C. Navigator.pushReplacement
D. Navigator.add
C (The Navigator.pushReplacement method replaces the current route with a new route.)

What is the result of the following code?
```dart
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => NewScreen()),
);
```
A. Navigates to NewScreen
B. Replaces current screen with NewScreen
C. Removes the current screen
D. Closes the app
A (The code navigates to NewScreen by pushing a new route onto the navigation stack.)

How would you navigate back to the previous screen in Flutter?
```dart
Navigator.of(context).???;
```
A. push
B. pop
C. replace
D. pushReplacement
B (The Navigator.of(context).pop method is used to navigate back to the previous screen by popping the current route off the stack.)

What does the following code do?
```dart
Navigator.pushAndRemoveUntil(
  context,
  MaterialPageRoute(builder: (context) => HomeScreen()),
  (Route<dynamic> route) => false,
);
```
A. Adds a route to the stack
B. Removes all previous routes and navigates to HomeScreen
C. Replaces the current route
D. Navigates back to the initial route
B (The Navigator.pushAndRemoveUntil method removes all previous routes from the stack and navigates to HomeScreen.)

What could be a reason for a navigation error stating "No MaterialLocalizations found"?
A. Missing Navigator widget
B. Missing MaterialApp widget
C. Incorrect route name
D. Missing Scaffold widget
B (The error "No MaterialLocalizations found" typically occurs when the MaterialApp widget is missing, as it provides the necessary localizations for material design.)

How can you debug a routing issue where a screen is not found in Flutter?
A. Check for missing Navigator
B. Check for missing routes in MaterialApp
C. Check for missing Scaffold
D. Check for missing context
B (Ensuring that all necessary routes are defined in the MaterialApp widget can help debug issues where a screen is not found.)

What could cause a "Route not found" error even if the route is defined in the MaterialApp?
A. Incorrect route name
B. Incorrect widget used
C. Navigator not initialized
D. Context is null
A (A "Route not found" error can occur if the route name provided in the Navigator methods does not match any of the route names defined in the MaterialApp widget.)

Which widget is commonly used to handle form input in Flutter?
A. TextField
B. Form
C. InputForm
D. FormField
A (The TextField widget is commonly used to handle form input in Flutter.)

How do you validate a form in Flutter?
A. Using a Validator object
B. Using the validate method on the form key
C. Using the checkValidity method
D. Using the validate attribute
B (The validate method on the form key is used to validate a form in Flutter.)

What is the purpose of a GlobalKey in a form?
A. To uniquely identify a form and access its state
B. To style the form
C. To handle user input
D. To create a new form
A (A GlobalKey is used to uniquely identify a form and access its state, which is essential for validation and other operations.)

How can you reset the state of a form in Flutter?
A. By setting the form fields to null
B. Using the reset method on the form key
C. Rebuilding the form widget
D. Using the clear method on the form key
B (The reset method on the form key is used to reset the state of a form in Flutter.)

What is the output of the following code?
```dart
TextField(
  controller: TextEditingController(text: 'Hello'),
)
```
A. Displays an empty field
B. Displays 'Hello' in the text field
C. Throws an error
D. Displays a password input
B (The TextEditingController with initial text 'Hello' will display 'Hello' in the text field.)

How do you capture user input from a TextField in Flutter?
```dart
TextField(
  onChanged: (text) {
    // Capture input here
  },
)
```
A. Using the onSubmitted callback
B. Using the onChanged callback
C. Using a Validator
D. Using a GlobalKey
B (The onChanged callback is used to capture user input from a TextField as the user types.)

How would you create a form with multiple fields and a submit button in Flutter?
```dart
Form(
  key: _formKey,
  child: Column(
    children: [
      TextFormField(),
      TextFormField(),
      ElevatedButton(
        onPressed: () {
          if (_formKey.currentState.validate()) {
            // Process data.
          }
        },
        child: Text('Submit'),
      ),
    ],
  ),
)
```
A. Using FormField widget
B. Using Column widget
C. Using ListView widget
D. Using Row widget
B (The Column widget is used to arrange multiple form fields and a submit button vertically in a Form.)

What does the following code snippet demonstrate?
```dart
FormField(
  builder: (FormFieldState<String> state) {
    return Column(
      children: [
        TextField(
          onChanged: (text) {
            state.didChange(text);
          },
        ),
        Text(
          state.errorText ?? '',
          style: TextStyle(color: Colors.red),
        ),
      ],
    );
  },
)
```
A. Basic form handling
B. Advanced form handling
C. Custom form field with validation
D. Form with multiple fields
C (The code snippet demonstrates creating a custom form field with validation by using FormField and managing its state.)

What could be a reason for a TextField not updating its value correctly?
A. Incorrect onChanged callback
B. Missing controller
C. Not using a form key
D. Missing validation logic
B (A common reason for a TextField not updating its value correctly is the absence of a controller.)

How can you debug an issue where the form is not validating as expected?
A. Ignore the issue
B. Check the form key and validators
C. Rebuild the form
D. Remove the validators
B (Checking the form key and validators helps ensure that the form validation logic is implemented correctly and is functioning as expected.)

Which package is commonly used for making HTTP requests in Flutter?
A. http
B. requests
C. axios
D. fetch
A (The http package is commonly used for making HTTP requests in Flutter.)

What method is used to send a GET request in the http package?
A. http.send
B. http.get
C. http.post
D. http.fetch
B (The http.get method is used to send a GET request in the http package.)

What is the purpose of the async and await keywords in Dart?
A. To handle synchronous operations
B. To handle asynchronous operations
C. To define variables
D. To create classes
B (The async and await keywords are used to handle asynchronous operations in Dart.)

How do you parse a JSON response in Flutter?
A. Using the jsonDecode function
B. Using the jsonEncode function
C. Using the JSON.parse function
D. Using the parse function
A (The jsonDecode function from the dart:convert library is used to parse a JSON response in Flutter.)

What is the output of the following code?
```dart
var url = 'https://api.example.com/data';
var response = await http.get(url);
print(response.body);
```
A. Prints the response body
B. Prints the response headers
C. Prints the response status code
D. Throws an error
A (The code sends a GET request to the specified URL and prints the response body.)

How would you handle an HTTP POST request in Flutter?
```dart
var url = 'https://api.example.com/data';
var response = await http.post(url, body: {'key': 'value'});
```
A. Using the http.get method
B. Using the http.post method
C. Using the http.send method
D. Using the http.fetch method
B (The http.post method is used to send an HTTP POST request in Flutter.)

How do you handle errors when making an HTTP request in Flutter?
```dart
try {
  var response = await http.get(url);
  if (response.statusCode == 200) {
    print('Success');
  } else {
    print('Error: ${response.statusCode}');
  }
} catch (e) {
  print('Exception: $e');
}
```
A. Ignore errors
B. Check response status code and catch exceptions
C. Only check response body
D. Use a different package
B (The code demonstrates how to handle errors by checking the response status code and catching exceptions using a try-catch block.)

What could be a reason for a network request failing in Flutter?
A. Incorrect URL
B. Valid URL
C. Strong internet connection
D. Valid API key
A (An incorrect URL is a common reason for a network request to fail in Flutter.)

How can you debug a network issue where the response is not as expected in Flutter?
A. Check the request URL
B. Check the response headers
C. Check the request and response payloads
D. All of the above
D (Debugging a network issue involves checking the request URL, response headers, and the request and response payloads to identify the cause of the issue.)

Which package is commonly used for SQLite database integration in Flutter?
A. sqflite
B. moor
C. firebase
D. realm
A (The sqflite package is commonly used for SQLite database integration in Flutter.)

What method is used to open a database connection in the sqflite package?
A. openDatabase
B. connectDatabase
C. initDatabase
D. startDatabase
A (The openDatabase method is used to open a database connection in the sqflite package.)

How do you define a table schema in SQLite for Flutter?
A. Using SQL commands
B. Using Dart classes
C. Using JSON
D. Using XML
A (A table schema in SQLite for Flutter is defined using SQL commands.)

Which of the following is a benefit of using an ORM (Object-Relational Mapping) like moor?
A. Direct SQL queries
B. Automatic schema updates
C. Manual data handling
D. Low-level database access
B (An ORM like moor provides benefits such as automatic schema updates, making database interactions easier.)

What is the output of the following code?
```dart
Database db = await openDatabase('my_db.db');
await db.insert('my_table', {'name': 'John', 'age': 30});
```
A. Inserts data into 'my_table'
B. Deletes data from 'my_table'
C. Updates data in 'my_table'
D. Creates 'my_table'
A (The code opens a database and inserts data into the table 'my_table'.)

How would you query all rows from a table named 'users' in SQLite using sqflite?
```dart
Database db = await openDatabase('my_db.db');
List<Map<String, dynamic>> maps = await db.query('users');
```
A. Using db.select method
B. Using db.fetch method
C. Using db.query method
D. Using db.get method
C (The db.query method is used to query all rows from a table named 'users' in SQLite using sqflite.)

How do you update a specific row in a table using sqflite?
```dart
await db.update(
  'users',
  {'name': 'John'},
  where: 'id = ?',
  whereArgs: [1]
);
```
A. Using db.modify method
B. Using db.update method
C. Using db.edit method
D. Using db.change method
B (The db.update method is used to update a specific row in a table using sqflite, with the where clause specifying the row to update.)

What could be a reason for a database operation failing in Flutter?
A. Incorrect table name
B. Valid query
C. Proper database connection
D. Correct SQL syntax
A (An incorrect table name is a common reason for a database operation to fail in Flutter.)

What could be a reason for a database operation failing in Flutter even if the query is correct?
A. Incorrect table name
B. Database not opened
C. Incorrect SQL syntax
D. Concurrency issues
B (A common reason for a database operation to fail, even if the query is correct, is that the database was not opened properly.)

What class in Flutter is used to create basic animations?
A. AnimationController
B. Animation
C. Tween
D. AnimatedBuilder
A (The AnimationController class is used to create and control animations in Flutter.)

Which widget in Flutter is used to animate the transition between two widgets?
A. AnimatedBuilder
B. AnimatedContainer
C. AnimatedSwitcher
D. AnimatedOpacity
C (The AnimatedSwitcher widget animates the transition between two widgets in Flutter.)

How does the Tween class work in Flutter animations?
A. It defines the start and end values of an animation
B. It controls the animation duration
C. It defines the animation curve
D. It handles user input
A (The Tween class in Flutter defines the start and end values for an animation and interpolates between them.)

What is the role of the TickerProvider in Flutter animations?
A. It provides a way to create animations
B. It provides a way to sync animations to the screen refresh rate
C. It provides a way to handle user input
D. It provides a way to control animation duration
B (The TickerProvider is used to create Ticker objects, which sync animations to the screen refresh rate.)

What does the CurvedAnimation class do in Flutter?
A. It handles the animation duration
B. It defines the start and end values
C. It applies a non-linear curve to an animation
D. It creates a linear animation
C (The CurvedAnimation class applies a non-linear curve to an animation, providing more control over the animation's timing.)

What is the purpose of the following code snippet?
```dart
AnimationController controller = AnimationController(
  duration: const Duration(seconds: 2),
  vsync: this
);
Animation<double> animation = Tween<double>(
  begin: 0.0,
  end: 1.0
).
animate(controller);
```
A. It creates a delayed animation
B. It creates a repeating animation
C. It creates an animation with a duration of 2 seconds
D. It creates an animation with a delay of 2 seconds
C (The code snippet creates an AnimationController with a duration of 2 seconds and a Tween animation that interpolates between 0.0 and 1.0.)

What does the AnimatedBuilder widget do in the following code?
```dart
AnimatedBuilder(
  animation: animation,
  builder: (context, child) {
    return Transform.scale(
      scale: animation.value,
      child: child,
    );
  },
  child: FlutterLogo(),
);
```
A. It creates a scaling animation
B. It creates a fading animation
C. It creates a rotating animation
D. It creates a color-changing animation
A (The AnimatedBuilder widget creates a scaling animation using the Transform.scale widget and the animation's value.)

What could be a reason for an animation not starting in Flutter?
A. Incorrect animation duration
B. Animation controller not initialized
C. Animation listener not added
D. Incorrect animation curve
B (An animation may not start if the animation controller is not initialized properly.)

How can you debug an animation that is not running smoothly in Flutter?
A. Check the animation curve
B. Check the device's performance
C. Check for unnecessary rebuilds
D. All of the above
D (Debugging an animation involves checking the animation curve, device performance, and looking for unnecessary widget rebuilds that can affect performance.)

What package is commonly used for writing tests in Flutter?
A. flutter_test
B. flutter_testing
C. test_flutter
D. flutter_dev
A (The flutter_test package is commonly used for writing tests in Flutter.)

Which of the following is used to create a widget test in Flutter?
A. testWidgets
B. testWidget
C. widgetTest
D. unitTest
A (The testWidgets function is used to create a widget test in Flutter.)

What is the primary purpose of the pumpWidget method in widget testing?
A. To render a widget
B. To test widget properties
C. To simulate user interaction
D. To create mock data
A (The pumpWidget method is used to render a widget for testing purposes.)

How can you simulate a tap gesture in a Flutter widget test?
A. By using the pump method
B. By using the tap method
C. By using the tester.tap method
D. By using the simulateTap method
C (The tester.tap method is used to simulate a tap gesture in a Flutter widget test.)

What is the role of the expect function in Flutter tests?
A. To compare actual and expected results
B. To render the widget
C. To initialize the test environment
D. To create mock data
A (The expect function is used to compare actual and expected results in Flutter tests.)

What does the following code test?
```dart
testWidgets('MyWidget has a title and message', (WidgetTester tester) async {
  await tester.pumpWidget(MyWidget());
  final titleFinder = find.text('Title');
  final messageFinder = find.text('Message');
  expect(titleFinder, findsOneWidget);
  expect(messageFinder, findsOneWidget);
});
```
A. It tests the widget's layout
B. It tests the widget's interaction
C. It tests for the presence of text widgets
D. It tests for the widget's state
C (The code tests for the presence of text widgets with the specified titles and messages.)

How would you test a button tap that triggers a state change?
```dart
testWidgets('Button tap increments counter', (WidgetTester tester) async {
  await tester.pumpWidget(MyApp());
  await tester.tap(find.byType(ElevatedButton));
  await tester.pump();
  expect(find.text('1'), findsOneWidget);
});
```
A. It tests the button's color
B. It tests the button's visibility
C. It tests the state change after button tap
D. It tests the button's size
C (The code tests the state change that occurs after the button tap by checking the updated text value.)

What could be a reason for a widget test failing unexpectedly?
A. Incorrect widget key
B. Missing dependencies
C. Incorrect test setup
D. All of the above
D (Widget tests can fail due to various reasons including incorrect widget keys, missing dependencies, or incorrect test setup.)

How can you debug a failing Flutter test that involves asynchronous operations?
A. Use print statements
B. Use debugPrint
C. Use expectAsync
D. Use await and async
D (Using await and async helps manage asynchronous operations correctly and can debug issues related to timing and order of execution in tests.)

What approach can you take to isolate and identify the cause of a test failure in Flutter?
A. Remove all expect statements
B. Test the app manually
C. Run the test in verbose mode
D. Break the test into smaller tests
D (Breaking the test into smaller tests can help isolate and identify the specific cause of the test failure by narrowing down the scope of each test.)

Which Flutter tool is used for debugging applications?
A. Flutter Doctor
B. Flutter Analyzer
C. Flutter Debugger
D. Flutter Inspector
D (The Flutter Inspector is a tool used for debugging Flutter applications, providing a visual representation of the widget tree and other debug information.)

What does the flutter analyze command do?
A. Compiles the code
B. Runs the application
C. Analyzes the code for issues
D. Deploys the application
C (The flutter analyze command analyzes the code for potential issues and warnings, helping maintain code quality.)

How does the FlutterError class help in error handling?
A. It logs errors to a file
B. It displays errors in the console
C. It provides custom error messages
D. It helps in exception tracking
C (The FlutterError class provides custom error messages and a structured way to handle errors within Flutter applications.)

What is the output of the following code if an exception is thrown?
```dart
try {
  throw Exception('Error');
} catch (e) {
  print('Caught: $e');
}
```
A. Uncaught error
B. Exception: Error
C. Caught: Exception: Error
D. Error thrown
C (The code catches the exception and prints "Caught: Exception: Error".)

How would you handle an asynchronous error in Flutter?
```dart
Future<void> fetchData() async {
  try {
    var data = await fetchFromApi();
  } catch (e) {
    print('Error: $e');
  }
}
```
A. Using try-catch
B. Using Future.error
C. Using async-catch
D. Using then-catch
A (The try-catch block is used to handle asynchronous errors in Flutter by catching exceptions thrown during the execution of the Future.)

What is a common reason for a widget not updating in Flutter?
A. Incorrect state management
B. Syntax error
C. Missing dependency
D. Outdated Flutter version
A (A common reason for a widget not updating is incorrect state management, such as not calling setState() to trigger a rebuild.)

How can you debug a performance issue in Flutter applications?
A. Use Flutter Doctor
B. Use Flutter Analyzer
C. Use Flutter DevTools (Performance view)
D. Use Flutter Inspector
C (Flutter DevTools có Performance view (FPS, thời gian render mỗi frame), CPU Profiler và Memory để chẩn đoán lỗi hiệu năng. Nên chạy ở Profile mode để số liệu chính xác.)

What should you do if you encounter a StateError in your Flutter app?
A. Restart the app
B. Check the widget state lifecycle
C. Update the Flutter SDK
D. Rebuild the widget tree
B (A StateError often occurs due to issues in the widget state lifecycle, so checking and managing the state transitions properly is crucial.)

What is the purpose of using the RepaintBoundary widget in Flutter?
A. To prevent widget rebuilds
B. To isolate parts of the widget tree for performance optimization
C. To handle user input
D. To improve layout performance
B (The RepaintBoundary widget is used to isolate parts of the widget tree, preventing unnecessary repaints and improving performance.)

How does the const keyword help in optimizing Flutter performance?
A. It reduces widget size
B. It prevents widget rebuilds
C. It simplifies widget structure
D. It enhances animation performance
B (The const keyword helps prevent widget rebuilds by marking widgets as immutable, which can be reused without being rebuilt.)

What is the impact of using setState too frequently in Flutter?
A. Improves performance
B. Reduces performance
C. Has no effect
D. Increases battery usage
B (Using setState too frequently can reduce performance because it triggers multiple rebuilds of the widget tree, which can be resource-intensive.)

How can you optimize a list with a large number of items in Flutter?
```dart
ListView.builder(
  itemCount: 1000,
  itemBuilder: (context, index) {
    return ListTile(
      title: Text('Item $index'),
    );
  },
);
```
A. Use ListView
B. Use ListView.builder
C. Use ListView.custom
D. Use ListView.separated
B (ListView.builder is optimized for lists with a large number of items because it builds items on demand, improving performance.)

How would you optimize a widget that builds complex layouts frequently?
```dart
class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ComplexLayoutWidget();
  }
}
```
A. Use StatefulWidget
B. Use StatelessWidget
C. Use Memoization
D. Use RepaintBoundary
D (Wrapping ComplexLayoutWidget in a RepaintBoundary helps optimize performance by isolating the widget and preventing unnecessary repaints.)

What tool can you use to profile performance in a Flutter application?
A. Flutter Doctor
B. Flutter Analyzer
C. Flutter DevTools
D. Flutter Inspector
C (Flutter DevTools là bộ công cụ chính thức để profile hiệu năng: Performance view, CPU Profiler, Memory. Inspector chỉ là một tab của DevTools dùng xem cây widget và layout.)

How can you identify widgets that are rebuilding unnecessarily in Flutter?
A. Use the debugPrint function
B. Use the shouldRebuild method
C. Use the Debug flags
D. Use the Widget rebuild profiler
D (The Widget rebuild profiler helps identify widgets that are rebuilding unnecessarily by showing the rebuild counts in the Flutter DevTools.)

What could be a reason for jank (stuttering) in a Flutter app animation?
A. Overdraw in the UI
B. Optimized layout
C. Efficient state management
D. Using stateless widgets
A (Overdraw, where the same pixel is painted multiple times per frame, can cause jank in animations. Reducing overdraw can help improve animation performance.)

What is the first step in preparing a Flutter app for release on the Google Play Store?
A. Enable ProGuard
B. Configure app signing
C. Change app version
D. Optimize images
B (Configuring app signing is a crucial first step in preparing a Flutter app for release on the Google Play Store.)

What file must be configured to set the app's version number and build number in Flutter?
A. pubspec.yaml
B. build.gradle
C. AndroidManifest.xml
D. MainActivity.java
A (The pubspec.yaml file is used to set the app's version number and build number in Flutter.)

Which tool is used to create a release build for iOS in Flutter?
A. flutter run
B. flutter build ios
C. flutter deploy
D. flutter release
B (The flutter build ios command is used to create a release build for iOS in Flutter.)

How do you create a signed APK for Android in Flutter?
```bash
flutter build apk --release --split-per-abi
```
A. Using flutter run command
B. Using flutter build apk command
C. Using flutter deploy command
D. Using flutter release command
B (The flutter build apk --release --split-per-abi command is used to create a signed APK for Android in Flutter.)

What is the purpose of the following code in the build.gradle file?
```groovy
signingConfigs {
  release {
    keyAlias 'my-key-alias'
    keyPassword 'my-key-password'
    storeFile file('my-key.jks')
    storePassword 'my-store-password'
  }
}
```
A. It configures ProGuard
B. It configures app signing
C. It configures versioning
D. It configures dependencies
B (This code configures app signing by providing the necessary information for the key alias, key password, store file, and store password in the build.gradle file.)

What could be a reason for a Flutter app crash only in release mode?
A. Debug mode configurations
B. Missing release configurations
C. Incorrect widget tree
D. Using const keywords
B (Missing or incorrect release configurations, such as missing ProGuard rules or incorrect signing configurations, can cause a Flutter app to crash only in release mode.)

How can you debug a Flutter app that works in debug mode but fails in release mode?
A. Check debug output
B. Check release logs
C. Check dependencies
D. Check widget tree
B (Checking the release logs can provide insights into issues that occur only in release mode, such as missing permissions or incorrect configurations.)

Which technique can help minimize the size of a Flutter app for deployment?
A. Enabling ProGuard
B. Using minification
C. Removing unused resources
D. Using compressed images
C (Removing unused resources helps reduce the size of a Flutter app by ensuring that only necessary assets and dependencies are included in the final build.)
