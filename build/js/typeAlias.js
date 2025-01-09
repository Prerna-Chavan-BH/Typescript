//Literal types
var myname;
var userName;
userName = 'Harsha';
//functions
var add = function (a, b) {
    return a + b;
};
var logMsg = function (message) {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
//function calling without the useage of arrow functions
var substract = function (c, d) {
    return c - d;
};
var multiply = function (c, d) {
    return c * d;
};
console.log(multiply(2, 3));
//optional parameters
var addAll = function (a, b, c) {
    //adding a type guard as the c is undefined as well as number so ts throws a error
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
console.log(addAll(2, 3, 5));
console.log(addAll(2, 3));
//c is the default parameter here
var sumAll = function (a, b, c) {
    if (c === void 0) { c = 2; }
    return a + b + c;
};
console.log(sumAll(2, 3));
//Rest parameters
var total = function (a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    return a + nums.reduce(function (prev, curr) { return prev + curr; });
};
logMsg(total(10, 2, 3));
var createError = function (errMsg) {
    throw new Error(errMsg);
};
var infinite = function () {
    var i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard 
var isNumber = function (value) {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type 
var numberOrString = function (value) {
    //again the type gaurd is used here
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
