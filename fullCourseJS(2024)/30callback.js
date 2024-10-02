// callback = a function that is passed as an argument to another function
//            to antoher function

//              used to handle asynchronous operation:
//              1.Reading a file
//              2.Network Request
//              3.Interacting with Databases

//              "Hey, When Youre Done, Call this next"

// hello();
// goodBye();
// function hello() {
//   setTimeout(function () {
//     console.log("Hello!");
//   }, 3000);
// }

// function goodBye() {
//   console.log("GoodBye");
// }

// hello(goodbye);

// function hello(callback){
//     console.log("Hello");
//     callback();
// }
// function wait(){
//     console.log("WAIT !")
// }
// function leave(){
//     console.log("leave")
// }
// function goodbye(){
//     console.log("GoodBye")
// }

sum(displayPage,1,9)
function sum (callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}