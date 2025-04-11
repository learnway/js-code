// Template literals

let name2 = "John";
let age2 = 30;
let message2 = `My name is ${name2} and I am ${age2} years old.`;
console.log(message2); // "My name is John and I am 30 years old."   (string interpolation) (string concatenation)

// String concatenation

let name3 = "John";
let age3 = 30;
let message3 = "My name is " + name3 + " and I am " + age3 + " years old.";
console.log(message3); // "My name is John and I am 30 years old."   (string concatenation) (string interpolation)   

// Multiline strings

let str2 = `This is a
multiline string.`;
console.log(str2); // "This is a multiline string."  (string interpolation)    (string concatenation) (template literals) (backticks) (backtick) (backquote)   (grave accent) (double quote) (single quote)

// Unicode characters

let str3 = "Hello \u{1F600} World!";
console.log(str3); // "Hello �� World!"  (string interpolation) (string concatenation) (template literals) (backticks) (backtick) (backquote) (grave accent)  (double quote) (single quote) (emoji) (unicode character)

// Template literals with expressions

let name4 = "John";
let age4 = 30;
let message4 = `My name is ${name4} and I am ${age4} years old.`;
console.log(message4); // "My name is John and I am 30 years old."   (string interpolation) (string concatenation) (template literals) (backticks) (backtick)   (backquote) (grave accent) (double quote) (single quote)


// Template literals with tagged template literals

let name5 = "John";
let age5 = 30;
let message5 = `My name is ${name5} and I am ${age5} years old.`;   // "My name is John and I am 30 years old."   (string interpolation) (string concatenation)   (template literals) (backticks) (backtick) (backquote) (grave accent) (double quote) (single quote)

console.log(message5); // "My name is John and I am 30 years old."   (string interpolation) (string concatenation) (template literals) (backticks) (backtick)   (backquote) (grave accent) (double quote) (single quote)


// Template literals with tagged template literals and expressions

let name6 = "John";
let age6 = 30;  // 30 is a number (age is a number) (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i];
        }
    }
    return result;
}   // tag function  (tagged template literals) (tagged template literal)

let message6 = tag`My name is ${name6} and I am ${age6} years old.`;
console.log(message6); // "My name is John and I am 30 years old."   (string interpolation) (string concatenation) (template literals) (backticks) (backtick)   (backquote) (grave accent) (double quote) (single quote) (tagged template literals)   (tagged template literal)

// Template literals with tagged template literals and expressions with default values

let name7 = "John";
let age7 = 30;  // 30 is a number (age is a number) (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
    return result;  // "My name is John and I am 30 years old." (string interpolation) (string concatenation) (template literals) (backticks)    (backtick) (backquote) (grave accent) (double quote) (single quote) (tagged template literals) (tagged template literal)
}   // tag function (tagged template literals) (tagged template literal) (default value)

let message7 = tag`My name is ${name7} and I am ${age7} years old.`;    // "My name is John and I am 30 years old."   (string interpolation) (string concatenation)   (template literals) (backticks) (backtick) (backquote) (grave accent) (double quote) (single quote) (tagged template literals) (tagged template literal)

// Template literals with tagged template literals and expressions with optional arguments

let name8 = "John";
let age8 = 30;  // 30 is a number  (age is a number) (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
    return result;  // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal)
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)

let message8 = tag`My name is ${name8} and I am ${age8} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)

// Template literals with tagged template literals and expressions with rest parameters

let name9 = "John";
let age9 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (rest parameter)

let message9 = tag`My name is ${name9} and I am ${age9} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (rest parameter)

// Template literals with tagged template literals and expressions with spread operator

let name10 = "John";
let age10 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)

let message10 = tag`My name is ${name10} and I am ${age10} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)

// Template literals with tagged template literals and expressions with destructuring

let name11 = "John";
let age11 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)

let message11 = tag`My name is ${name11} and I am ${age11} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)

// Template literals with tagged template literals and expressions with generators

let name12 = "John";
let age12 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)

let message12 = tag`My name is ${name12} and I am ${age12} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)

// Template literals with tagged template literals and expressions with async/await

let name13 = "John";
let age13 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }   
}  // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)

let message13 = tag`My name is ${name13} and I am ${age13} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)  (async/await)

// Template literals with tagged template literals and expressions with try/catch

let name14 = "John";
let age14 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)

