// Operators

// Operators are special symbols that perform operations on variables and values.
// JavaScript has the following types of operators:

//  Arithmetic Operators
//  Assignment Operators
//  Comparison Operators
//  Logical Operators
//  Bitwise Operators
//  String Operators
//  Type Operators
//  Conditional (Ternary) Operator


/////////////////////////// Arithmetic Operators ////////////////////////
// Arithmetic operators are used to perform basic mathematical operations like addition, subtraction, multiplication, and division.

// They can be used with numbers and strings (for concatenation).

// The following table lists the arithmetic operators in JavaScript:

//  +  Addition  5 + 3  8
//  -  Subtraction  5 - 3  2
//  *  Multiplication  5 * 3  15
//  /  Division  5 / 3  1.6666666666666667
//  %  Modulus  5 % 3  2  (remainder of 5 divided by 3)
//  **  Exponentiation  5 ** 3  125  (5 raised to the power of 3)
//  ++  Increment  let x = 5; x++;  6  (increases x by 1)
//  --  Decrement  let y = 5; y--;  4  (decreases y by 1)


// Increment and Decrement Operators

// The increment (++) and decrement (--) operators are used to increase or decrease a variable's value by 1.

// They can be used in two forms: prefix and postfix.

// The prefix form (++x or --x) increases or decreases the value before it is used in an expression.
// The postfix form (x++ or x--) increases or decreases the value after it is used in an expression.

// Example: Prefix form
let x = 5;
--x;            // x is now 4 // x is decremented by 1
console.log(x); // 4


// Example: Postfix form
let a = 5;          
a--;                // a is now 4 // a is decremented by 1
let b = a;          // b is now 4
console.log(a);     // 4


// Example: Prefix form
let c = 5;
let d = ++c;          // c is now 6, d is now 6
console.log(c);       // 6
console.log(d);       // 6


// Example: Postfix form 
let e = 5;
let f = e++;         // e is now 6, f is now 5
console.log(e);      // 6
console.log(f);      // 5


//Exponentiation Operator
// The exponentiation operator (**) raises the left operand to the power of the right operand.
// It is used for raising a number to a certain power.

// Example:
let g = 5;
let h = 2;
let i = g ** h; // i is now 25 (5 raised to the power of 2)
console.log(i); // 25


// Example:
let j = 2;
let k = j ** 3; // k is now 8 (2 raised to the power of 3)
console.log(k); // 8


// Example: Math.pow() method
// The Math.pow() method is a built-in JavaScript function that raises a base number to the power of an exponent.
// It is used for raising a number to a certain power.

// Example:
let l = 5;
let m = Math.pow(l, 2); // m is now 25 (5 raised to the power of 2)
console.log(m); // 25



//////////////////////////////// Assignment Operators ///////////////////////////////////
// Assignment operators are used to assign values to variables.

// The following table lists the assignment operators in JavaScript:

//  =  Simple Assignment                           x = 5  x is now 5
//  +=  Addition assignment                        x += 3  x is now 8 (x = x + 3)
//  -=  Subtraction assignment                     x -= 3  x is now 5 (x = x - 3)
//  *=  Multiplication assignment                  x *= 3  x is now 15 (x = x * 3)
//  /=  Division assignment                        x /= 3  x is now 5 (x = x / 3)
//  %=  Modulus assignment                         x %= 3  x is now 2 (x = x % 3)
//  **=  Exponentiation assignment                 x **= 3  x is now 125 (x = x ** 3)
//  &=  Bitwise AND assignment                     x &= 3  x is now 1 (x = x & 3)
//  |=  Bitwise OR assignment                      x |= 3  x is now 7 (x = x | 3)
//  ^=  Bitwise XOR assignment                     x ^= 3  x is now 6 (x = x ^ 3)
//  >>=  Bitwise right shift assignment            x >>= 3  x is now 1 (x = x >> 3)
//  <<=  Bitwise left shift assignment             x <<= 3  x is now 32 (x = x << 3)
//  >>>=  Bitwise unsigned right shift assignment  x >>>= 3  x is now 1 (x = x >>> 3)
//  &&=  Logical AND assignment                    x &&= true  x is now true (x = x && true)
//  ||=  Logical OR assignment                     x ||= true  x is now true (x = x || true)
//  ??=  Nullish coalescing assignment             x ??= true  x is now true (x = x ?? true)


// Example: Simple Assignment
let num = 5;             // num is assigned a value of 5
console.log(num);        // 5


