//Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number) []

type Guitarist = {
    name ?: string,
    active : boolean,
    albums : stringOrNumberArray,
}

//Literal types
let myname: 'Prerna'

let userName: 'Prerna' | 'Akshata' | 'Harsha'
userName = 'Harsha'


//functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}
logMsg('Hello!')
logMsg(add(2, 3))


//function calling without the useage of arrow functions
let substract = function (c: number, d: number): number {
    return c - d
}

//creating a function alias using type and interface
// type mathFunction = (a: number, b: number) => number

interface mathFunction {(a: number, b: number) : number}

let multiply : mathFunction = function (c,d) {
    return c * d
}
console.log(multiply(2, 3))

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    //adding a type guard as the c is undefined as well as number so ts throws a error
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}
console.log(addAll(2, 3, 5));
console.log(addAll(2, 3));

//c is the default parameter here
const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c
}
console.log(sumAll(2, 3));


//Rest parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type 
const numberOrString = (value: number | string): string => {
    //again the type gaurd is used here
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}