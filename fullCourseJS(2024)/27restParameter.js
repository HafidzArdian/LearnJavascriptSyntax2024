// rest parameter = (...) allow a function work with a variable number
//                  of arguments by bundling them into an array

//                  Spread = expands an array into separate elements
//                   rest = bundles separate elements into an array

// function openFridge(...foods) {
//     console.log(foods);
// }
// function getFoood(...foods) {
//     return foods;
// }

// const food1 = "Pizza";
// const food2 = "Burger";
// const food3 = "Ice cream";
// const food4 = "Coke";

// openFridge(food1, food2, food3, food4)

// const foods = getFoood(food1, food2, food3, food4);
// console.log(foods)

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// function getAverage(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//       result += number;
//     }
//     return result / numbers.length;
//   }

// const total = getAverage(50,25,25,25);
// console.log(`Your total is $${total}`);

function combineString(...strings) {
    return strings.join(" ");
  }
  const fullname = combineString("Mr.", "Spongebob", "Squarepants", "III");
  
  console.log(fullname);
  