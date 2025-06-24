# JavaScript Data Types & Functions

## 1. JavaScript Data Types

JavaScript has two main categories of data types:

---

### A. Primitive Data Types

1. **String**

   - Represents textual data
   - Enclosed in single (`'`) or double (`"`) quotes
   - Example:
     ```js
     const name = "Alice";
     ```

2. **Number**

   - Represents both integers and floating-point numbers
   - Example:
     ```js
     const age = 25;
     const pi = 3.14;
     ```

3. **Boolean**
   - Represents logical entities: `true` or `false`
   - Example:
     ```js
     const isLoggedIn = true;
     ```

---

### B. Reference Data Types

4. **Array**

   - Ordered list of values (can be mixed types)
   - Zero-indexed
   - Example:
     ```js
     const fruits = ["apple", "banana", "cherry"];
     ```

5. **Object**
   - Collection of key-value pairs
   - Keys are strings, values can be any type
   - Example:
     ```js
     const user = {
       name: "Alice",
       age: 25,
       isAdmin: false,
     };
     ```

---

## 2. JavaScript Functions

1. Function Declarations

function greet(name) {
return `Hello, ${name}!`;
}

- Hoisted: Yes
- Can be called before being defined.

2. Function Expressions

const greet = function(name) {
return `Hello, ${name}!`;
};

- Hoisted: No
- Must be defined before being used.

3. Arrow Functions

const greet = (name) => {
return `Hello, ${name}!`;
};

// Or shorter
const greetShort = name => `Hello, ${name}!`;

- Hoisted: No
- `this` is lexically inherited (unlike regular functions)
- Shorter syntax; best for inline and anonymous functions.

## Summary Table

| Type           | Hoisted | `this` Binding     | Syntax                  |
| -------------- | ------- | ------------------ | ----------------------- |
| Declaration    | Yes     | Own context        | function name() {}      |
| Expression     | No      | Own context        | const x = function() {} |
| Arrow Function | No      | Lexical (inherits) | const x = () => {}      |
