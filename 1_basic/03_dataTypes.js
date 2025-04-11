// # 4 ways to define a variable

let y = 9;       // let is block-scoped.
console.log(y);  // 9



const z = 12;    // const is block-scoped and constant.
console.log(z);  // 12



var w = 15;     // var is function-scoped.
console.log(w); // 15



undefinedVar = 18; // undefinedVar is not defined.
console.log(undefinedVar); // undefined



let carNamee;     // carName is defined as variable.
console.log(carName); // undefined



// Re-assigning values to variables
x = 10;          // Allowed
y = 11;          // Allowed
z = 12;          // Allowed
w = 13;          // Allowed
// console.log(x);  10
// console.log(y);  11
// console.log(z);  12
// console.log(w);  13



// # Data types

// String
// Number
// Boolean
// Bigint
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
};
let arr = [1, 2, 3]; // Array of objects 

// Object
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof nullVar); // object
console.log(typeof undefinedVar); // undefined
console.log(typeof sym); // symbol
console.log(typeof obj); // object
console.log(typeof arr); // object



// Bigint
let bigInt = 12345678901234567890n;
console.log(typeof bigInt); // bigint  (big integer)
