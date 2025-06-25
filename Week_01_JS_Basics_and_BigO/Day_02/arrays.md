JavaScript Array Methods Cheat Sheet
====================================

🔹 Creation / Inspection
-----------------------

1. Array.from()
- Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
- Time Complexity: O(n)
- Use: Creates array from array-like/iterable (NodeList, arguments, etc.)
- Example: 
  const set = new Set([1, 2, 3]);
  const arr = Array.from(set); // [1, 2, 3]

2. Array.isArray()
- Syntax: Array.isArray(value)
- Time Complexity: O(1)
- Use: Check if value is an array
- Example:
  Array.isArray([1, 2]); // true
  Array.isArray({}); // false

3. Array.of()
- Syntax: Array.of(element0[, element1[, ...[, elementN]]])
- Time Complexity: O(n)
- Use: Creates array with variable arguments (fixes Array constructor quirks)
- Example:
  Array.of(1, 2, 3); // [1, 2, 3]
  Array.of(7); // [7] (unlike Array(7) which creates empty array of length 7)

🔹 Adding/Removing Elements
-------------------------

4. push()
- Syntax: arr.push(element1[, ...[, elementN]])
- Time Complexity: O(1) amortized
- Use: Add elements to end
- Example:
  const arr = [1, 2];
  arr.push(3); // [1, 2, 3]

5. pop()
- Syntax: arr.pop()
- Time Complexity: O(1)
- Use: Remove last element
- Example:
  const arr = [1, 2, 3];
  arr.pop(); // returns 3, arr = [1, 2]

6. unshift()
- Syntax: arr.unshift(element1[, ...[, elementN]])
- Time Complexity: O(n) (needs to shift all elements)
- Use: Add elements to beginning
- Example:
  const arr = [2, 3];
  arr.unshift(1); // [1, 2, 3]

7. shift()
- Syntax: arr.shift()
- Time Complexity: O(n) (needs to shift all elements)
- Use: Remove first element
- Example:
  const arr = [1, 2, 3];
  arr.shift(); // returns 1, arr = [2, 3]

8. splice()
- Syntax: arr.splice(start[, deleteCount[, item1[, ...[, itemN]]]])
- Time Complexity: O(n) (worst case)
- Use: Add/remove/replace at specific index
- Example:
  const arr = [1, 2, 3];
  arr.splice(1, 1, 'a'); // [1, 'a', 3]

9. fill()
- Syntax: arr.fill(value[, start[, end]])
- Time Complexity: O(n)
- Use: Fill array with static value
- Example:
  new Array(3).fill(0); // [0, 0, 0]

10. copyWithin()
- Syntax: arr.copyWithin(target[, start[, end]])
- Time Complexity: O(n)
- Use: Copy sequence within array
- Example:
  [1, 2, 3, 4].copyWithin(0, 2); // [3, 4, 3, 4]

🔹 Searching/Testing
-------------------

11. includes()
- Syntax: arr.includes(valueToFind[, fromIndex])
- Time Complexity: O(n)
- Use: Check if value exists
- Example:
  [1, 2, 3].includes(2); // true

12. indexOf()
- Syntax: arr.indexOf(searchElement[, fromIndex])
- Time Complexity: O(n)
- Use: Find first index of value
- Example:
  [1, 2, 2].indexOf(2); // 1

13. lastIndexOf()
- Syntax: arr.lastIndexOf(searchElement[, fromIndex])
- Time Complexity: O(n)
- Use: Find last index of value
- Example:
  [1, 2, 2].lastIndexOf(2); // 2

14. find()
- Syntax: arr.find(callback(element[, index[, array]])[, thisArg])
- Time Complexity: O(n)
- Use: Find first element matching condition
- Example:
  [1, 2, 3].find(x => x > 1); // 2

15. findIndex()
- Syntax: arr.findIndex(callback(element[, index[, array]])[, thisArg])
- Time Complexity: O(n)
- Use: Find index of first matching element
- Example:
  [1, 2, 3].findIndex(x => x > 1); // 1

16. some()
- Syntax: arr.some(callback(element[, index[, array]])[, thisArg])
- Time Complexity: O(n)
- Use: Test if any element passes condition
- Example:
  [1, 2, 3].some(x => x > 2); // true

