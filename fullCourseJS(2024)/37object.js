//  Object = A collection of related properties and/or methods
//           Can represent real world objects (People, product, places)
//           Object = {Key: Value,
//                      function(){}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function () {
      console.log("Hi, I am Spongebob Squarepants");
    },
    eat: function () {
      console.log("I am eating a Krabby Patty");
    },
  };
  
  const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 25,
    isEmployed: false,
    sayHello: () => {
      console.log("Hi, I am Patrick ....");
    },
    eat: () => {
      console.log("I am eating a roast Beef,Chiken, and Pizza");
    },
  };
  
  person1.eat();
  person2.eat();
  console.log(person2.firstName);
  console.log(person2.lastName);
  