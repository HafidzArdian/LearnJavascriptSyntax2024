let username = window.prompt("What's your name?");

username = username.trim();
let letter = username.charAt(0).toUpperCase();

let extraChars= username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username)