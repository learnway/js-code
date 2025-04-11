// Array methods

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
console.log(arr[0]); // 1 (index starts from 0)
console.log(arr.slice(0, 3)); // [1, 2, 3]
console.log(arr.concat([6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.indexOf(3)); // 2
console.log(arr.includes(3)); // true
console.log(arr.push(6)); // 6 (returns length of array)
console.log(arr.pop()); // 6 (returns last element of array)
console.log(arr.shift()); // 1 (returns first element of array)
console.log(arr.unshift(0)); // 6 (returns length of array) (adds element to the beginning of array) (returns new length of array) (adds element to the front of array)
console.log(arr.reverse()); // [5, 4, 3, 2, 1]  (reverses the array)
console.log(arr.sort()); // [1, 2, 3, 4, 5] (sorts the array) (ascending order)    (default) (ascending order by default)