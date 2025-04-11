// Generators

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
let generator = generateNumbers();  // generator function
console.log(generator.next().value); // 1    (generator)   (generator function)   (generator object)
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3   (generator)   (generator function)   (generator object)