// Example: Simple Assignment
let ya = 50;           // ya is assigned a value of 50
let xa = 10 + ya;      // xa is assigned a value of 10 + ya
console.log(xa);       // 60


// Example: Addition Assignment
let numOne = 5;       // numOne is assigned a value of 5
numOne += 3;          // numOne is now 8 (numOne = numOne + 3)
console.log(numOne);  // 8


// Example: Subtraction Assignment
let numZero = 5;        // num is assigned a value of 5
numZero -= 3;           // num is now 2 (num = num - 3)
console.log(numZero);   // 2


// Example: Multiplication Assignment
let numTwo = 5;        // num is assigned a value of 5
numTwo *= 3;           // num is now 15 (num = num * 3)
console.log(numTwo);   // 15


// Example: Division Assignment
let numThree = 5;        // num is assigned a value of 5
numThree /= 3;           // num is now 1.6666666666666667 (num = num / 3)
console.log(numThree);   // 1.6666666666666667


// Example: Remainder Assignment (Modulus Assignment)
let numFour = 5;        // num is assigned a value of 5
numFour %= 3;           // num is now 2 (num = num % 3)
console.log(numFour);   // 2


// Example: Exponentiation Assignment
let numFive = 5;       // num is assigned a value of 5
numFive **= 3;         // num is now 125 (num = num ** 3) // 5 raised to the power of 3
console.log(numFive);  // 125


// Example: Bitwise AND Assignment
let numSix = 5;        // num is assigned a value of 5
numSix &= 3;           // num is now 1 (num = num & 3) // 5 AND 3 = 1  // 5 in binary is 101 in decimal and 3 in binary is 011 in decimal and 1 in binary is 001 in decimal 
console.log(numSix);   // 1


// Example: Bitwise OR Assignment
let numSeven = 5;        // num is assigned a value of 5
numSeven |= 3;           // num is now 7 (num = num | 3) // 5 OR 3 = 7 // 5 in binary is 101 in decimal and 3 in binary is 011 in decimal and 7 in binary is 111 in decimal
console.log(numSeven);   // 7


// Example: Bitwise XOR Assignment
let numEight = 5;       // num is assigned a value of 5
numEight ^= 3;          // num is now 6 (num = num ^ 3) // 5 XOR 3 = 6 // 5 in binary is 101 in decimal and 3 in binary is 011 in decimal and 6 in binary is 110 in decimal 
console.log(numEight);  // 6


// Example: Bitwise Right Shift Assignment
let numNine = 5;       // num is assigned a value of 5
numNine >>= 3;         // num is now 1 (num = num >> 3)  
console.log(numNine);  // 1


// Example: Bitwise Left Shift Assignment
let numTen = 5;       // num is assigned a value of 5
numTen <<= 3;         // num is now 32 (num = num << 3)
console.log(numTen);  // 32


// Example: Bitwise Unsigned Right Shift Assignment
let numEleven = 5;         // num is assigned a value of 5
numEleven >>>= 3;          // num is now 1 (num = num >>> 3)
console.log(numEleven);    // 1


// Example: Logical AND Assignment
let numTwelve = 5;        // num is assigned a value of 5
numTwelve &&= true;       // num is now true (num = num && true)
console.log(numTwelve);   // true


// Example: Logical OR Assignment
let numThirteen = 5;      // num is assigned a value of 5
numThirteen ||= true;     // num is now true (num = num || true)
console.log(numThirteen); // true


// Example: Nullish Coalescing Assignment
let numFourteen = 5;       // num is assigned a value of 5
numFourteen ??= true;      // num is now true (num = num ?? true)
console.log(numFourteen);  // true

   




/////////////////////////// Comparison Operators /////////////////////////////
// Comparison operators are used to compare two values and return a boolean (true or false).

// The following table lists the comparison operators in JavaScript:

//  ==  Equal to  5 == 5  true
//  === Strict equal to  5 === "5"      false (compares both value and type)
//  !== Strict not equal to  5 !== "5"  true  (compares both value and type)
//  !=  Not equal to  5 != 5  false
//  >   Greater than  5 > 3  true
//  <   Less than  5 < 3  false
//  >=  Greater than or equal to  5 >= 3  true
//  <=  Less than or equal to  5 <= 3  false


// Example: (==) The equal to operator  checks if two values are equal, performing type coercion if necessary.
const a1 = 5;                         // a1 is a number 5
const b1 = "5";                       // b1 is a string "5"

