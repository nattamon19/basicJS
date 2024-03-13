//find min,max in array
const nums = [-1, 0, 5, 10, 49]
/*
nums.forEach((num)=>{
    if (num<min) {
        min=num
    }
    if (num>min) {
        min=num
    }
})
console.log(max, min);
*/
function findMin(item) {
    let min = item[0];
    item.forEach((item)=>{
        if (item<min)
            min=item
    })
    return min
}


function findMax(item) {
    let max = item[0];
    item.forEach((item)=>{
        if (item>max)
            max = item
        })
    return max
}

console.log("Min = "+findMin(nums));
console.log("Max = "+findMax(nums));

