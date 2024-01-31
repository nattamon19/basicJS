// const stds = { a: 0, b: 1 };
const stds = ["a", "b"];
for (const name in stds) {
  console.log("Greeting " + stds[name]);
}

console.log("-----");
// for (const name of stds) {
//   console.log("Greeting " + name);
// }

const dataSet1 = ["Male", "Female", "Male", "Female", "Male", "Female"];
let count = 0;
let countF = 0;
for (const sex of dataSet1) {
  if (sex === "Male") {
    count++;
  } else if (sex === "Female") {
    countF++;
  }
}
console.log(count);
console.log(countF);
console.log("-----/");

let students = [
  { id: 1, name: "A", age: 11 },
  { id: 2, name: "B", age: 12 },
  { id: 3, name: "C", age: 13 },
];

let filterStds = students.filter((value, index, array) => {
  console.log(value.age === 12);
  return value.age === 12;
});
console.log(filterStds);

let filterID = students.sort((stdA, stdB) => {
  return stdA.id - stdB.id;
});
console.log(students);

let menu = ["Omlette", "Tom Yam", "Kraprow"];
menu.splice(3, 0, "A");
console.log(menu);

// for (const elm of students) {
//   console.log("Profile: " + elm.id + ", " + elm.name + ", age " + elm.age);
// }

// function showStudentProfiles() {
//   let studentss = [
//     { id: 1, name: "A", age: 11 },
//     { id: 2, name: "B", age: 12 },
//     { id: 3, name: "C", age: 13 },
//   ];
//   for (const student of studentss) {
//     if (student.id === 1 && student.id === 2) {
//       //   const { id, name, age } = student;
//       const profile =
//         "Profile: " + student.id + ", " + student.name + ", age " + student.age;
//       console.log(profile);
//     }
//   }
// }
// console.log("shws: " + showStudentProfiles());

// Call the function to display profiles for students with id 1 and 2
console.log(showStudentProfiles());

for (let index = 0; index < 10; index++) {
  console.log(students[index]?.name);
}
