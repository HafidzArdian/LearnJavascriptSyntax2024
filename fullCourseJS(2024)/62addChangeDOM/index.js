// ------ example 1 ------

// Step 1 Create the element
const newH1 = document.createElement("h1"); // <h1></h1>

// Step 2 Add Atributes/Properties
newH1.textContent = "Spongebob Squarepants";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";



// Step 3 Append Element TO DOM
// document.body.appendChild(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").appendChild(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newElement, currentElement);
// box2.insertBefore(newH1, box2.firstChild);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3]);




// Step 4 Remove Element FROM DOM
// document.body.removeChild(newH1);
document.getElementById("box1").removeChild(newH1);



// ------ example 2 ------
// Step 1 Create the element
const newListItem = document.createElement("li");

// Step 2 Add Atributes/Properties
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.backgroundColor = "green";
newListItem.style.fontWeight = "bold";


// Step 3 Append Element TO DOM
// document.body.appendChild(newListItem);
// document.getElementById("fruits").appendChild(newListItem);
// document.getElementById("apple").appendChild(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem,banana);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem,listItems[2]);


// Step 4 Remove Element FROM DOM
// document.body.removeChild(newListItem);
document.getElementById("fruits").removeChild(newListItem)