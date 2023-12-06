/*
    Data type of variable (primitive data types)
        - number
        - string
        - boolean
        - undefined/null
    
    Data type of variable (secordary data types)
        - array
        - object

    Operator
        1. number
            - + (2)
            - - (2)
            - * (1)
            - / (1)
            - % (mod) (1)

        2. string
            - +
        3. boolean
            - && (and)
            - || (or)
            - ! (not)
*/
var x = 5; // define variable
var y = 2;
let j = 10;
const pi = 3.1415;
var number = 12345677891122222244444444555555;
var z = 88.99;
var name = "GTA"; // `, ', ""
var boo = true;
var a;

//pi = 100000; //Error
//var x = 30; // re-create variable
j = 100; // edit variable

var result = x + y; 
var result2 = x / 0;
var result3 = x % y;
var result4 = 10+2-8/4*6; // 10+2-2*6 => 10+2-12 => 12-12 => 0
var result5 = 10+2-8*4/6;
var result6 = (((10+2)-8)*4)/6;

console.log(result);
console.log(result2);
console.log("result of "+x+"%"+y+" = "+result3);
console.log(`result of ${x}%${y} = ${result3}`); // template string
console.log("my result4 = "+result4);
console.log(result5);
console.log(result6);

console.log(name+"!!!");

console.log(boo && true); // true
console.log(boo && false); // false
console.log(false && boo); // false
console.log(false && false); // false

console.log(boo || true); // true
console.log(boo || false); // true
console.log(false || boo); // true
console.log(false || false); // false
console.log(!boo); // false



