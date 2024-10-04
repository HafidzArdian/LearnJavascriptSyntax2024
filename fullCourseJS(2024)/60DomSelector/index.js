//  DOM

// const username = "";

// const welcomeMsg = document.getElementById("myH1");
// welcomeMsg.textContent += username === "" ? " Guest" : username;

// ========================== Elements selector ==========================

// 1. document.getElementById()                 //Element or Null
// 2. document.getElementsByClassName()         //HTML Collection
// 3. document.getElementsByTagName()           //HTML Collection
// 4. document.querySelector()                  //Element or Null
// 5. document.querySelectorAll()               //Node List

//  ========================= ID selector ==========================
// const myHeading = document.getElementById("myHeading");

// myHeading.style.backgroundColor = "blue";
// myHeading.style.color = "white";
// myHeading.style.fontSize = "50px";
// myHeading.style.textAlign = "center";

//  ========================= Class selector ==========================
// const fruits = document.getElementsByClassName("fruits");

// console.log(fruits);
// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "darkblue";
//   fruit.style.color = "white";
//   fruit.style.fontSize = "50px";
//   fruit.style.textAlign = "center";
// }

// not use forEach because it is not an array
// use ArrayFrom() to convert HTML Collection to Array
// Array.from(fruits).forEach((fruit) => {
//   fruit.style.backgroundColor = "darkblue";
//   fruit.style.color = "white";
//   fruit.style.fontSize = "50px";
//   fruit.style.textAlign = "center";
// })

//  ========================= Tag selector ==========================

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");
// console.log(h4Elements);

// h4Elements[0].style.backgroundColor = "red";
// for (let h4 of h4Elements) {
//   h4.style.backgroundColor = "red";
//   h4.style.color = "white";
//   h4.style.fontSize = "30px";
//   h4.style.textAlign = "center";
// }

// for(let liElement of liElements){
//   liElement.style.backgroundColor = "green";
//   liElement.style.color = "white";
//   liElement.style.fontSize = "20px";
//   liElement.style.textAlign = "center";
// }

// not use forEach because it is not an array
// use ArrayFrom() to convert HTML Collection to Array
// Array.from(h4Elements).forEach((h4) => {
//   h4.style.backgroundColor = "red";
//   h4.style.color = "white";
//   h4.style.fontSize = "30px";
//   h4.style.textAlign = "center";
// })

//  ========================= Query selector ==========================
// First element
// const element = document.querySelector("h4");

// element.style.backgroundColor = "skyblue"


//  ========================= Query selector  All ==========================
// nodelist

const foods = document.querySelectorAll("li");

// fruits[0].style.backgroundColor = "red";
foods.forEach((food) => {
  food.style.backgroundColor = "red";
})


