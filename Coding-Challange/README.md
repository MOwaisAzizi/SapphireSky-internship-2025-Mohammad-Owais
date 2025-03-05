**_OOP AND DEBUGIN EXPLATORY QUESTIONS_**

1. Four Pillars of Object-Oriented Programming (OOP)
   _ANSWER_
   The four main principles of OOP are:
   Encapsulation: Bundling data (variables) and methods (functions) that operate on the data into a single unit (class) and restricting direct access to some details.

Abstraction: Hiding complex implementation details and exposing only the necessary parts of an object.

Inheritance: Allowing a class (child) to inherit properties and methods from another class (parent).

Polymorphism: The ability for different classes to be treated as instances of the same class, usually through method overriding.

2. Explain Encapsulation in JavaScript With Example
   Encapsulation is achieved using classes and private properties/methods.
   Example of Encapsulation:

_EXAMPLE_
class Person {
#name;
constructor(name, age) {
this.#name = name;
this.age = age;
}
getName() {
return this.#name;
} }

    const person1 = new Person("John", 25);
    console.log(person1.getName());
    console.log(person1.#name);
    // Error: Private field '#name' must be declared in an enclosing class

3.  JavaScript Classes vs. Traditional Classes (Java/C++)
    _ANSWER_
    JavaScript uses prototype-based inheritance, while Java/C++ use class-based inheritance.
    JavaScript classes are syntactic sugar over prototypes, whereas Java/C++ strictly follow OOP principles.
    JavaScript allows dynamic object modification at runtime, while Java/C++ are more rigid.

4.  Explain Prototype-Based Inheritance in JavaScript With Example
    _ANSWER_
    JavaScript objects inherit directly from other objects using prototypes.
    Here, dog inherits from Animal using prototypes.

    _Example_:
    function Animal(name) {
    this.name = name;
    }
    Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
    };
    const dog = new Animal("Dog");
    dog.speak();

5.  What is Method Overriding in JavaScript and Who Do You Use it ?
    _ANSWER_
    Method overriding allows a child class to modify a method inherited from a parent class.
    _EXAMPLE_
    class Parent {
    showMessage() {
    console.log("Message from Parent class.");
    }
    }

    class Child extends Parent {
    showMessage() {
    console.log("Message from Child class.");
    }
    }

        const obj = new Child();
        obj.showMessage();

6.  Purpose of super() in JavaScript Classes
    _ANSWER_
    super() is used to call the constructor or methods of a parent class inside a child class.
    _EXAMPLE_
    class Animal {
    constructor(name) {
    this.name = name;
    }
    speak() {
    console.log(`${this.name} makes a sound`);
    }
    }

    class Dog extends Animal {
    constructor(name, breed) {
    super(name);
    this.breed = breed;
    }
    speak() {
    super.speak();
    console.log(`${this.name} barks.`);
    }
    }

        const myDog = new Dog("Buddy", "Golden Retriever");
            myDog.speak();

7.  Composition vs. Inheritance
    _Answer_
    inheritance:A child class inherits from a parent class
    Composition: An object contains instances of other objects

    inheritance: Uses parent methods directly
    Composition: uses contained objects' functionality

_DEBUGIN QUESTIONS_

1.  Different Types of Errors in JavaScript
    _ANSWER_
    JavaScript errors can be categorized as follows:

        Syntax Errors: Mistakes in code structure. (e.g., missing parentheses)
        console.log("Hello" // SyntaxError: Unexpected end of input

        Reference Errors: Using a variable that hasn’t been declared.
        console.log(nonExistentVar); // ReferenceError: nonExistentVar is not defined

        Type Errors: Performing an invalid operation on a data type.
        let num = 10; num.toUpperCase(); // TypeError: num.toUpperCase is not a function

        Range Errors: Using numbers outside the allowed range. let arr = new Array(-5); // RangeError: Invalid array length

        URI Errors: Passing an incorrect URI component. decodeURIComponent("%"); // URIError: URI malformed

2.  Debugging JavaScript in the Browser
    _ANSWER_
    You can debug JavaScript using Developer Tools (DevTools) in browsers like Chrome and Firefox:
    Open DevTools: Press F12 or Ctrl+Shift+I (Cmd+Option+I on Mac).
    Go to Console: View logs and errors.
    Use Sources Tab: Add breakpoints for step-by-step execution.
    Watch Expressions & Call Stack: Track variables and function calls.
    Use debugger; Statement: Pause execution at a specific point in code.

3.  Use of console.log() in Debugging
    _ANSWER_
    console.log() is used to print values and messages to the browser’s console.

_EXAMPLE_
let x = 10;
console.log("Value of x:", x); // Output: Value of x: 10

    How it helps in debugging?
    Helps track variable values.
    Identifies execution flow.
    Detects unexpected values.

4.  Purpose of try...catch in JavaScript
    _ANSWER_
    try...catch handles runtime errors gracefully without stopping program execution.

    _EXAMPLE_
    try {
    let result = someUndefinedFunction();
    } catch (error) {
    console.log("An error occurred:", error.message);
    }

    Benefits:
    Prevents crashes.
    Allows handling specific errors.
    Improves user experience by providing error messages.

5.  How Breakpoints Help in Debugging JavaScript Code
    _ANSWER_
    Breakpoints pause execution at a specific line in DevTools, allowing you to inspect variables and step through the code.
    How to Set Breakpoints in DevTools?
    Open Developer Tools (F12).
    Go to the Sources tab.
    Click on a line number to set a breakpoint.
    Reload the page or trigger the function.
    Step through execution (F10 for step over, F11 for step into).

6.  Difference Between throw and console.error()
    _ANSWER_
    console.error("This is an error message"); // Logs error, but execution continues throw new Error("This stops execution"); // Stops execution unless caught

7.  Using debugger in JavaScript
    _ANSWER_
    The debugger statement pauses script execution, allowing inspection of variables and the call stack.

    _EXAMPLE_:
    function testDebugger() {
    let x = 5; debugger; // Execution pauses here
    x += 10;
    console.log(x);
    }
    testDebugger();

        Steps to Use:
        Run the script in the browser.
        When execution pauses, check variables in DevTools.
        Step through the code to analyze behavior.

8.  What is a Stack Trace and How It Helps in Debugging?
    _ANSWER_
    A stack trace shows the sequence of function calls leading to an error.

    _Example_
    Uncaught TypeError: Cannot read properties of undefined (reading 'length') at getData (script.js:5) at main (script.js:10) at script.js:15
    Each line shows:
    Error Type: TypeError, ReferenceError, etc.
    Function Name: getData(), main()
    File & Line Number: script.js:5

        How It Helps?
        Pinpoints the error location.
        Shows the function call hierarchy.
        Helps trace unexpected behavior.

9.  Best Practices for Writing Bug-Free JavaScript Code
    _ANSWER_
    Use const and let instead of var to prevent variable hoisting issues.
    Enable Strict Mode ("use strict";) to catch common mistakes.
    Validate Inputs before processing.
    Use try...catch for handling errors gracefully.
    Check for null and undefined before accessing properties.
    Use console.log() and debugger to trace execution.
    Write Unit Tests using Jest, Mocha, or Jasmine.
    Follow Consistent Coding Standards (e.g., ESLint for linting).
    Keep Functions Small & Focused (Single Responsibility Principle).
    Use Descriptive Variable & Function Names for readability.
