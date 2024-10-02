// spread operator = ... allows an iterable such as an array or string
//                      to be expanded into separate elements
//                      (unpacks the elements)

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(maximum, minimum);

// let username = "BroCode";
// let letters = [...username].join("-");

// console.log(letters)

let fruits = ["apple", "banana", "mango"];
let vegetables = ["potato", "carrot", "onion"];
let foods = [...fruits, ...vegetables];

console.log(foods)