// Day 2: JavaScript Practice – Loops & Array Methods

// 1. sumArray
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 2. doubleValues
function doubleValues(arr) {
  return arr.map((num) => num * 2);
}

// 3. filterEvens
function filterEvens(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// 4. countVowels
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return [...str].filter((char) => vowels.includes(char)).length;
}

// 5. removeFalsy
function removeFalsy(arr) {
  return arr.filter(Boolean);
}

// 6. flattenArray
function flattenArray(arr) {
  return arr.flat();
}

// 7. mostFrequent
function mostFrequent(arr) {
  const map = {};
  let max = 0,
    result;

  for (const item of arr) {
    map[item] = (map[item] || 0) + 1;
    if (map[item] > max) {
      max = map[item];
      result = item;
    }
  }
  return result;
}
