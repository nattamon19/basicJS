let scores = [80, 70, 45, 61, 100]
console.log(scores); // print all data
console.log(scores[4]); // print data by index

scores[3] = 88; // edit data by index
scores.push(20); // add new data to tail of array

console.log(scores); // [80, 70, 45, 61, 100, 20]
scores.splice(2, 1); // remove data by index
console.log(scores); // [80, 70, 61, 100, 20]

let found_index = scores.indexOf(400); // search data and return found index, if not found return -1
console.log("found 100 at index "+found_index);

/*console.log(scores[0]);
console.log(scores[1]);
console.log(scores[2]);
console.log(scores[3]);
console.log(scores[4]);*/

let sum = 0;
for(let i=0; i<scores.length; i++) { // 0-4
    console.log(scores[i]);
    sum = sum + scores[i];
}

let mean = sum / scores.length;
console.log(mean);