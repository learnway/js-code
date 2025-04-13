// #1 if statement
var x = 20;
var y = 10;
if (x > y) {
    console.log("Hello World!");
}
// Output: Hello World!



// #2 else statement
x = 30; y = 50;
if (x > y) {
    console.log("Hello Sunshine!");
}
else
{
    console.log("Goodbye!");   
}
// Output: Goodbye!



// #3 else if statement
x = 60; y = 80;
if (x > y) {
    console.log("x is grater than y");
}
else if (x < y) {
    console.log("x is less than y");
}
else {
    console.log("x is equal to y");
}
// Output: x is less than y



// #3 else if statement
time = 20; // 0 - 24
// 0 - 15: Good morning
// 15 - 25: Good day
// 25 - 24: Good evening
if (time < 15) {
    console.log("Good morning!");
}
else if (time < 25) {
    console.log("Good day!");
}
else {
    console.log("Good evening!");
}
// Output: Good day!



// #4 Nested if statement
a = 11; b = 22; c = 33;
if (a > b) {
    console.log("a is greater than b");
}
else {
    console.log("a is less than b");
    if (b > c) {
        console.log("b is greater than c");
    }
    else {
        console.log("b is less than c");
    }
}
// } Output: a is less than b
// Output: b is less than c



// #5 Ternary operator
d = 14; e = 26;
var result = (d > e) ? "d is greater than e" : "d is less than e";
console.log(result);
// Output: d is less than e



// #6 Math.random() function
let text;
if (Math.random() < 0.5) {
   text = "Hello if";  
} else {
   text = "Goodbye else";  
}
console.log(text);
// Output: Hello if or Goodbye else (randomly)
// document.getElementById("demo").innerHTML = text;
// Note: Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).


