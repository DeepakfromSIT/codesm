// function hello() {
//   console.log("Hello");
// }

// function number() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }

// function isAdult() {
//   let age = 15;
//   if (age >= 18) {
//     console.log("Adult");
//   } else {
//     console.log("not adult");
//   }
// }

// isAdult();

// function printPoem() {
//   console.log("Twinkle Twinkle little star");
//   console.log("how I wonder what you want");
// }

// printPoem();
// printPoem();

// function dice() {
//   let rand = Math.floor(Math.random() * 6) + 1;
//   console.log(rand);
// }

// dice();

// FUNCTIONS WITH ARGUMEN

// function printInfo(name, age) {
//   console.log(`${name}'s age is ${age}`);
// }

// printInfo("Deepu", 45);
// printInfo("Kamal", 43);

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(4, 5);
// sum(4, 80);
// sum(4, 50);
// sum(40, 5);

// function sumAvg(a, b, c) {
//   let avg = (a + b + c) / 3;
//   console.log(avg);
// }

// sumAvg(20, 20, 20);

// function printTable(n) {
//   for (i = n; i <= n * 10; i = i + n) {
//     console.log(i);
//   }
// }

// printTable(8);

// function isAdult(age) {
//   if (age >= 18) {
//     return "Adult";
//   } else {
//     return "Not Adult";
//   }
// }

// console.log(isAdult(13));

// function getSum(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// let str = ["hi", "baby", "kya huwa", "aap ko"];

// function concat(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     result = result + str[i];
//   }
//   return result;
// }

// {
//   let a = 233;
// }

// console.log(a);

// let greet = "Hello";

// function changeGreet() {
//   let greet = "namaste";
//   console.log(greet);

//   function innerGreet() {
//     console.log(greet);
//   }
//   innerGreet();
// }

// console.log(greet);
// changeGreet();

// let greet = function () {
//   console.log("Namaste");
// };

// greet();

// function multiGreet(fun, count) {
//   for (let i = 1; i <= count; i++) {
//     fun();
//   }
// }

// let greet = function () {
//   console.log("BAby Girl");
// };

// multiGreet(function () {
//   console.log("Kisss");
// }, 5);

// function oddEvenTest(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("Wrong item");
//   }
// }

// let request = "odd";

// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },

//   sub: function (a, b) {
//     return a - b;
//   },

//   mul: function (a, b) {
//     return a * b;
//   }
// };

// let arr = [2, 8, 9, 1, 3, 4, 5, 7, 6];
// let num = 5;

// function getElement(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       console.log(num);
//     }
//   }
// }

// getElement(arr, num);

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num1 = 3;

// function get(arr1, num1) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > num1) {
//       console.log(arr1[i]);
//     }
//   }
// }

// get(arr1, num1);

// const student = {
//   name: "Deepu",
//   age: 22,
//   eng: 44,
//   math: 49,
//   phy: 50,

//   getAvg() {
//     console.log(this);
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(avg);
//   },
// };

// console.log("Hello");
// console.log("Hello");
// let a = 10;
// try {
//   console.log(a);
// } catch {
//   console.log("caugh an error : a in not define");
// }
// console.log("Hello");
// console.log("Hello");

// const sum = (a, b) => a + b;

// sum(1, 5);

// const cube = (n) => {
//   console.log(n * n * n);
// };

// cube(5);

// const power = (a, b) => {
//   console.log(a ** b);
// };
// power(2, 3);

// console.log("Hi there");

// setTimeout(() => {
//   console.log("Apna college");
// }, 4000);

// console.log("Welcome");

// console.log("Hi there");

// let id = setInterval(() => {
//   console.log("Apna college");
// }, 2000);

// console.log("Welcome");
// console.log(id);

// const squre = (a) => {
//   console.log(a * a);
// };
// squre(5);

// let id = setInterval(() => {
//   console.log("hello world");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("Finish it");
// }, 10000);

// const arrAverage = (arr) => {
//   let total = 0;

//   for (let number of arr) {
//     total = total + number;
//   }
//   return total / arr.length;
// };

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arrAverage(arr));

// let num = 50;
// const isEven = (num) => num % 2 == 0;
// console.log(isEven);

// function sum(a, b) {
//   return a * b;
// }

// console.log(sum(sum(3, 4), 5));

// function isAdult(age) {
//   if (age <= 18) {
//     return "NOt Adult";
//   } else {
//     return "Adult";
//   }
//   console.log("Happy");
// }

// function getSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result = result + str[i];
//   }
//   return result;
// }

// let greet = "Hello";

// function changeGreet() {
//   let greet = "namaste";
//   console.log(greet);

//   function innerGreet() {
//     console.log(greet);
//   }
//   innerGreet();
// }

// console.log(greet);
// changeGreet();

// function multiGreet(func, count) {
//   for (let i = 1; i <= count; i++) {
//     func();
//   }
// }

// let greet = function () {
//   console.log("Hello");
// };

// multiGreet(greet, 10);

// function oddEvenTest(request) {
//   if (request == "odd") {
//     let odd = function (n) {
//       console.log(n % 2 != 0);
//     };
//     return odd;
//   } else if (request == "even") {
//     let even = function (n) {
//       console.log(n % 2 == 0);
//     };
//     return even;
//   } else {
//     console.log("Wrong request");
//   }
// }

// let request = "even";

const calculator = {
  num: 30,

  add: function (a, b) {
    return a + b;
  },

  sub: function (a, b) {
    return a - b;
  },

  mul: function (a, b) {
    return a * b;
  },
};
