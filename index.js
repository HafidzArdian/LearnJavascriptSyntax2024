//  .map( ) = accept a callback and applies that function
//           to each element of an array
//           ,Then returns a new array

const numbers = [1, 2, 3, 4, 5];

const Squares = numbers.map(square);
console.log(Squares);
function square(element){
    return Math.pow(element, 2);
}