if (a == b) {                         // The == operator converts b to a number, so it compares 5 == 5
    console.log("a1 is equal to b1"); // Since the values are now the same, the condition is true
} else {
    console.log("a1 is not equal to b1");
}
// The == operator checks for equality, allowing type conversion if needed. So, 5 == "5" is true because "5" is converted to 5 before comparison.
// Output: a1 is equal to b1



// Example:(===) Strict Equal To Operator (compares both value and type)
let numFifteen = 5;                      // num is assigned a value of 5
let numSixteen = "5";                    // num is assigned a value of "5"
console.log(numFifteen === numSixteen);  // true (compares both value and type)
// Output: true   (because both values are equal and of the same type)


// Another Example with if-else statement
let temp4 = 5;                      // temp is assigned a value of 5
let temp5 = "5";                    // temp is assigned a value of "5"
if (temp4 === temp5) {              // checks if temp4 is strictly equal to temp5
    console.log("temp4 is strictly equal to temp5"); // This will not be executed
}
else {
    console.log("temp4 is not strictly equal to temp5"); // This will be executed
}
// Output: temp4 is not strictly equal to temp5



// Example:(!==) Strict Not Equal To Operator (compares both value and type)
const numSeventeen = 5;                      // num is assigned a value of 5
const numEighteen = "5";                     // num is assigned a value of "5"
console.log(numSeventeen !== numEighteen);   // true (compares both value and type)
// Output: true   (true because the value 5 (number) is not strictly equal to "5" (string))


// Another Example with if-else statement
const temp6 = 5;                      // temp is assigned a value of 5
const temp7 = "5";                    // temp is assigned a value of "5"
if (temp6 !== temp7) {                // checks if temp6 is strictly not equal to temp7
    console.log("temp6 is strictly not equal to temp7"); // This will be executed
}
else {
    console.log("temp6 is strictly equal to temp7"); // This will not be executed
}
// Output: temp6 is strictly not equal to temp7 because 5 (number) and "5" (string) are not strictly equal



// Example: (!=) Not Equal To Operator
// The != operator checks if two values are not equal, performing type coercion if necessary.
const numNineteen = 5;                      // num is assigned a value of 5
const numTwenty = "5";                      // num is assigned a value of "5" 
console.log(numNineteen != numTwenty);      // false (compares both value and type)
// The != operator converts "5" (string) to 5 (number) for comparison.
// Output: false   (false because the value 5 (number) is not strictly equal to "5" (string))



// Example: (>) Greater Than Operator
// The > operator checks if the left operand is greater than the right operand.
const numTwentyOne = 5;                      // num is assigned a value of 5
const numTwentyTwo = "5";                    // num is assigned a value of "5"
console.log(numTwentyOne > numTwentyTwo);    // false (compares both value and type)
// The > operator converts "5" (string) to 5 (number) for comparison.
// Output: false   (false because the value 5 (number) is not strictly equal to "5" (string))


// Another Example with if-else statement
const temp8 = 10;                          // temp is assigned a value of 10
const temp9 = 5;                           // temp is assigned a value of 5
if (temp8 > temp9) {                       // checks if temp8 is greater than temp9
    console.log("10 is bigger");           // This will be executed
}
else {
    console.log("5 is smaller");           // This will not be executed
}// Output: 10 is bigger because 10 is greater than 5



// Example: (<) Less Than Operator
// The < operator checks if the left operand is less than the right operand.
const numTwentyThree = 10;                  // num is assigned a value of 10
const numTwentyFour = 5;                    // num is assigned a value of 5
console.log(numTwentyThree < numTwentyFour);// false
// Output: false because 10 is not less than 5


// Example (>=) Greater Than or Equal To Operator
// The >= operator checks if the left operand is greater than or equal to the right operand.
const at = 10;                      
const bt = 5;                       
const ct = 10;                       
console.log(at >= bt);              // true (true because 10 is greater than or equal to 5)
console.log(at >= ct);              // true (true because 10 is equal to 10)
console.log(bt >= at);              // false (false because 5 is not greater than or equal to 10)


// Example (<=) Less Than or Equal To Operator
// The <= operator checks if the left operand is less than or equal to the right operand.









////////////////////////////////////// Logical Operators //////////////////////////////////////
// Logical operators are used to combine multiple boolean expressions and return a boolean value.

// The following table lists the logical operators in JavaScript: