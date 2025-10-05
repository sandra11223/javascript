const students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];
// let Score=students.filter(student=>student.score>70);
// console.log(Score);
// const gradedStudents = students.map(student => {
//   let grade;
//   if(student.score>=90){
//     grade='A';
//   }
//   else if(student.score>=80){
//     grade='B';
//   }
//   else if(student.score>=70){
//     grade='C';
//   }
//   else if(student.score>=70){
//     grade='D';
//   } else{
//     grade='F';
//   }
//   return {student, grade };
// });

// console.log(gradedStudents);

// const Score= students.reduce((sum, student) => sum+student.score,0);
// console.log("Total Score of All Students:", Score);
// const totalScore = students.reduce((sum, student) => sum + student.score, 0);
// const averageScore = totalScore / students.length;
// console.log("Average score of All Students:",averageScore);

const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / students.length;
const aboveAverageStudents = students.filter(student => student.score > averageScore);
console.log("Students who scored above the average:");
aboveAverageStudents.forEach(student => {
    console.log(`${student.name} - ${student.score}`);
});