17. every()
- Syntax: arr.every(callback(element[, index[, array]])[, thisArg])
- Time Complexity: O(n)
- Use: Test if all elements pass condition
- Example:
  [1, 2, 3].every(x => x > 0); // true

🔹 Iteration/Transformation
--------------------------

18. forEach()
- Syntax: arr.forEach(callback(currentValue[, index[, array]])[, thisArg])
- Time Complexity: O(n)
- Use: Execute function for each element
- Example:
  [1, 2, 3].forEach(x => console.log(x));

19. map()
- Syntax: arr.map(callback(currentValue[, index[, array]])[, thisArg])
- Time Complexity: O(n)
- Use: Transform array into new array
- Example:
  [1, 2, 3].map(x => x * 2); // [2, 4, 6]

20. filter()
- Syntax: arr.filter(callback(element[, index[, array]])[, thisArg])
- Time Complexity: O(n)
- Use: Create new array with matching elements
- Example:
  [1, 2, 3].filter(x => x > 1); // [2, 3]

21. reduce()
- Syntax: arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
- Time Complexity: O(n)
- Use: Reduce array to single value
- Example:
  [1, 2, 3].reduce((sum, x) => sum + x, 0); // 6

22. reduceRight()
- Syntax: arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
- Time Complexity: O(n)
- Use: Reduce from right to left
- Example:
  ['a', 'b', 'c'].reduceRight((acc, x) => acc + x); // 'cba'

23. flat()
- Syntax: arr.flat([depth])
- Time Complexity: O(n)
- Use: Flatten nested arrays
- Example:
  [1, [2, [3]]].flat(2); // [1, 2, 3]

24. flatMap()
- Syntax: arr.flatMap(callback(currentValue[, index[, array]])[, thisArg])
- Time Complexity: O(n)
- Use: Map then flatten by 1 level
- Example:
  [1, 2].flatMap(x => [x, x * 2]); // [1, 2, 2, 4]

🔹 Sorting/Reordering
-------------------

25. sort()
- Syntax: arr.sort([compareFunction])
- Time Complexity: O(n log n) typically
- Use: Sort array in place
- Example:
  [3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]

26. reverse()
- Syntax: arr.reverse()
- Time Complexity: O(n)
- Use: Reverse array in place
- Example:
  [1, 2, 3].reverse(); // [3, 2, 1]

🔹 Combining/Slicing
------------------

27. concat()
- Syntax: arr.concat(value1[, value2[, ...[, valueN]]])
- Time Complexity: O(n)
- Use: Merge arrays
- Example:
  [1, 2].concat([3, 4]); // [1, 2, 3, 4]

28. join()
- Syntax: arr.join([separator])
- Time Complexity: O(n)
- Use: Create string from array
- Example:
  [1, 2, 3].join('-'); // "1-2-3"

29. slice()
- Syntax: arr.slice([start[, end]])
- Time Complexity: O(n)
- Use: Get shallow copy of portion
- Example:
  [1, 2, 3].slice(1); // [2, 3]

30. toString()
- Syntax: arr.toString()
- Time Complexity: O(n)
- Use: Convert to string (comma-separated)
- Example:
  [1, 2, 3].toString(); // "1,2,3"

🔹 Iteration Helpers (ES6+)
-------------------------

31. keys()
- Syntax: arr.keys()
- Time Complexity: O(1) to create iterator, O(n) to consume
- Use: Get iterator of array indices
- Example:
  [...['a', 'b'].keys()]; // [0, 1]

32. values()
- Syntax: arr.values()
- Time Complexity: O(1) to create iterator, O(n) to consume
- Use: Get iterator of array values
- Example:
  [...['a', 'b'].values()]; // ['a', 'b']

33. entries()
- Syntax: arr.entries()
- Time Complexity: O(1) to create iterator, O(n) to consume
- Use: Get iterator of [index, value] pairs
- Example:
  [...['a', 'b'].entries()]; // [[0, 'a'], [1, 'b']]

🔹 Other Utilities
----------------

34. at()
- Syntax: arr.at(index)
- Time Complexity: O(1)
- Use: Get element at index (supports negative)
- Example:
  [1, 2, 3].at(-1); // 3

35. toLocaleString()
- Syntax: arr.toLocaleString([locales[, options]])
- Time Complexity: O(n)
- Use: Locale-sensitive string representation
- Example:
  [1000, 2000].toLocaleString('de-DE'); // "1.000,2.000"