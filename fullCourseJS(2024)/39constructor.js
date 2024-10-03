// constructor = special method for defining the 
//               properties and methods of an object

// ========= Bad way use a lot of time to make an object ========

// const car1 = {
//     brand: "Ford",
//     model: "Mustang",
//     year: 1964,
//     color: "red",
//     drive: function () {
//         console.log(`You drive the ${this.model}`);
//     }
// };
// const car2 = {
//     brand: "Ferrari",
//     model: "LaFerrari",
//     year: 1924,
//     color: "gray",
//     drive: function () {
//         console.log(`You drive the ${this.model}`);
//     }
// };
// const car3 = {
//     brand: "Toyota",
//     model: "Supra",
//     year: 1994,
//     color: "blue",
//     drive: function () {
//         console.log(`You drive the ${this.model}`);
//     }
// };

// ========= this is the right way ========
function Car(make, model, year, color,) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function () {
        console.log(`You drive the ${this.model}`);
    }
}
const car1 = new Car("Ford", "Mustang", 1964, "red");
const car2 = new Car("Ferrari", "LaFerrari", 1924, "gray");
const car3 = new Car("Toyota", "Supra", 1994, "blue");

car1.drive();
car2.drive();
car3.drive();