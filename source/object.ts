let myTuples : [string, number, boolean] = ["Hello", 12, true];

let mixedArray = ['Ice-cream', 1, false, 122];
             
let myObj: object
myObj = []
console.log(typeof myObj)

myObj = myTuples
myObj = {}

//creating a function
const testObj = {
    obj1: 'Bat',
    obj2: 22,
}

testObj.obj1 = 'Ball'
console.log(testObj);

// //creating a type for the same
// /*as we are defining its fields as a fixed datatype so if any field is missing while calling the event it will thrw error 
// so to get rid of this problem add a "?" before the : 
// and still they will appear equal only*/
// type Employee = {
//     name: string,
//     age: number,
//     publications?: (boolean | number),
//     active: boolean,
//     passout: boolean,
// }

// let eventEmployee1 : Employee = {
//     name: 'Prerna',
//     age: 22,
//     // publications: 2,
//     active: true,
//     passout: false,
// }

// let eventEmployee2 : Employee = {
//     name: 'Akshata',
//     age: 21,
//     publications: 0,
//     active: true,
//     passout: false,
// }

// //as the emp1 and 2 helds same piece of infrmation so they can be equal ts wont throw any errors as such
// // eventEmployee1 = eventEmployee2

// //creating the function
// const callEmployee = (employee: Employee) => {
//     return `Hello ${employee.name}!`
// }

// console.log("Emp1: ",callEmployee(eventEmployee1));
// console.log("Emp2: ",callEmployee(eventEmployee2));

//creating the above code but with interface
interface Employee {
    name?: string,
    age: number,
    publications?: (boolean | number),
    active: boolean,
    passout: boolean,
}

let eventEmployee1 : Employee = {
    name: 'Prerna',
    age: 22,
    // publications: 2,
    active: true,
    passout: false,
}

let eventEmployee2 : Employee = {
    // name: 'Akshata',
    age: 21,
    publications: 0,
    active: true,
    passout: false,
}

//as the emp1 and 2 helds same piece of infrmation so they can be equal ts wont throw any errors as such
// eventEmployee1 = eventEmployee2

//creating the function
const callEmployee = (employee: Employee) => {
    if(employee.name){
        return `Hello ${employee.name}!`
    }
    return "Hello! Couldnt find the actual name!"
}

console.log("Emp1: ",callEmployee(eventEmployee1));
console.log("Emp2: ",callEmployee(eventEmployee2));