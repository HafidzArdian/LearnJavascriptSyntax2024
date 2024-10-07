//  JSON   =    (Javascript Object Notation) data interchange format
//              used for exchanging data between a server and web apps
//              JSON file {Key:Value} or [value1, value2, value3]

//              JSON.stringify() = convert javascript object to JSON String
//              JSON.parse() = convert JSON String to javascript object

// const names = [
//   "Spongebob",
//   "Patrick",
//   "Squidward",
//   "Sandy",
//   "Mr. Krabs",
//   "Plankton",
//   "Sandy",
//   "Squidward",
//   "Sandy",
// ];

// const person = {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["karate", "jellyfishing", "cooking"]
// }

// const people = [{
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true
// },
// {
//     "name": "Patrick",
//     "age": 25,
//     "isEmployed": false
// },{
//     "name": "Squidward",
//     "age": 35,
//     "isEmployed": true
// },
// {
//     "name": "Sandy",
//     "age": 40,
//     "isEmployed": false
// }];

// const jsonString = JSON.stringify(people);
// console.log(jsonString);

// JSON.parse() = convert JSON String to javascript object

const names = `[
    "Spongebob",
    "Patrick",
    "Squidward",
    "Sandy",
    "Mr. Krabs",
    "Plankton",
    "Sandy",
    "Squidward",
    "Sandy"
  ]`;

const person = `{
      "name": "Spongebob",
      "age": 30,
      "isEmployed": true,
      "hobbies": ["karate", "jellyfishing", "cooking"]
  }`;

const people = `[{
      "name": "Spongebob",
      "age": 30,
      "isEmployed": true
  },
  {
      "name": "Patrick",
      "age": 25,
      "isEmployed": false
  },{
      "name": "Squidward",
      "age": 35,
      "isEmployed": true
  },
  {
      "name": "Sandy",
      "age": 40,
      "isEmployed": false
  }]`;

const parsedData = JSON.parse(people);
console.log(parsedData)


// fetch("people.json")

// fetch("people.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((element) => {
//       console.log(element.age);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
