"use strict";
// convert to more or less specific 
let a = 'hello';
let b = a; // less specific as datatype is indirectly getting related
let c = a; // more specific 
//angular brackets arent mostly used cuz they aint more compatible with the react, tsx versions
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
//Assertion is actually used here
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
//10 as string
10;
// The DOM 
const img = document.querySelector('img');
//below both the methods are same but nextImg wont work in tsx file format as it is angle braces bound
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
