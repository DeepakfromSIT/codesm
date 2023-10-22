// let para1 = document.createElement("p");
// para1.innerText = " Hey I am red!";
// document.querySelector("body").append(para1);
// para1.classList.add("red");

// let h3 = document.createElement("h3");
// h3.innerText = " Hey I am blue";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("para2");

// h1.innerText = "hi i am div";
// para2.innerText = "ME TOO!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector("body").append(div);

let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click Me";

let body = document.querySelector("body");

body.append(button);
body.append(input);

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

let btn = document.querySelector("#btn");
btn.classList.add("red");

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);
h1.style.color = "pink";

// h1.classList.add("blue");

let newP = document.createElement("p");
newP.innerHTML = "APNA COLLEGE <b> DELTA </b> PRACTICE";
document.querySelector("body").append(newP);
// newP.classList.add("pink");
