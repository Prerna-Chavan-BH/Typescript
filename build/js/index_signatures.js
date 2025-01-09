"use strict";
// Index Signatures 
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
//this dynamically accessing the data
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        //this id done directly it will throw err as it is allowed in vanilaa js but note here hence we do the indexing as u can see on line no 8
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
//as the index signature is set to readonly any random assignments get automatically permitted
//todaysTransactions.Pizza = 40
console.log(todaysTransactions['Dave']); // undefined
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
//if we try to print this ts will have a err as test is not defined but but after indxing this err will go (index signature at 46)
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]); //[key as keyof typeof student] is the assertion provided so it no longer requires the index
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
logStudentKey(student, 'GPA');
logStudentKey(student, 'classes');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
