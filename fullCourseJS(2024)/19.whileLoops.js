// // While loop = Repeat same code WHILE some condition is true

// let username = "brocode";

// while(username === "") {
//     console.log("You didn't enter anything");
// }console.log("Hello " + username);

// while (username === "" || username === null) {
//     username = window.prompt("What's your name?");
// }
// console.log("Hello " + username);

// // Do while loop = Repeat same code at least once WHILE some condition is true
// let username;
// do {
//     username = window.prompt("What's your name?"); 
//being Checked one time and than it will be executed
// } while (username === "" || username === null);
// console.log("Hello " + username);

let loggedIn = false;
let username;
let password;
// while(Kondisi) dimana jika kondisi false tidak akan dijalankan blok didalamnya
// dan jika memakai do while akan dijalankan blok didalamnya setidaknya sampai mengecek kondisi di bawahnya

// while (!loggedIn) {
//     username = window.prompt("What's your name?");     
//     password = window.prompt("Password?");
//     if (username === "myUsername" && password === "myPassword") {
//         loggedIn = true;
//         console.log("you are now logged in");
//     }else {
//         console.log("Wrong username or password! Please try again");
//     }
// } 

// do  {
//     username = window.prompt("What's your name?");     
//     password = window.prompt("Password?");
//     if (username === "myUsername" && password === "myPassword") {
//         loggedIn = true;
//         console.log("you are now logged in");
//     }else {
//         console.log("Wrong username or password! Please try again");
//     }
// } while (!loggedIn)