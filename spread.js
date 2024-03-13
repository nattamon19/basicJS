//string to array of characters
const x = 'radar'
const word = [...x] //spread operator on array
console.log(word)
//spread operator on array
const a1 = [1, 2, 3]
const a2 = [3, 4, 5]
const a3 = [...a1]
//spread operator on array
const mergeA = [...a1, ...a2]
console.log(mergeA) //[ 1, 2, 3, 3, 4, 5 ]
console.log(a3) //[ 1, 2, 3 ]