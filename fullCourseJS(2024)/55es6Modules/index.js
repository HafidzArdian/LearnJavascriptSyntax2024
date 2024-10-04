// es6 Module = An external file that contains reusable code
//              that can be imported into other javascript files.
//              write reusable code for many different apps.
//              can contain variables, classes, functions, etc.
//              introduce as part of ECMAScript 2015 Update.

//Destructuring object
// const {PI, getArea, getCirumference, getVolume} = require("./mathUtil.js");

import {PI, getArea, getCirumference, getVolume} from "./mathUtil.js";

console.log(PI);

const circumference = getCirumference(10);
const area = getArea(10);
const volume = getVolume(10);


console.log(`Circumference: ${circumference.toFixed(2)}cm`);
console.log(`Area: ${area.toFixed(2)}cm^2`);
console.log(`Volume: ${volume.toFixed(2)}cm^3`);