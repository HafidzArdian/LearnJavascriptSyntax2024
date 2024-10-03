// .reduce( ) = reduce the elements of an array
//              to a single value


// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);
// console.log(`Total price: $${total.toFixed(2)}`);
// function sum(accumulator, element){
//     return accumulator + element;
    
// }

const grades = [75, 50, 90, 80, 60, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);
console.log(`Maximum grade: ${maximum}, Minimum grade: ${minimum}`);
function getMax(accumulator, element){
    return Math.max(accumulator, element);
    
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
    
}
