// this = reference to the object where THIS is used
//         (the object depends on the immediate context)

//          person.name = this.name

// const person1 = {
//   name: "Spongebob",
//   favFood: "Hamburger",
//   sayHello: function () {
//     console.log(`Hi, my name is ${this.favFood}`);
//   },
//   eat: function () {
//     console.log(`${this.name}, is eating ${person1.favFood}`);
//   },
// };

// const person2 = {
//     name: "Patrick",
//     favFood: "Pizza",
//     sayHello: function () {
//       console.log(`Hi, my name is ${this.favFood}`);
//     },
//     eat: function () {
//       console.log(`${this.name}, is eating ${person2.favFood}`);
//     },
//   };

// person1.eat();
// person2.eat();

// console.log(this)

//  ======================  Doesn't work with arrow functions =================

const person1 = {
    name: "Spongebob",
    favFood: "Hamburger",
    sayHello: function () {
      console.log(`Hi, my name is ${this.favFood}`);
    },
    eat: function () {
      console.log(`${this.name}, is eating ${person1.favFood}`);
    },
  };
  
  const person2 = {
      name: "Patrick",
      favFood: "Pizza",
      sayHello: function () {
        console.log(`Hi, my name is ${this.favFood}`);
      },
      eat: () => {
        console.log(`${this.name}, is eating ${this.favFood}`);
      },
    };
  
  person1.eat();
  person2.eat();