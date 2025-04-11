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
console.log(str1.includes("World")); // true (default)
// "World" is included in "Hello World!"  (case-sensitive)  (default)  (returns boolean)  (case-insensitive)



// String interpolation
let name = "John";  // "John" is a string
let age = 30;       // 30 is a number
let message = `My name is ${name} and I am ${age} years old.`;
// "My name is John and I am 30 years old."  (string interpolation)  (string concatenation)
console.log(message); // "My name is John and I am 30 years old."   (string interpolation)  (string concatenation)
