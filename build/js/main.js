"use strict";
let myName;
let number;
let booleanValue;
// let something : any;                //defining any means that variable can take any value be it number, string, boolean, etc
let something; //This is the union type where something can either be any of the defined types
myName = "Prerna";
console.log(myName);
number = 12;
console.log(number);
booleanValue = true;
console.log(booleanValue);
something = "Chavan";
console.log(something);
//creating a function sum
const sum = (a, b) => {
    return a + b;
};
