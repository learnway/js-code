var x;          // x is defined as variable.
x = 7;          // x is assigned a value of 7.
console.log(x); // 7

// 4 ways to define a variable

let y = 9;       // let is block-scoped.
console.log(y); // 9

const z = 12;    // const is block-scoped and constant.
console.log(z); // 12

var w = 15;     // var is function-scoped.
console.log(w); // 15

// Re-assigning values to variables

x = 10;          // Allowed
y = 11;          // Allowed
z = 12;          // Allowed
w = 13;          // Allowed

// console.log(x); // 10
// console.log(y); // 11
// console.log(z); // 12
// console.log(w); // 13

// Data types

// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// Object

let str = "Hello World!";
let num = 123;
let bool = true;
let nullVar = null;
let undefinedVar;
let sym = Symbol();
let obj = {
    name: "John",
    age: 30
};  // Object

console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof nullVar); // object
console.log(typeof undefinedVar); // undefined
console.log(typeof sym); // symbol
console.log(typeof obj); // object

// Type coercion

console.log(1 + "2"); // "12"
console.log(true + 1); // 2
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log({} + 1); // "[object Object]1"

// Type conversion

console.log(String(1)); // "1"
console.log(Number("1")); // 1
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false   (default)
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false   (default)  (empty string)
console.log(Boolean({})); // true
console.log(Boolean([])); // true   (empty string)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false   (empty string)  (empty array)

// String methods

let str1 = "Hello World!";
console.log(str1.length); // 13
console.log(str1.toUpperCase()); // "HELLO WORLD!"
console.log(str1.toLowerCase()); // "hello world!"
console.log(str1.charAt(0)); // "H"
console.log(str1.indexOf("o")); // 4
console.log(str1.slice(0, 5)); // "Hello"
console.log(str1.replace("World", "Universe")); // "Hello Universe!"
console.log(str1.startsWith("Hello")); // true
console.log(str1.endsWith("!")); // true  (default)
console.log(str1.includes("World")); // true (default)  // "World" is included in "Hello World!"    (case-sensitive)    (default)   (returns boolean)   (case-insensitive)

// Number methods (Math object)

let num1 = 10;
console.log(Math.round(num1)); // 10
console.log(Math.floor(num1)); // 10
console.log(Math.ceil(num1)); // 10
console.log(Math.random()); // random number between 0 and 1    (0 inclusive, 1 exclusive)
console.log(Math.random() * 100); // random number between 0 and 100    (0 inclusive, 100 exclusive)    (floating-point number)   (decimal number)  (fractional number) (integer number)    (whole number)

// Array methods

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
console.log(arr[0]); // 1    (index starts from 0)
console.log(arr.slice(0, 3)); // [1, 2, 3]
console.log(arr.concat([6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.indexOf(3)); // 2
console.log(arr.includes(3)); // true
console.log(arr.push(6)); // 6    (returns length of array)
console.log(arr.pop()); // 6    (returns last element of array)
console.log(arr.shift()); // 1    (returns first element of array)
console.log(arr.unshift(0)); // 6    (returns length of array)  (adds element to the beginning of array)    (returns new length of array)   (adds element to the front of array)
console.log(arr.reverse()); // [5, 4, 3, 2, 1]    (reverses the array)
console.log(arr.sort()); // [1, 2, 3, 4, 5]    (sorts the array)    (ascending order)    (default)    (ascending order by default)

// Object methods

let obj1 = {
    name: "John",
    age: 30
};
console.log(obj1.name); // "John"
console.log(obj1.age); // 30
console.log(obj1["name"]); // "John"
console.log(obj1["age"]); // 30
console.log(obj1.name = "Jane"); // "Jane"
console.log(obj1.age = 25); // 25
console.log(obj1["name"] = "Jane"); // "Jane"
console.log(obj1["age"] = 25); // 25
console.log(obj1); // {name: "Jane", age: 25}   (object)    (default)   (key-value pair)   (property)   (key)   (value)