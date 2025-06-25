# JavaScript Loops Explanation

## 1. for loop
A classic loop that gives full control of the index.

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

✅ Best when you need access to the index or need to manipulate the counter.

🔁 Break/Continue: Supported.

⏱ Time Complexity: O(n), where n is the length of the array.

🧠 Use Case: Iterating with index-based logic, modifying array in-place.

---

## 2. while loop
Executes code block while condition is true.

let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

✅ Good when the number of iterations isn't known in advance.

🔁 Break/Continue: Supported.

⏱ Time Complexity: O(n) for array iteration.

🧠 Use Case: Loop until a dynamic condition is met, like reading input or processing until a flag changes.

---

## 3. do...while loop
Similar to while, but runs **at least once**.

let i = 0;
do {
  console.log(array[i]);
  i++;
} while (i < array.length);

✅ Ensures the loop runs once regardless of condition.

🔁 Break/Continue: Supported.

⏱ Time Complexity: O(n)

🧠 Use Case: Menus, repeat-until-success situations, input validation where first attempt must run.


---

## 4. for...of loop
Modern loop for iterating over iterable objects like arrays.

for (const value of array) {
  console.log(value);
}

✅ Cleaner syntax, especially for value-only iteration.

🔁 Break/Continue: Supported.

⏱ Time Complexity: O(n)

🧠 Use Case: When you don’t need the index and just want to access values in a clean way.


---

## 5. forEach() method
Executes a function for each array element.

array.forEach((value) => {
  console.log(value);
});

❌ You cannot use break or continue.

✅ Clean, functional syntax for looping with side effects.

⏱ Time Complexity: O(n)

🧠 Use Case: Great for logging, simple operations on each item, side-effect-only loops.

---

## Summary

| Loop Type    | Best Use Case                      | Can Break? |
|--------------|------------------------------------|------------|
| `for`        | Index-based logic                  | ✅ Yes      |
| `while`      | Unknown number of iterations       | ✅ Yes      |
| `do...while` | Run at least once                  | ✅ Yes      |
| `for...of`   | Iterating over array values        | ✅ Yes      |
| `forEach()`  | Functional, cleaner array logic    | ❌ No       |

---

## Time Complexity

- All basic loop types typically operate in O(n)
- `forEach()` also runs in O(n)
