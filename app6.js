// FOR EACH METHOD

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((student) => {
//   console.log(student);
// });

// let print = function (el) {
//   console.log(el);
// };

// arr.forEach(print);

// MAP METHOD

// let num = [1, 3, 4, 56];
// let double = num.map(function (el) {
//   return el * el;
// });

// let student = [
//   {
//     name: "S",
//     marks: 23,
//   },
//   {
//     name: "SA",
//     marks: 45,
//   },
//   {
//     name: "ABCS",
//     marks: 73,
//   },
// ];

// let newArr = student.map((el) => {
//   return el.marks / 10;
// });

// FILTER METHOD

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let baby = num.filter((el) => {
//   return el > 5;
// });

//EVERY METHOD

// let arr = [8, 4];
// let num = arr.some((el) => {
//   return el % 2 != 0;
// });

// let arr = [1, 4, 9, 99, 998];
// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(max);

// let result = arr.reduce((max, el) => {
//   if (el > max) {
//     return el;
//   } else {
//     return max;
//   }
// });

// function sum(a = 5, b) {
//   return a + b;
// }

// REST
// function sum(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log("You Write the ", args[i]);
//   }
// }

//DESTRUCTURING
const student = {
  name: "A",
  age: 12,
  class: 5,
  password: 123,
  subject: "Hindi",
};

const { password: one, subject, city = "ABC" } = student;
