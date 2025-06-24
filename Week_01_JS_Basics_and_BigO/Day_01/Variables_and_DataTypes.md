# JavaScript Variables and Data Types

## 1. Variable Declarations

JavaScript provides three ways to declare variables:

### var
- Function-scoped
- Can be re-declared and updated
- Hoisted (moved to top internally)

Example:
var x = 10;

### let
- Block-scoped
- Can be updated, but not re-declared in the same scope
- Introduced in ES6

Example:
let y = 20;

### const
- Block-scoped
- Cannot be updated or re-declared
- Used for constants (binding is immutable, not the value)

Example:
const z = 30;

Note: You can modify arrays or objects declared with const, but you can't reassign them.

## 2. Scope

### Global Scope
Variables declared outside any function/block are globally scoped.

### Function Scope
var is function-scoped, so it’s accessible anywhere inside the function it is declared in.

### Block Scope
let and const are block-scoped, meaning they only exist within the block `{}` they are declared in.

## 3. JavaScript Data Types

### Primitive Types:
- String: "Hello"
- Number: 42
- Boolean: true, false
- Null: intentionally empty
- Undefined: variable declared but not assigned
- Symbol: unique and immutable (used for object property keys)

### Reference Types:
- Object: { name: "John", age: 30 }
- Array: [1, 2, 3]
- Function: function() {} or arrow function

Check data types using typeof:
typeof "hello"       // "string"
typeof 42            // "number"
typeof [1, 2, 3]     // "object"
typeof {a: 1}        // "object"
typeof function(){}  // "function"

## Summary

| Declaration | Scope     | Re-declarable | Re-assignable | Hoisted |
|-------------|-----------|----------------|----------------|---------|
| var         | Function  | Yes            | Yes            | Yes     |
| let         | Block     | No             | Yes            | No      |
| const       | Block     | No             | No             | No      |
