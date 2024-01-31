// 5.
let mixedArray = [42, "hello", {name: "Joe", surname: "Doe"}, true,56,false, {name:"John", surname: "Smith"}, {name: "Joy", surname: "Stein"}];

// console.log(mixedArray[2]);
// console.log(mixedArray[6]);
// console.log(mixedArray[7]);

 
for (let element of mixedArray) {
  if (typeof element === 'object' && element !== null) {
    console.log(element);
  }
}