// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//   console.log("Button was clicked");
// };

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
// /  btn.onclick = onButton;
//   console.dir("button");
//   btn.onmouseenter = function () {
//     console.log("Was finish");
//   };

//   btn.addEventListener("dblclick", onButton);
//   btn.addEventListener("dblclick", sayName);
// }
// function onButton() {
//   alert("Was submitted");
// }
// function sayName() {
//   alert("Hello!");
// }

// btns.onclick = onButton;

//Activity

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let randomColor = getRandomColor();
//   h3.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.background = randomColor;

//   console.log("Colour Updated");
// });

// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red}, ${green}, ${blue})`;
//   return color;
// }

//New thinks;

// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//   console.log("Para was generated");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//   console.log("mouse inside box");
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log(this.innerText);
//   this.style.backgroundColor = "red";
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("Submit");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {
//   console.log("code = ", event.code);

//   if (event.code == "KeyU") {
//     console.log("charrater do unkel");
//   } else if (event.code == "KeyD") {
//     console.log("charater move down word");
//   } else if (event.code == "KeyR") {
//     console.log("charater move right word");
//   } else if (event.code == "KeyL") {
//     console.log("charater move left word");
//   }
// });

//FORM EVENT
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let user = document.querySelector("#user");
//   let password = document.querySelector("#pass");

//   console.log(user.value);
//   console.log(pass.value);

//   alert(`Hi ${user.value}, this is your password ${pass.value}`);
// });

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let user = this.element[0];
//   let pass = this.elements[1];

//   console.log(user.value);
//   console.log(pass.value);

//   alert(`Hi ${user.value}, this is your password ${pass.value}`);
// });

//change event

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

// let inp = document.querySelector("#user");

// inp.addEventListener("change", function () {
//   console.log(" changed event");
//   console.log("final value =", this.value);
// });

// inp.addEventListener("input", function () {
//   console.log("input changed");
//   console.log("final value =", this.value);
// });

//Activity

// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input", function () {
//   console.log(inp.value);
//   p.innerText = inp.value;
// });

//Pratice question..
// let btn = document.getElementById("btn");

// btn.addEventListener("click", function onClick(event) {
//   console.log(event.target);
//   event.target.style.backgroundColor = "yellowGreen";
// });

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function onClick(event) {
//   btn.style.backgroundColor = "salmon";
//   btn.style.color = "white";
// });

// const btn = document.getElementById("btn");

// btn.addEventListener("click", function onClick() {
//   btn.style.backgroundColor = "salmon";
//   btn.style.color = "white";
// });

// const btn = document.getElementById("btn");

// let index = 0;

// const colors = ["salmon", "green", "blue", "purple"];

// btn.addEventListener("click", function onClick() {
//   btn.style.backgroundColor = colors[index];
//   btn.style.color = "white";

//   index = index >= colors.length - 1 ? 0 : index + 1;
// });

// THIRD QUESTION.

let inp = document.querySelector("#input");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function () {
  console.log(inp.value);
  h2.innerText = inp.value;
});

//NEXT
// let btn = document.getElementById("btn");
// btn.addEventListener("mouseout", function (event) {
//   event.target.style.color = "orange";
// });

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//   console.log("div was selected");
// });

// ul.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("ul was selected");
// });

// for (li of lis) {
//   li.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("li was selected");
//   });
// }

//ACTIVITY : IMP

// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function () {
//   let item = document.createElement("li");
//   item.innerText = inp.value;

//   let delBtn = document.createElement("button");
//   delBtn.innerText = "delete";
//   delBtn.classList.add("delete");

//   item.appendChild(delBtn);
//   ul.appendChild(item);
//   console.log(inp.value);
//   inp.value = "";
// });

// ul.addEventListener("click", function (event) {
//   if (event.target.nodeName == "BUTTON") {
//     let listItem = event.target.parentElement;
//     listItem.remove();
//     console.log("deleted");
//   }
// });

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }
