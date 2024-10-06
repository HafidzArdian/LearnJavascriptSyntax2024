// ClassList = Element property in Javascript used to interact
//              With an elements list of classes (css classes)
//              allows you to make reusable classses for many elements
//              across your webpage
const myH1 = document.getElementById("myH1");
const myButtons = document.getElementById("myButton");

// myButtons.classList.add("enabled");
// myButtons.classList.remove("enabled");

// myButtons.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// })
// myButtons.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// })

// myButtons.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// })
// myButtons.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// })

// myButtons.classList.add("enabled");

// myButtons.addEventListener("click", event => {
//     event.target.classList.replace("enabled", "disabled");
// })

// contains()

// myH1.classList.add("enabled");
// myButtons.classList.add("enabled");

// myButtons.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "🚨";
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// });

// myH1.addEventListener("click", (event) => {
//     if (event.target.classList.contains("disabled")) {
//       event.target.textContent += "🚨";
//     } else {
//       event.target.classList.replace("enabled", "disabled");
//     }
//   });

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover");
  });

  button.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
      event.target.textContent += "🚨";
    } else {
      event.target.classList.replace("enabled", "disabled");
    }
  });
});
