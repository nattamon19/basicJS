/*
function swap(a, b){
    let tmp=b
    b=a
    a=tmp
    // return [a,b]
    return {a,b}
}
console.log(swap(1,2))
*/

function swap(a, b){
    return [b,a]
 }
 const [a,b]=swap(1,2)
 console.log(a)
 console.log(b)