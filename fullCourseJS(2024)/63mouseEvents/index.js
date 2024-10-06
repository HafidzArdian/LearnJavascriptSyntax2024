const myBox = document.getElementById("myBox");
const myButton = document.getElementById("btn");
// myBox.addEventListener('click', callback) );

// function changeColor(){
//   myBox.style.backgroundColor = 'red';
// }
// myBox.addEventListener('click', changeColor);

myButton.addEventListener("click", event => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "OUCH! 😒";
});

myButton.addEventListener("mouseover", event => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Dont touch 🙏";
});
myButton.addEventListener("mouseout", event => {
  myBox.style.backgroundColor = "lightblue";
  myBox.textContent = "Click Me 👀";
});


// event listener = listen for an event to occur in the browser
//                 and execute a function when that event occurs  


document.addEventListener("keydown", event => {
  console.log(`key pressed down: ${event.key}`);
})
document.addEventListener("keyup", event => {
  console.log(`key pressed up: ${event.key}`);
})