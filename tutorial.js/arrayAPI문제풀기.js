"use strict";

// Q1. make a string out of an array
/* object안에 변수가 있어도 돼? 
   object의 name이 없어도 돼? */
// object가 아니라, local scope 설정한거야
// *scope: 생존가능 구역
{
    const fruits = ["apple", "banana", "orange"];
    const Result = fruits.join(",");
    console.log(Result);
}

// Q2. make an array out of a string
{
    const fruits = "🍎, 🥝, 🍌, 🍒";
    const Result = fruits.split(",", 4);
    console.log(Result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// ** Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    array.splice(0, 2);
    console.log(array);

    /*const array = [1, 2, 3, 4, 5];
  const arr = array.splice(0,2);
  console.log(arr); // output: 1,2 */
}

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
    new Student("C", 30, true, 90),
    new Student("D", 40, false, 66),
    new Student("E", 18, true, 88),
];

/* using 
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

let user = users.find(item => {
  return item.id == 1;
});

console.log((user.name)); */

// Q5. find a student with the score 90

// 1. index number 찾기
{
    console.log(students.findIndex((student) => student.score == 90));
    console.log(students[2]);
}

// 2. 해당 element 출력
{
    console.log(students.find((student) => student.score == 90));
}

/* {  console.log(students.find (function(students) {
  students.score == 90;
  }));
}  

const results = students.find(function(score){
  score == 90;
});
console.log(results); 
Q. output : undefined , why?
score은 property of object -> not definded 
So, object name을 불러와야함 == student */

// Q6. make an array of enrolled students
{
    const total_enroll = students.filter((student) => student.enrolled == true);
    console.log(total_enroll);
    /* const total_enroll = students.filter(item => item.enrolled == true);
  const final = total_enroll.map(item=>item.name);
  console.log(final); */
    // 결과값으로 name말고 array를 받고싶으면, filter만 쓰면 됨
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const student_score = students.map((student) => student.score);
    console.log(student_score);
}

/* const student_score = students.map(function (item) {
  return item.score;
});
console.log(student_score);  */

// ! array_method, map !
// call function to all element of array and return array contain result value

// Q8. check if there is a student with the score lower than 50
{
    const lower_score = students.filter((student) => student.score <= 50);
    console.log(`I'll find this. This is ${lower_score.length}`);
}

// Q9. compute students' average score
{
    const score = students.map((student) => student.score);
    const result = score.reduce((total, Score) => total + Score);
    console.log(result / score.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const score = students.map((student) => student.score);
    const str = score.join(",");
    console.log(str);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const stn_score = students.map(function (student) {
        return student.score;
    });
    stn_score.join(",");

    function compare(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }

    stn_score.sort(compare);
    console.log(stn_score); // compare의 if의 1,0,-1 따라 오름/내림차순 변화
}

/* why give me a NaN?
students.filter(function(students) {
    let counter;
    if(students.enrolled===true);
    counter++;
    console.log(counter);
  });  */

/*
let arr = [1, 2];

let arrayLike = {
0: "something",
1: "hi suhwa",
length: 2,
[Symbol.isConcatSpreadable]: true,
};
// object = key : value
// array가 아니더라도, concat으로 합치는 것 가능, output: {object} or {...}
// using property, [Symbol.isConcatSpreadable]: true + length -> return value : array
console.log(arr.concat(arrayLike));



let army = {
minAge: 18,
maxAge: 27,
canJoin(user) {
  return user.age >= this.minAge && user.age < this.maxAge;
}
};

let users = [
{age: 16},
{age: 20},
{age: 23},
{age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army); // army 없으면 error -> why?

console.log(soldiers[0].age); // 20
console.log(soldiers.length); // 2
console.log(soldiers[1].age); // 23



// function.prototype.call(this. argList)
function hello(thing){
console.log(this + 'says hello' + thing);
// first parameter is thisValue
}

hello.call('Jake', 'world')




// using function instead of class method
function Product(name, price) {
this.name = name;
this.price = price;
}

function Food(name, price) {
Product.call(this, name, price);
this.category = 'food';
}

console.log(new Food('cheese', 5).name);



// what is 'this' in inner function? -suhwa question
var o = {prop: 37};

function independent() {
return this.prop;
}

o.f = independent; // add to object of property(function)
console.log(o.f());

o.b = {g: independent, prop: 42};
console.log(o); // o 안에 property로 b 생성(b는 object)
console.log(o.b.g());
// okay, i understand. But, where use this? -> think! */
