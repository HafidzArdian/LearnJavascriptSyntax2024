// Nested Object =  Objects inside of other objects.
//                  Allows yout represent more complex data structures
//                  child object is enclosed by a parent object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//   fullName: "Spongebob Squarepants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "jellyfishing", "cooking"],
//   address:{
//     street:"124 Conch St.",
//     city:" Bikini Bottom",
//     Country:"Underwater",
//   }
// };

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.street);

// for (const property in person.address) {
//     console.log(person.address[property]);
// }

class Person {
    constructor(name, age, ...address) {
      this.name = name;
      this.age = age;
      this.address = new Address(...address);
    }
  }
  
  class Address {
    constructor(street, city, country) {
      this.street = street;
      this.city = city;
      this.country = country;
    }
  }
  
  const person1 = new Person(
    "Spongebob",
    30,
    "124 Conch St.",
    "Bikini Bottom",
    "Underwater"
  );
  
  const person2 = new Person(
    "Patrick",
    24,
    "123 Main St.",
    "Bikini Bottom",
    "Underwater"
  );
  const person3 = new Person(
    "SquidWard",
    44,
    "1333 Main St.",
    "Bikini Bottom",
    "Underwater"
  );
  
  console.log(person2.name);
  console.log(person2.age);
  console.log(person2.address.street);
  console.log(person2.address.city);
  console.log(person2.address.country);
  