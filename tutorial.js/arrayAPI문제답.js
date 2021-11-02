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
//   const fruits = '🍎, 🥝, 🍌, 🍒';
//   const Result = fruits.split(',', 4);
//   // number **
//   console.log(Result);
//   // console.log(fruits); // split, not change
// }

// // Q3. make this array look like this: [5, 4, 3, 2, 1]
// {
//   const array = [1, 2, 3, 4, 5];
//   const result = array.reverse();
//   // array 자체가 변화함 **
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
console.log(result); // find, 제일 처음 값만 가져옴

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

// map은 지정된 callbackFn을 각각 호출함(원래 함수가 기능(지정된 함수)에 의해 새롭게 맵핑됨)
// map은 배열안에 있는 모든 요소들에 콜백함수를 호출하면서
// 콜백함수에 가공된 리턴값들로 대체함(mapping)

// ** when use it?
// 우리가 가진 함수를 이용해
// 다른 기능을 넣어 리턴값을 받아오고 싶을 때 이용

// 콜백함수로 전달되는 인자는 최대한 직관적이게 사용하기 **
// item or value -> student

// Q8. check if there is a student with the score lower than 50
// {
//   console.clear();
//   const result = students.some((student) => student.score < 50);
//   console.log(result); // 콜백함수를 만족하는 친구가 있긴 있니? 응! true, 아니!

//   const result4 = students.filter((student) => student.score < 50);
//   console.log(result4); //
//   // 더 까다로움
//   const result3 = !students.every((student) => student.score >= 50);
//   // same, students.every((student) => student.score < 50);
//   console.log(result3);
// }

/* 💖 정리 💖
some method
하나라도 이 조건에 만족되는 요소가 있다면
retrun true ==> OR과 유사

every method **
모든 요소가 이 조건에 만족해야지
return true ==> And와 유사  */

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
        // prev 는 return value를 전달받고,
        // curr 는 item of array를 전달받음
    }, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const score = students.map((student) => student.score).join(",", 5); // 함수형 프로그래밍
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
// 동작원리 분석 💖
// a | b | a-b | change
// - time: 2021. 04. 07 suhwa
// - learned
// 1. 앞에 숫자가 5이상일 경우, 앞의 인덱스의 평균 값(올림)값과 비교
// 2. 그 다음 비교 숫자는, 2칸 뒤의 숫자

// 즉, 0,2,3,4,8,7 --> 7 정렬순서, 5/2 = 3번째, 3과 비교 | 8과 비교 | 4와 비교
// 0,2,3,4,7,8,22,1 --> 1정렬순서, 7/2 = 4번째, 4와 비교 | 2와 비교 | 0과 비교

// - feeling about this.
// 어떻게 작동하는지, 내가 바닥부터 코딩하는게 아니니까, 동작방식을 알기 어렵다.
// 마냥 누군가가 짜준 코드가 편하지만은 않은 거 같다.

// - basic
// 1. negative value일 경우, 위치 change !
// 2. b, a 순으로 작동함 --> 2,3,1 --> a:3, b:2
//  역순으로 인자를 받기에, b - a가 양수일 때만 가만히 있으면 --> 오름차순 정렬
//  a - b가 양수일 때만 고정이면, a에 큰 값이 쏠림 = 뒤로 갈 수록 큰 값이 존재 --> 내림차순
