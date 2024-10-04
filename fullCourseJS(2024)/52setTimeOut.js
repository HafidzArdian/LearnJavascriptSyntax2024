// setTimeout() = function in Javascript that allows youe to schedule
//                 the execution of a function after an amount of time ( miliseconds )
//                  Times are approximate ( varias  based on the workload of the javacsript runtime env.)

//                  setTimeout(callback, delay);
//   clearTimeout(timeoutId)= cancel a timeout before it triggers

// setTimeout(function sayHello() {
//     console.log("Hello");
// }, 3000);
// console.log("World");

// const timeoutId = setTimeout(function sayHello() {
//   console.log("Hello");
// }, 3000);

// clearTimeout(timeoutId);
// console.log("World");
let timeoutId;
function startTimer(){
    timeoutId = setTimeout(function(){
        console.log("Hello");
    },3000)
    console.log("Start Timer"); 
}

function clearTimer(){
    clearTimeout(timeoutId)
    console.log("Clear Timer");
}

