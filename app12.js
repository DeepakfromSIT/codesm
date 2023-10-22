// function name() {
//   console.log("Welcome");
// }

// function papa() {
//   console.log("Wel Done");
// }

// function sum(num1, num2, hello) {
//   console.log(num1 + num2);
//   hello();
// }

// sum(10, 80, name);
// sum(10, 80, papa);
// sum(10, 80, function app() {
//   console.log("Quick one");
// });

//PROMISE CHAINING
// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success:data was saved");
//     } else {
//       reject(" fail:weak connection");
//     }
//   });
// }

// saveToDb("Apna College")
//   .then((result) => {
//     console.log("promise was resolved");
//     console.log("result of promises:", result);
//     return saveToDb("hello World");
//   })
//   .then((result) => {
//     console.log("Promise was resoved");
//     console.log("result of promises:", result);
//     return saveToDb("namaste india");
//   })
//   .then((result) => {
//     console.log("Promise was resolved");
//     console.log("result of promises:", result);
//   })
//   .catch((error) => {
//     console.log("Promise was rejected");
//     console.log("error of promises:", error);
//   });

//color change

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("Color changed");
//     }, delay);
//   });
// }

// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("orange color was completed");
//     return changeColor("blue", 1000);
//   })
//   .catch(() => {
//     console.log("color was not completed");
//   });

// let jsonRes = {
//   fact: "Phoenician cargo ships are thought to have brought the first domesticated cats to Europe in about 900 BC.",
//   length: 105,
// };

// let validRes = JSON.parse(jsonRes);
