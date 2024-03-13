let x = [1,2,3,4,5];
let sum = 0;
for(let i = 0 ; i < x.length; i++){
    sum += x[i];
}
let avg = sum/x.length;
let lagrgest = Math.max(...x)
let smallest = Math.min(...x)
 
console.log(sum);
console.log(avg);
console.log(lagrgest);
console.log(smallest);