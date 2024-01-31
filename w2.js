function showStudentProfiles() {
    let students = [
      { id: 9, name: "A", age: 11 },
      { id: 2, name: "B", age: 12 },
      { id: 3, name: "C", age: 13 },
    ];
  
    students.sort((a, b) => a.id - b.id);
    for (const student of students) {
      if (student.id === 9 || (student.id === 2 && student.age <= 13)) {
        const { id, name, age } = student;
        const profile = "Profile: " + id + ", " + name + ", age " + age;
        console.log(profile);
      }
    }
  }
  console.log("shws: " + showStudentProfiles());