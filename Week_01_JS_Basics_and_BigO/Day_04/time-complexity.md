# Time Complexity

📘 What is Time Complexity?

Time complexity is a way to describe how the runtime of an algorithm grows relative to the size of the input. It helps you understand how fast or slow a piece of code performs as the input increases.

🔹 Why It Matters
When you work with data structures or algorithms, you need to know how efficient your code is. For example, sorting 10 elements may be fast no matter what. But sorting 1 million elements? That’s where time complexity really matters.

🔹 Common Time Complexities

| Notation   | Name          | What It Means (Example)                           |
| ---------- | ------------- | ------------------------------------------------- |
| O(1)       | Constant Time | Fast and doesn’t depend on input size             |
| O(log n)   | Logarithmic   | Cuts input in half each time (like binary search) |
| O(n)       | Linear        | Time grows with input size                        |
| O(n log n) | Linearithmic  | Typical for efficient sorts (like merge sort)     |
| O(n^2)     | Quadratic     | Nested loops, grows quickly                       |
| O(2^n)     | Exponential   | Doubles every time, very slow                     |

🔹 Example: Loop

function printNumbers(arr) {
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}
}
// Time complexity: O(n)

🔹 Example: Nested Loops

function printPairs(arr) {
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length; j++) {
console.log(arr[i], arr[j]);
}
}
}
// Time complexity: O(n^2)

🔹 Key Takeaways

- Time complexity tells you how scalable your code is.
- Always aim for the lowest time complexity you can get for your use case.
- Tools like Big O Notation help compare different solutions before coding.
