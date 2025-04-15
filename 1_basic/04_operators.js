// Operators

// Operators are special symbols that perform operations on variables and values.
// JavaScript has the following types of operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Bitwise Operators
// String Operators
// Type Operators
// Conditional (Ternary) Operator


// Arithmetic Operators
// Arithmetic operators are used to perform basic mathematical operations like addition, subtraction, multiplication, and division.

// They can be used with numbers and strings (for concatenation).

// The following table lists the arithmetic operators in JavaScript:

// +  Addition  5 + 3  8
// -  Subtraction  5 - 3  2
// *  Multiplication  5 * 3  15
// /  Division  5 / 3  1.6666666666666667
// %  Modulus  5 % 3  2  (remainder of 5 divided by 3)
// **  Exponentiation  5 ** 3  125  (5 raised to the power of 3)
// ++  Increment  let x = 5; x++;  6  (increases x by 1)
// --  Decrement  let y = 5; y--;  4  (decreases y by 1)


// Increment and Decrement Operators

// The increment (++) and decrement (--) operators are used to increase or decrease a variable's value by 1.

// They can be used in two forms: prefix and postfix.

// The prefix form (++x or --x) increases or decreases the value before it is used in an expression.
// The postfix form (x++ or x--) increases or decreases the value after it is used in an expression.

// For example:
let x = 5;
let y = 10;
x++; // x is now 6
y--; // y is now 9
console.log(x); // 6
console.log(y); // 9


// For example:
let a = 5;
a--; // a is now 4
let b = a; // b is now 4
console.log(a); // 4


// For example:Prefix form
let c = 5;
let d = ++c; // c is now 6, d is now 6
console.log(c); // 6
console.log(d); // 6


// For example:Postfix form 
let e = 5;
let f = e++; // e is now 6, f is now 5
console.log(e); // 6
console.log(f); // 5


//Exponentiation Operator
// The exponentiation operator (**) raises the left operand to the power of the right operand.
// It is used for raising a number to a certain power.

// For example:
let g = 5;
let h = 2;
let i = g ** h; // i is now 25 (5 raised to the power of 2)
console.log(i); // 25


// For example:
let j = 2;
let k = j ** 3; // k is now 8 (2 raised to the power of 3)
console.log(k); // 8


// For example: Math.pow() method
// The Math.pow() method is a built-in JavaScript function that raises a base number to the power of an exponent.
// It is used for raising a number to a certain power.

// For example:
let l = 5;
let m = Math.pow(l, 2); // m is now 25 (5 raised to the power of 2)
console.log(m); // 25



// Comparison Operators
// Comparison operators are used to compare two values and return a boolean (true or false).

// The following table lists the comparison operators in JavaScript:

// ==  Equal to  5 == 5  true
// !=  Not equal to  5 != 5  false
// >  Greater than  5 > 3  true
// <  Less than  5 < 3  false
// >=  Greater than or equal to  5 >= 3  true
// <=  Less than or equal to  5 <= 3  false
// ===  Strict equal to  5 === "5"  false  (compares both value and type)
// !==  Strict not equal to  5 !== "5"  true  (compares both value and type)


