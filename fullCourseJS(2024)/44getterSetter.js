// getter = special method that make a property readable
// setter = special method that make a property writable

// validate and modify a value when reading/writting a property

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }else {
//             console.log("Width must be greater than 0 or positive number");
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }else {
//             console.log("Width must be greater than 0 or positive number");
//         }
//     }

//     get width(){
//         return `${this._width.toFixed(1)}cm`;
//     }
//     get height(){
//         return `${this._height.toFixed(1)}cm`;
//     }
//     get area(){
//         return `${ this._width * this._height.toFixed(1)}cm`;
//     }
// }

// const rectangle = new Rectangle(3, 4);

// rectangle.width = -1;
// rectangle.height = "";
// console.log(rectangle.width);
// console.log(rectangle.height);

// console.log(rectangle.area);

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    set firstName(newFirstName) {
      if (typeof newFirstName == "string" && newFirstName.length > 0) {
        this._firstName = newFirstName;
      } else {
        console.error("first name must be a string and not empty");
      }
    }
  
    set lastName(newlastName) {
      if (typeof newlastName == "string" && newlastName.length > 0) {
        this._lastName = newlastName;
      } else {
        console.error("last name must be a string and not empty");
      }
    }
  
    set age(newAge) {
      if (typeof newAge === "number" && newAge >= 0) {
        this._age = newAge;
      } else {
        console.error("age must be a number and not empty");
      }
    }
  
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  
    get age() {
      return this._age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;  
    }
    
  } 
  
  const person = new Person("Spongebob", "Squarepants", 25);
  
  console.log(person.firstName);
  console.log(person.lastName);
  console.log(person.fullName)
  console.log(person.age);
  