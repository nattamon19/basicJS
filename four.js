// 4.
let value1 = [1, 2, 3];
let value2 = [];
let value3;
// XXXXX is the code to check each variable
console.log(value1 === value2); // value1 false
console.log(value2 === value2); // value2 true
console.log(value3 === value2); // value3 false

console.log(Array.isArray(value1) && value1.length === 0); // value1 false
console.log(Array.isArray(value2) && value2.length === 0); // value2 true
console.log(Array.isArray(value3) && value3.length === 0); // value3 false