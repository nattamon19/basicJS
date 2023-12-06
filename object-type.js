let person = ["Bangkok", "Aungkoon", "Kongpet", 29, "Male"];
let person_obj = {firstname:"Aungkoon", lastname:"Kongpet", age:29, gender:"Male", address:"Bangkok"}; // key:value

console.log(person[2]);
console.log(person_obj["firstname"]); // get data by key

person_obj["address"] = "London"; // edit data by key
person_obj["tel"] = "0123456789"; // add new data by key and value

console.log(person_obj);

delete person_obj["lastname"]; // remove data by index

console.log(person_obj);

for(let k in person_obj) {
    console.log(person_obj[k]);
}

