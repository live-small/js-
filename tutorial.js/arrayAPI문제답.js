"use strict";

// Q1. make a string out of an array
// {
//   const fruits = ['apple', 'banana', 'orange'];
//   const Result = fruits.join(',');
//   console.log(Result);
//   // console.log(fruits); // join, not change
// }

// // Q2. make an array out of a string
// {
//   const fruits = 'π, π₯, π, π';
//   const Result = fruits.split(',', 4);
//   // number **
//   console.log(Result);
//   // console.log(fruits); // split, not change
// }

// // Q3. make this array look like this: [5, 4, 3, 2, 1]
// {
//   const array = [1, 2, 3, 4, 5];
//   const result = array.reverse();
//   // array μμ²΄κ° λ³νν¨ **
//   console.log(result);
// }

// // Q4. make *new* array without the first two elements
// {
//   const array = [1, 2, 3, 4, 5];
//   const result = array.slice(2, 5);
//   // end value is exclusive of the element at the index 'end'.
//   // so, end value add 1 **
//   console.log(result);
//   console.log(array);
// }

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student("A", 29, true, 45),
    new Student("B", 28, false, 80),
    new Student("C", 30, true, 66),
    new Student("D", 40, false, 90),
    new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
const result = students.find((student) => student.score === 90);
console.log(result); // find, μ μΌ μ²μ κ°λ§ κ°μ Έμ΄

// /* more detail
// {
//   const result = students.find(function(student) {
//       return student.score === 90;
//   })
// } */

// // find
// // return value : true or false
// // true -> return **

// Q6. make an array of enrolled students
{
    const total_enroll = students.filter((student) => student.enrolled == true);
    console.log(total_enroll);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const student_score = students.map((student) => student.score);
    console.log(student_score);
}

// mapμ μ§μ λ callbackFnμ κ°κ° νΈμΆν¨(μλ ν¨μκ° κΈ°λ₯(μ§μ λ ν¨μ)μ μν΄ μλ‘­κ² λ§΅νλ¨)
// mapμ λ°°μ΄μμ μλ λͺ¨λ  μμλ€μ μ½λ°±ν¨μλ₯Ό νΈμΆνλ©΄μ
// μ½λ°±ν¨μμ κ°κ³΅λ λ¦¬ν΄κ°λ€λ‘ λμ²΄ν¨(mapping)

// ** when use it?
// μ°λ¦¬κ° κ°μ§ ν¨μλ₯Ό μ΄μ©ν΄
// λ€λ₯Έ κΈ°λ₯μ λ£μ΄ λ¦¬ν΄κ°μ λ°μμ€κ³  μΆμ λ μ΄μ©

// μ½λ°±ν¨μλ‘ μ λ¬λλ μΈμλ μ΅λν μ§κ΄μ μ΄κ² μ¬μ©νκΈ° **
// item or value -> student

// Q8. check if there is a student with the score lower than 50
// {
//   console.clear();
//   const result = students.some((student) => student.score < 50);
//   console.log(result); // μ½λ°±ν¨μλ₯Ό λ§μ‘±νλ μΉκ΅¬κ° μκΈ΄ μλ? μ! true, μλ!

//   const result4 = students.filter((student) => student.score < 50);
//   console.log(result4); //
//   // λ κΉλ€λ‘μ
//   const result3 = !students.every((student) => student.score >= 50);
//   // same, students.every((student) => student.score < 50);
//   console.log(result3);
// }

/* π μ λ¦¬ π
some method
νλλΌλ μ΄ μ‘°κ±΄μ λ§μ‘±λλ μμκ° μλ€λ©΄
retrun true ==> ORκ³Ό μ μ¬

every method **
λͺ¨λ  μμκ° μ΄ μ‘°κ±΄μ λ§μ‘±ν΄μΌμ§
return true ==> Andμ μ μ¬  */

// Q9. compute students' average score
// suhwa code
{
    const score = students.map((student) => student.score);
    const result = score.reduce((total, Score) => total + Score);
    console.log(result / students.length);
}

{
    const result = students.reduce((prev, next) => prev + next.score, 0);
    console.log(result / students.length);
}

// eliy code
{
    const result = students.reduce((prev, curr) => {
        console.log("-------------");
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
        // prev λ return valueλ₯Ό μ λ¬λ°κ³ ,
        // curr λ item of arrayλ₯Ό μ λ¬λ°μ
    }, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const score = students.map((student) => student.score).join(",", 5); // ν¨μν νλ‘κ·Έλλ°
    console.log(score);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const stn_score = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
    console.log(stn_score);
}

{
    console.clear();
    let result = [8, 2, 0, 3, 4, 7, 22, 1].sort(function (a, b) {
        console.log(`${a} vs ${b}`);
        return a - b;
    });

    console.log(result);
}
// λμμλ¦¬ λΆμ π
// a | b | a-b | change
// - time: 2021. 04. 07 suhwa
// - learned
// 1. μμ μ«μκ° 5μ΄μμΌ κ²½μ°, μμ μΈλ±μ€μ νκ·  κ°(μ¬λ¦Ό)κ°κ³Ό λΉκ΅
// 2. κ·Έ λ€μ λΉκ΅ μ«μλ, 2μΉΈ λ€μ μ«μ

// μ¦, 0,2,3,4,8,7 --> 7 μ λ ¬μμ, 5/2 = 3λ²μ§Έ, 3κ³Ό λΉκ΅ | 8κ³Ό λΉκ΅ | 4μ λΉκ΅
// 0,2,3,4,7,8,22,1 --> 1μ λ ¬μμ, 7/2 = 4λ²μ§Έ, 4μ λΉκ΅ | 2μ λΉκ΅ | 0κ³Ό λΉκ΅

// - feeling about this.
// μ΄λ»κ² μλνλμ§, λ΄κ° λ°λ₯λΆν° μ½λ©νλκ² μλλκΉ, λμλ°©μμ μκΈ° μ΄λ ΅λ€.
// λ§λ₯ λκ΅°κ°κ° μ§μ€ μ½λκ° νΈνμ§λ§μ μμ κ±° κ°λ€.

// - basic
// 1. negative valueμΌ κ²½μ°, μμΉ change !
// 2. b, a μμΌλ‘ μλν¨ --> 2,3,1 --> a:3, b:2
//  μ­μμΌλ‘ μΈμλ₯Ό λ°κΈ°μ, b - aκ° μμμΌ λλ§ κ°λ§ν μμΌλ©΄ --> μ€λ¦μ°¨μ μ λ ¬
//  a - bκ° μμμΌ λλ§ κ³ μ μ΄λ©΄, aμ ν° κ°μ΄ μ λ¦Ό = λ€λ‘ κ° μλ‘ ν° κ°μ΄ μ‘΄μ¬ --> λ΄λ¦Όμ°¨μ
