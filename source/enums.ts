/* Unlike most typescript features, Enums are not a type-level addition to javascript but something added to the languauge and runtime*/
//enum is enumerated (tells abt the position)
//bydefault numbering will be from 0
enum Grades{
    U = 1,
    D, 
    A, 
    B, 
    F,
}
console.log(Grades.A)  //this will return pos 2
