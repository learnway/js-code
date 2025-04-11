// Type conversion

console.log(String(1)); // "1"
console.log(Number("1")); // 1
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false   (default)
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false (default)  (empty string)
console.log(Boolean({})); // true
console.log(Boolean([])); // true (empty string)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false (empty string) (empty array)