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



// #3-2 else if statement
if (time < 10) {
    console.log("Good morning!");
}
else if (time < 20) {
    console.log("Good day!");
}
else {
    console.log("Good evening!");
}
// Output: Good day!



// #4 Nested if statement
x = 10; y = 20; z = 30;
if (x > y) {
    console.log("x is greater than y");
}
else {
    console.log("x is less than y");
    if (y > z) {
        console.log("y is greater than z");
    }
    else {
        console.log("y is less than z");
    }
}
// } Output: x is less than y
// Output: y is less than z


// #5 Ternary operator
x = 10; y = 20;
var result = (x > y) ? "x is greater than y" : "x is less than y";
console.log(result);
// Output: x is less than y