let message14 = tag`My name is ${name14} and I am ${age14} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)

// Template literals with tagged template literals and expressions with custom function calls

let name15 = "John";
let age15 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)

let message15 = tag`My name is ${name15} and I am ${age15} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)

// Template literals with tagged template literals and expressions with arrow functions

let name16 = "John";
let age16 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }   
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)

let message16 = tag`My name is ${name16} and I am ${age16} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)

// Template literals with tagged template literals and expressions with template literals

let name17 = "John";
let age17 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)

let message17 = tag`My name is ${name17} and I am ${age17} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)

// Template literals with tagged template literals and expressions with destructuring and spread operator

let name18 = "John";
let age18 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)   (age is a numeric data type)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }   
}  // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)

let message18 = tag`My name is ${name18} and I am ${age18} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)

// Template literals with tagged template literals and expressions with destructuring and spread operator and custom function calls

let name19 = "John";
let age19 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)   (age is a numeric data type)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)

let message19 = tag`My name is ${name19} and I am ${age19} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)

// Template literals with tagged template literals and expressions with destructuring and spread operator and custom function calls and arrow functions

let name20 = "John";
let age20 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)   (age is a numeric data type)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)

let message20 = tag`My name is ${name20} and I am ${age20} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)

message16;
message17;
message18;
message19;
message20;  //  (string concatenation)   (template literals)

// Template literals with tagged template literals and expressions with destructuring and spread operator and custom function calls and arrow functions and string concatenation    (string interpolation)

let name21 = "John";
let age21 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)   (age is a numeric data type)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)

let message21 = tag`My name is ${name21} and I am ${age21} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)  (string concatenation)   (string interpolation)

message21;  //  (string concatenation)   (template literals)   (string interpolation)

// Template literals with tagged template literals and expressions with destructuring and spread operator and custom function calls and arrow functions and string concatenation and string interpolation    (string concatenation)   (template literals)   (string interpolation)

let name22 = "John";
let age22 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)   (age is a numeric data type)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)

let message22 = tag`My name is ${name22} and I am ${age22} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)  (string concatenation)   (string interpolation)

message22;  //  (string concatenation)   (template literals)   (string interpolation)

// Template literals with tagged template literals and expressions with destructuring and spread operator and custom function calls and arrow functions and string concatenation and string interpolation and template literals    (string concatenation)   (template literals)   (string interpolation)   (template literals)

let name23 = "John";
let age23 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)   (age is a numeric data type)

function tag(strings, ...values) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i] || "";
        }
    }
}   // tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)

let message23 = tag`My name is ${name23} and I am ${age23} years old.`;    // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)   (template literals)  (backticks)    (backtick)   (backquote)   (grave accent)    (double quote)   (single quote)    (tagged template literals)   (tagged template literal) (optional argument)  (spread operator)  (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)  (string concatenation)   (string interpolation)   (template literals)

message23;  //  (string concatenation)   (template literals)   (string interpolation)   (template literals)   (string concatenation)   (template literals)   (string interpolation)

// Template literals with tagged template literals and expressions with destructuring and spread operator and custom function calls and arrow functions and string concatenation and string interpolation and template literals and destructuring    (string concatenation)   (template literals)   (string interpolation)   (template literals)   (destructuring)

let name24 = "John";
let age24 = 30;  // 30 is a number   (age is a number)   (age is a numeric value)   (age is a numeric data type)

function tag(strings, ...values){
    let result = "";
    for (let i = 0; i < strings.length; i++)
    {
        result += strings[i];
        if (i < values.length)
        {
            result += values[i] || "";
        }
    }
}// tag function  (tagged template literals)   (tagged template literal)  (default value)  (optional argument)  (spread operator)    (rest parameter)  (destructuring)  (generators)  (async/await)  (try/catch)  (custom function calls)  (arrow functions)  (template literals)  (destructuring)  (spread operator)  (string concatenation)   (string interpolation)   (template literals)   (destructuring)

let message24 = tag`My name is ${name24} and I am ${age24} years old.`;    // "My name is John and I am 30 years old."   (string concatenation)   (template literals)   (string interpolation)   (template literals)   (destructuring)

message24;  //  (string concatenation)   (template literals)   (string interpolation)   (template literals)   (destructuring)

// Template literals with tagged template literals and expressions with destructuring and spread operator and custom function calls and arrow functions and string concatenation and string interpolation and template literals and destructuring and spread operator    (string concatenation)   (template literals)   (string interpolation)   (template literals)   (destructuring)   (spread operator)
