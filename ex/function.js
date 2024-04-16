// MODULD 1.1

// 1. function
function findMin(arr) {
    if (arr.length === 0) {
          return undefined;
      }
      let min = arr[0];
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] < min) {
              min = arr[i];
          }
      }
      return min;
  }
  let number = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7];
  arr = number;
  console.log(findMin(arr));
  
// 2. function
let value1 = [1, 2, 3];
let value2 = [];
let value3;
function arraysEqual(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
console.log(arraysEqual(value1, value2)); // false
console.log(arraysEqual(value2, value2)); // true
console.log(arraysEqual(value3, value2)); // false
  
// 3. function
let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
function uniqueElements(arrayValue) {
    return [...new Set(arrayValue)];
}
console.log(uniqueElements(numbers));