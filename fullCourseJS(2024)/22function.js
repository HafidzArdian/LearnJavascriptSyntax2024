// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute it.
//            It is possible to have multiple functions with the same name.


// function happyBirthday(name,age){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log(`Happy birthday dear ${name}`);
//     console.log("Happy birthday to you!");
//     console.log(`you are ${age} years old`);
// }

// happyBirthday("Brocode", 21);
// happyBirthday("Indra", 22);

function add(x, y){
    return x + y;
}
function substract (x, y){
    return x - y;
}   
function multiply (x, y){
    return x * y;
}

function isEven(number){
    // if(number % 2 === 0){
    //     return true;
    // }else{
    //     return false;
    // }

    return number % 2 === 0 ? true : false;
}
function isValidEmail (email){
    return email.includes("@") ? true : false;
}


console.log(isValidEmail("brocode.com"));
console.log(isValidEmail("brocode@"));