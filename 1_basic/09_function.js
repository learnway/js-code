//This code defines a function named myFunction that prints "Hello, world!" to the console.
function myFunction() {
    console.log("Hello, world!");   // function body
}



//This code defines a function named myFunction2 that sets the innerHTML of two elements with the IDs "demo1" and "demo2" to "Hello, world!1" and "Hello, world!2" respectively.
function myFunction2()
{
    document.getElementById("demo1").innerHTML = "Hello, world!1"; // Hello, world!1
    document.getElementById("demo2").innerHTML = "Hello, world!2"; // Hello, world!2
}



//This code defines a function named add that takes two arguments, a and b, and returns their sum using a return statement.
function add(a, b) {
    return a + b; // return statement
}                // function declaration expression
console.log(add(1, 2));
// 3 (function call) (function invocation) (function execution)



//This code defines a function named subtract that takes two arguments, a and b, and returns their difference.
function subtract(a, b) {
    return a - b;   
}  // function declaration expression
let result = subtract(5, 3); // 2  (function call) (function invocation) (function execution)
console.log(result); // 2 (function call) (function invocation) (function execution)



//This code defines a function named multiply that takes two arguments, a and b, and returns their product using an arrow function syntax.
let multiply = (a, b) => a * b; // function expression
console.log(multiply(3, 5)); // 15  (function call) (function invocation) (function execution)



let ady = (a, b) => a + b;
console.log(ady(3, 5)); // 8



//This code defines a function named divide that takes two arguments, a and b, and returns their quotient using a regular function syntax. 
function divide(a, b) {
    return a / b;
}
console.log(divide(10, 2)); // 5  (function call) (function invocation) (function execution)



//This code defines a function named greet that takes a name as an argument and returns a greeting using a template literal syntax.
function greet(name) {
    return `Hello, ${name}!`;   // template literal
}                              // function declaration expression
console.log(greet("John"));
// "Hello, John!"  (function call) (function invocation) (function execution)



//This code defines a function named greet2 that takes a name as an argument and returns a greeting using a regular function syntax.
function greet2(name) {
    return "Hello, " + name + "!"; // string concatenation
}                                  // function declaration expression


console.log(greet2("John")); // "Hello, John!"  (function call) (function invocation) (function execution)

//This code defines a function named greet3 that takes a name as an argument and returns a greeting using a string interpolation syntax.
function greet3(name) {
    return "Hello, " + name + "!"; // string interpolation
}

console.log(greet3("John")); // "Hello, John!"  (function call) (function invocation) (function execution)

