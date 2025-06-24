// Checks if a number is even
const isEven = (num) => num % 2 === 0;

console.log(isEven(4)); // true
console.log(isEven(5)); // false

// Returns min, max, and sum of array elements
function minMaxSum(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b, 0);
  return { min, max, sum };
}

console.log(minMaxSum([1, 2, 3, 4, 5]));

// Concatenates two strings with a space
function concatStrings(a, b) {
  return `${a} ${b}`;
}

console.log(concatStrings("Hello", "World")); // "Hello World"
