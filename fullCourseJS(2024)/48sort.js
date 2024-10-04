// sort() = method used to sort the elements of an array in place.
//          sorts elements as string in lexicographical order, not 
//          alphabetical order.
//          lexicographic = (alphabet + numbers + symbols) as Strings

// let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Watermelon"];


// fruits.sort();
// console.log(fruits);

// let numbers = [1, 10, 2, 3, 4, 5, 6, 7, 8, 9, -1, 22];

// numbers.sort((a,b) => b - a);
// console.log(numbers)

const people = [
    { name: "Spongebob", age: 30, gpa: 3.0 },
    { name: "Patrick", age: 25 ,gpa: 1.5},
    { name: "Sandy", age: 40, gpa: 4.0 },
    { name: "Squidward", age: 35 , gpa: 1.0},
];

// people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => a.gpa - b.gpa);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people)