type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific 
let a: One = 'hello'
let b = a as Two // less specific as datatype is indirectly getting related
let c = a as Three // more specific 

//angular brackets arent mostly used cuz they aint more compatible with the react, tsx versions
let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}
 //Assertion is actually used here
let myVal: string = addOrConcat(2, 2, 'concat') as string

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

//10 as string
(10 as unknown) as string

// The DOM 
const img = document.querySelector('img')!
//below both the methods are same but nextImg wont work in tsx file format as it is angle braces bound
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src