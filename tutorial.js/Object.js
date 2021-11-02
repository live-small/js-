// object.assign 함수 공부 **
// for in, for of 추가공부 **

"use strict";
// objects
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object **중요
// js는 runtime(프로그램 동작하고 있을때) type이 결정되는 dynamic 언어
// **object = { key : value }; - key와 value의 집합!

// 1. Literals and properties
const name = "ellie";
const age = 4; // premitive type - 변수 하나만 담을 수 있음
print(name, age);
function print(name, age) {
    console.log(name, age);
}
// 변수는 data 하나만 담을 수 있기에 코드를 효율적으로 짤 수 없음
// 다양한 data를 담을 수 있는 object를 이용

function Print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: "ellie", age: 4 }; // {}를 이용해서 object 만든 것
Print(ellie);

// object 생성 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax : class를 템플릿으로 이용해서 생성

/* ellie.hasJob = true;
console.log(ellie.hasJob);

object의 속성을 추가, 삭제할 수 있음 > 하지만, 유지보수가 어려우니 지양하자

delete ellie.hasJob;
console.log(ellie.hasJob); */

// 2. Computed properties '[];' - .property를 지향하자
// key should be always string
console.log(ellie.name); // object는 .property 로 '직접'접근해 값을 받아옴
console.log(ellie["name"]); // 모호한 값 -> undefined
/* string type으로만 불러올 수 있음, 하지만 이는 runtime에서 결정될 때 
 실시간으로 원하는 key의 값을 받아오고 싶을 때 사용함 */

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
// key == value,key 값 생략가능
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
// person을 만들때마다 동일한 코드를 작성하는데 비효율적 > 함수이용

function makePeson(name, age) {
    return {
        name: name, // property value shorthand 기능 > name, age
        age: age,
    };
}

const person4 = makePeson("suhwa", 23);
console.log(person4);

// 4. Constructor function
// 위의 function을 class처럼 생성하는게
// 더 간결한 코드를 작성 할 수 있음
// class가 들어오기 전 이렇게 작성했음

function Person(name, age) {
    // fucntion name은 대문자시작
    this.name = name;
    // this = {};
    this.age = age;
    // return this;
}
// 호출도 class에서 object를 만드는것처럼 (js 엔진이 알아서 object를 생성함)
const person5 = new Person("najeong", 23);
console.log(person5);

// 5. in operator : property existence check (key in obj)
// 해당하는 key가 obj 안에 있는지 체크해줌, T/F 반환함
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log("name" in person4);
/* console.log("name" in suhwa); why is error? 
  suhwa is value of name
  So, key in object name or 변수명 */

// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 이전 log가 모두 지워짐
for (let key in ellie) {
    console.log(key);
}

/* for(value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
} */

// 위의 코드를 더 간결하게
const array = [1, 2, 4, 5];
for (let value of array) {
    // array에 있는 모든 값들이 value에 할당됨 > 출력
    console.log(value);
}

// for..in is using object
// for..of는 순차적으로 담겨있는 (iterable => array, list)에 사용

// 7. Cloning ; lead to ref
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user; // user가 가르키는 reference를 user2도 가리킴
user2.name = "coder";
console.log(user); // name>coder, user2가 가르키는 ref가 값을 변경했기때문

// old way
const user3 = {}; // empty object
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

// Using object.assign
const user4 = Object.assign({}, user);
console.log(user4);

/* 
const user4 = {};
Object.assign(user4, user);
console.log(user4);

정리 : object.assign은 ({}=new object, ref obj); 
*/

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // mixed는 뒤에 나오는 친구들이 앞을 덮어씌움
console.log(mixed.size);

/* 추가공부 */
// object엔 ref가 담겨있고, ref는 할당된 후 바뀔 수없음(즉, obj를 const or let을 사용하나 차이 x)
// 하지만, object의 ref가 가리키는 메모리의 field는 dot으로 직접접근해 변경가능

// 객체를 let에 저장한다면 const에 저장하는 것과의 차이는? ref가 잠겨있는게 객체
