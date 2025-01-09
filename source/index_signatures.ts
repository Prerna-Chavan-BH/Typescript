// Index Signatures 

// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
    readonly [index: string]: number            //index signatures (index key can be string, number, symbol or template literal type but cant be a boolean)
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

//this dynamically accessing the data
let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        //this id done directly it will throw err as it is allowed in vanilaa js but note here hence we do the indexing as u can see on line no 8
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

//as the index signature is set to readonly any random assignments get automatically permitted
//todaysTransactions.Pizza = 40

console.log(todaysTransactions['Dave']) // undefined

///////////////////////////////////

interface Student {
    //[key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

//if we try to print this ts will have a err as test is not defined but but after indxing this err will go (index signature at 46)
// console.log(student.test)

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])               //[key as keyof typeof student] is the assertion provided so it no longer requires the index
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)                                  
}

logStudentKey(student, 'name')
logStudentKey(student, 'GPA')
logStudentKey(student, 'classes')

/////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record < Streams, number >     //this is the grouply assignments of datatypes for the streams like all are set to number

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}