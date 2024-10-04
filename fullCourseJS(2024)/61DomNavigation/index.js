// DOM Navigation = the process of navigation through the structure
//                  of an html document using javascript

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "red";

// ---------------------- .firstelementchild ----------------------
// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((element) => {
//   const firstChild = element.firstElementChild;
//   firstChild.style.backgroundColor = "red";
// })

// ---------------------- .lastelementchild ----------------------

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((element) => {
//   const lastChild = element.lastElementChild;
//   lastChild.style.backgroundColor = "red";
// })

// // ---------------------- .nextElementSibling ----------------------

// const element = document.getElementById("vegetables");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "red";



// // ---------------------- .previousElementSibling ----------------------


// const element = document.getElementById("pudding");
// const nextSibling = element.previousElementSibling;
// nextSibling.style.backgroundColor = "red";

// // ---------------------- .parentElement ----------------------
// const element = document.getElementById("tomato");
// const parentElement = element.parentElement;
// parentElement.style.backgroundColor = "red";




// // ---------------------- .children ----------------------

const element = document.getElementById("fruits");
const children = element.children;

children[2].style.backgroundColor = "red";
// Array.from(children).forEach((child) => {
//   child.style.backgroundColor = "red";
// })