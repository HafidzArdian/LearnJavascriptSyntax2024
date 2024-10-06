// Nodelist  = Static collection of html elements by (id,class, element)
//              Can Be created by using querySelectorAll()
//              Similiar to an array, but it's not (Map, reduce, filter)
//              Nodelist wont update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// // add HTML/css properties

// buttons.forEach(button => {
//     button.style.backgroundColor = "lightblue";
//     button.style.color = "black";
//     button.textContent += "😋";
// });

// // CLick event Listner

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "red";
//     });
// })

// Mouse Over + Mouse Out event Listner

// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "red";
//   });
// });
  
// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "lightblue";
//   });
// });

// const newButton = document.createElement("button"); //Step 1

// newButton.textContent = "Button 5"; //Step 2
// newButton.classList.add("myButtons");

// document.querySelector("body").appendChild(newButton);//Step 3

// buttons = document.querySelectorAll(".myButtons");

// Remove an Element

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons);
  });
})