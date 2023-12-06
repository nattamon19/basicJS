// forward loop
/*for(let i=0; i<4; i++) { // (start; stop; step) 0-9 => 0,2,4,6,8
    console.log(i);
}*/

// backward loop
/*for(let i=10; i>0; i--) {
    console.log(i);
}*/

// 1+2+3+4+5+6
let sum = 0;
for(let i=1; i<=10; i++) {
    sum = sum + i;
} // end loop
console.log("my sum = "+sum);


// 8! = 8*7*6*.....*1
let fac = 1;
for(let i=5; i>=1; i--) {
    fac = fac * i;
}
console.log("my fac = "+fac);
/*
    round 1
    - i=1
    - sum = 0+1 = 1

    round 2
    - i=2
    - sum = 1+2 = 3

    round 3
    - i=3
    - sum = 3+3 = 6

    ....
*/