// 1.
//let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7];
//console.log(findMin(arr));// 1

// function findMin(arr) {
//     const min = Math.min(...arr)
//     return min
// }
// console.log(findMin(numbers));

function findMin(arr) {
    if (arr.length === 0) {
      return undefined;
    }
   
    let min = arr[0];
   
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
   let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7];
  console.log(findMin(numbers));