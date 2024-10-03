// Arrow Functions = a concise way to write functions expression
//                   good for simple functions that you use only once
//                  (parameters) => some code

// const hello = function(){
//     console.log("Hello");
// }

// hello();

// const hello = (name, age) => {
//   console.log(`hello ${name}`);
//   console.log(`You are ${age} years old`);
// };

// hello("Bro", 21);

// setTimeout(() => {
//   console.log("Hello");
// }, 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));

const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(`This even numbers: ${evenNums}`);
console.log(`This odd numbers: ${oddNums}`);
console.log(`This total: ${total} from ${numbers}`);

console.log(`This squares: ${squares}, and cubes: ${cubes}`);
