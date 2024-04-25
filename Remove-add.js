let someArray = [
               {name:"Kristian", lines:"2,5,10"},
               {name:"John", lines:"1,19,26,96"},
               {name:"Kristian", lines:"2,58,160"},
               {name:"Felix", lines:"1,19,26,96"}
            ];

someArray = someArray.filter(person => person.name != 'John');

let myArray = []; // initialize an empty array

let myObject = { name: "John", age: 25 }; // create an object

myArray.push(myObject); // add the object to the array

console.log(myArray); // Output: [{ name: "John", age: 25 }]
