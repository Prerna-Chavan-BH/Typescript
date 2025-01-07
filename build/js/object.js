var myTuples = ["Hello", 12, true];
var mixedArray = ['Ice-cream', 1, false, 122];
var myObj;
myObj = [];
console.log(typeof myObj);
myObj = myTuples;
myObj = {};
//creating a function
var testObj = {
    obj1: 'Bat',
    obj2: 22,
};
testObj.obj1 = 'Ball';
console.log(testObj);
var eventEmployee1 = {
    name: 'Prerna',
    age: 22,
    // publications: 2,
    active: true,
    passout: false,
};
var eventEmployee2 = {
    // name: 'Akshata',
    age: 21,
    publications: 0,
    active: true,
    passout: false,
};
//as the emp1 and 2 helds same piece of infrmation so they can be equal ts wont throw any errors as such
// eventEmployee1 = eventEmployee2
//creating the function
var callEmployee = function (employee) {
    if (employee.name) {
        return "Hello ".concat(employee.name, "!");
    }
    return "Hello! Couldnt find the actual name!";
};
console.log("Emp1: ", callEmployee(eventEmployee1));
console.log("Emp2: ", callEmployee(eventEmployee2));
