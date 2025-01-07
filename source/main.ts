let myName : string; 
let number: number;
let booleanValue : boolean;
// let something : any;                //defining any means that variable can take any value be it number, string, boolean, etc
let something : string | number;       //This is the union type where something can either be any of the defined types

myName  = "Prerna";
console.log(myName);

number = 12;
console.log(number);

booleanValue = true;
console.log(booleanValue);

something = "Chavan";
console.log(something);

//creating a function sum
const sum = (a: number, b: number) => {                 //when a datatype is not defined it bydefault assigs it as a any type
    return a + b
}

