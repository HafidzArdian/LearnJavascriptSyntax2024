// ================================================ function declaration   ================================================
// function declaration = define a reusable block of code
//                        that performs a spesific task

// function hello(){
//     console.log("Hello");
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);
// console.log(squares);
// function square(element){
//     return Math.pow(element, 2);
// }
// ================================================ function expression ================================================
// function expression = a way to define a function as
//                       values or variable

// const helllo = function(){
//     console.log("Hello");
// }

// helllo();

// setTimeout(function(){
//     console.log("Hello");
// },3000)

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares);
