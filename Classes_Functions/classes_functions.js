// Classes  and functions

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
let person = new Person("John", 30);
console.log(person.greet()); // "Hello, my name is John and I am 30 years old."   (class)   (constructor)   (method)   (property)   (instance)   (object)

function greet(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
console.log(greet("John", 30)); // "Hello, my name is John and I am 30 years old."   (function)   (parameter)   (argument)   (return value)