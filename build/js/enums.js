/* Unlike most typescript features, Enums are not a type-level addition to javascript but something added to the languauge and runtime*/
//enum is enumerated (tells abt the position)
//bydefault numbering will be from 0
var Grades;
(function (Grades) {
    Grades[Grades["U"] = 1] = "U";
    Grades[Grades["D"] = 2] = "D";
    Grades[Grades["A"] = 3] = "A";
    Grades[Grades["B"] = 4] = "B";
    Grades[Grades["F"] = 5] = "F";
})(Grades || (Grades = {}));
console.log(Grades.A); //this will return pos 2
