//  .map( ) = accept a callback and applies that function
//           to each element of an array
//           ,Then returns a new array

// const numbers = [1, 2, 3, 4, 5];

// const Squares = numbers.map(square);
// const cubes = numbers.map(cube);
// console.log(cubes);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube (element){
//     return Math.pow(element, 3);
// }

// const students = ["Spongebob", "Patrick", "Sandy", "Squidward"];
// const students = ["SPONGEBOB", "PATRICK", "SANDY", "SQUIDWARD"];
// // const studentsUpper = students.map(uppercase);
// const studentsLower = students.map(lowercase);
// console.log(studentsLower);

// function uppercase(element){
//     return element.toUpperCase();
// }

// function lowercase(element){
//     return element.toLowerCase();
// }

const dates = ["2020-07-10", "2020-05-12", "2020-07-30", "2020-01-24"];

const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
