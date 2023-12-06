let person1 = {firstname: 'Aungkoon', lastname: 'Kongpet', age: 29, gender: 'Male'};
let person_arr = [
    {firstname: 'Aungkoon', lastname: 'Kongpet', age: 29, gender: 'Male'},
    {firstname: 'David', lastname: 'Kongpet', age: 41, gender: 'Male'},
    {firstname: 'Sara', lastname: 'Kongpet', age: 27, gender: 'Male'},
    {firstname: 'Sawitree', lastname: 'Kongpet', age: 30, gender: 'Male'},
]

console.log(person1["age"]);

console.log(person_arr[2]["firstname"]);

person_arr.push({firstname: 'John', lastname: 'Doe', age: 27, gender: 'Male'})
console.log(person_arr[3]["age"]);