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