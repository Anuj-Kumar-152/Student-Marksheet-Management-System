




const form = document.getElementById("studentForm");

const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const rollInput = document.getElementById("rollNumber");

const physicsInput = document.getElementById("physics");
const chemistryInput = document.getElementById("chemistry");
const mathsInput = document.getElementById("maths");
const hindiInput = document.getElementById("hindi");
const englishInput = document.getElementById("english");

const table = document.getElementById("studentTable");



let students;

try {
   students = JSON.parse(localStorage.getItem("students"));
   if (!Array.isArray(students)) students = [];
} catch (error) {
   students = [];
}



class Student {
   constructor(name, email, rollNumber) {
      this.name = name;
      this.email = email;
      this.rollNumber = rollNumber;
   }
}



class MarkSheet extends Student {
   constructor(name, email, rollNumber, physics, chemistry, maths, hindi, english) {
      super(name, email, rollNumber);
      this.physics = physics;
      this.chemistry = chemistry;
      this.maths = maths;
      this.hindi = hindi;
      this.english = english;
   }

   totalMarks() {
      return (
         Number(this.physics) +
         Number(this.chemistry) +
         Number(this.maths) +
         Number(this.hindi) +
         Number(this.english)
      );
   }

   percentage() {
      return (this.totalMarks() / 500) * 100;
   }
}


form.addEventListener("submit", function (e) {
   e.preventDefault();

    
   const phy = Number(physicsInput.value);
   const chem = Number(chemistryInput.value);
   const math = Number(mathsInput.value);
   const hin = Number(hindiInput.value);
   const eng = Number(englishInput.value);

    
   if (
      phy < 0 || phy > 100 ||
      chem < 0 || chem > 100 ||
      math < 0 || math > 100 ||
      hin < 0 || hin > 100 ||
      eng < 0 || eng > 100
   ) {
      alert("Please enter valid marks (0 to 100)");
      return;
   }

   const student = new MarkSheet(
      nameInput.value,
      emailInput.value,
      rollInput.value,
      phy,
      chem,
      math,
      hin,
      eng
   );

   students.push(student);
   saveData();
   displayStudents();
   form.reset();
});




function saveData() {
   localStorage.setItem("students", JSON.stringify(students));
}



function displayStudents() {
   table.innerHTML = "";

   students.forEach((s, index) => {

      const marksheet = new MarkSheet(
         s.name,
         s.email,
         s.rollNumber,
         s.physics,
         s.chemistry,
         s.maths,
         s.hindi,
         s.english
      );

      const row = `
      <tr>
        <td>${s.name}</td>
        <td>${s.email}</td>
        <td>${s.rollNumber}</td>
        <td>${marksheet.totalMarks()}</td>
        <td>${marksheet.percentage().toFixed(2)}%</td>
        <td>
          <button onclick="deleteStudent(${index})">Delete</button>
          <button onclick="editStudent(${index})">Edit</button>
        </td>
      </tr>
      `;

      table.innerHTML += row;
   });
}



function deleteStudent(index) {
   students.splice(index, 1);
   saveData();
   displayStudents();
}



function editStudent(index) {
   const s = students[index];

   nameInput.value = s.name;
   emailInput.value = s.email;
   rollInput.value = s.rollNumber;
   physicsInput.value = s.physics;
   chemistryInput.value = s.chemistry;
   mathsInput.value = s.maths;
   hindiInput.value = s.hindi;
   englishInput.value = s.english;

   students.splice(index, 1);
   saveData();
   displayStudents();
}



displayStudents();





// const form = document.getElementById("studentForm");

// const nameInput = document.getElementById("username");  
// const emailInput = document.getElementById("email");
// const rollInput = document.getElementById("rollNumber");

// const physicsInput = document.getElementById("physics");
// const chemistryInput = document.getElementById("chemistry");
// const mathsInput = document.getElementById("maths");
// const hindiInput = document.getElementById("hindi");
// const englishInput = document.getElementById("english");

// const table = document.getElementById("studentTable");


 
// let students;

// try {
//    students = JSON.parse(localStorage.getItem("students"));
//    if (!Array.isArray(students)) students = [];
// } catch (error) {
//    students = [];
// }


 
// class Student {
//    constructor(name, email, rollNumber) {
//       this.name = name;
//       this.email = email;
//       this.rollNumber = rollNumber;
//    }
// }


 
// class MarkSheet extends Student {
//    constructor(name, email, rollNumber, physics, chemistry, maths, hindi, english) {
//       super(name, email, rollNumber);
//       this.physics = physics;
//       this.chemistry = chemistry;
//       this.maths = maths;
//       this.hindi = hindi;
//       this.english = english;
//    }

//    totalMarks() {
//       return (
//          Number(this.physics) +
//          Number(this.chemistry) +
//          Number(this.maths) +
//          Number(this.hindi) +
//          Number(this.english)
//       );
//    }

//    percentage() {
//       return (this.totalMarks() / 500) * 100;
//    }
// }


 
// form.addEventListener("submit", function (e) {
//    e.preventDefault();

//    const student = new MarkSheet(
//       nameInput.value,
//       emailInput.value,
//       rollInput.value,
//       physicsInput.value,
//       chemistryInput.value,
//       mathsInput.value,
//       hindiInput.value,
//       englishInput.value
//    );

//    students.push(student);
//    saveData();
//    displayStudents();
//    form.reset();
// });


 
// function saveData() {
//    localStorage.setItem("students", JSON.stringify(students));
// }


 
// function displayStudents() {
//    table.innerHTML = "";

//    students.forEach((s, index) => {

//       const marksheet = new MarkSheet(
//          s.name,
//          s.email,
//          s.rollNumber,
//          s.physics,
//          s.chemistry,
//          s.maths,
//          s.hindi,
//          s.english
//       );

//       const row = `
//       <tr>
//         <td>${s.name}</td>
//         <td>${s.email}</td>
//         <td>${s.rollNumber}</td>
//         <td>${marksheet.totalMarks()}</td>
//         <td>${marksheet.percentage().toFixed(2)}%</td>
//         <td>
//           <button onclick="deleteStudent(${index})">Delete</button>
//           <button onclick="editStudent(${index})">Edit</button>
//         </td>
//       </tr>
//       `;

//       table.innerHTML += row;
//    });
// }


 
// function deleteStudent(index) {
//    students.splice(index, 1);
//    saveData();
//    displayStudents();
// }


 
// function editStudent(index) {
//    const s = students[index];

//    nameInput.value = s.name;
//    emailInput.value = s.email;
//    rollInput.value = s.rollNumber;
//    physicsInput.value = s.physics;
//    chemistryInput.value = s.chemistry;
//    mathsInput.value = s.maths;
//    hindiInput.value = s.hindi;
//    englishInput.value = s.english;

//    students.splice(index, 1);
//    saveData();
//    displayStudents();
// }


 
// displayStudents();
