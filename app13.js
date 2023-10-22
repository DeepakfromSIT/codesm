// async function id() {
//   hkkjk();
//   return "Hello world";
// }

// id()
//   .then((result) => {
//     console.log("Promise was resolved");
//     console.log("result was:", result);
//   })
//   .catch((err) => {
//     console.log("Promise was rejected");
//     console.log("Error was:", err);
//   });

// let sys = async () => {
//   return "baby ";
// };

//await keyword..

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
// }

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 5) + 1;
//       if (num > 3) {
//         reject("promise rejected");
//       }
//       h1.style.color = color;
//       console.log(`color changed to ${color}`);
//       resolve("color changed");
//     }, delay);
//   });
// }

// async function demo() {
//   try {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("purple", 1000);
//     await changeColor("blue", 1000);
//   } catch (err) {
//     console.log("error caught");
//     console.log(err);
//   }

//   let a = 5;
//   console.log(a);
//   console.log(a + 5);
// }

//JSON

// let jsonRes = '{
//   fact: "A cat’s nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
//   length: 87,
// }';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//   name: "Deepak",
//   age: 43,
// };

//OUR FIRST API REQUEST

// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     console.log(res);
//     res.json().then((data) => {
//       console.log(data);
//     });
//   })

//   .catch((err) => {
//     console.log(err);
//   });

// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data 2", data2.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data3) => {
//     console.log("data 3", data3.fact);
//   })
//   .catch((err) => {
//     console.log("erro", err);
//   });

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (e) {
    console.log("error", e);
  }
}
