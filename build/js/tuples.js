var mytuples = ["Hello", 12, true];
console.log("The defined tuples is: ", mytuples);
var mixed = ['Ice-cream', 1, false, 122];
console.log("Mixed Array: ", mixed);
/*  in mytuples it is already declared that 0th pos will have string, 1st pos will have num, 2nd pos will have boolean
    so we try to give anything beyond defination on any place ide will definately thrwo us a error*/
mytuples[0] = "Vola";
console.log("Updated String Array: ", mytuples);
