// destructuring = extract vallue from array or objects
//                  then assign them to variables in a convenient way
//                    [] =  to perform array destructuring
//                    {} = to perform object destructuring
//                    : = to perform variable destructuring
//                    = = to assign value to variable

//  ------------------- Example 1 -------------------
//  SWAP THE VALUES OF TWO VARIABLES

// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b);

//  ------------------- Example 2 -------------------
// Swap 2 elements in an array

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);

//  ------------------- Example 3 -------------------
//  Assign Array elements to Variable

// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);

// console.log(extraColors);

//  ------------------- Example 4 -------------------
//  Extract Values from Object

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   job:"Fry Cook",

// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 24,

// };

// const {firstName, lastName, age, job} = person1;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// const {firstName, lastName, age, job="Unemployed",} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


//  ------------------- Example 5 -------------------
//  Destructure In Function Parameters

function displayPerson({firstName, lastName, age, job="Unemployed"}) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
    
  }
  
  const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job:"Fry Cook",
  
  };
  
  const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 24,
  
  };
  
  displayPerson(person1);
  displayPerson(person2);