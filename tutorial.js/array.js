"use strict";
/**
 * CRUD의 관점 ✨
 * Create, array push || shift
 * Read, array index[start 0]
 * Update,
 * Delete, array pop || unshift
 */

// JavaScript is dynamically typed language
// array엔 index number이 지정되어있음
// one array엔 하나의 data type만 쓰기
// 즉, index 기준으로 data가 저장됨 > index를 활용해 data를 검색, 삽입, 삭제
// 이모지는 window + ; 로 생성가능

// Array (first data structure)

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]; // 0번째 index엔 숫자 1

// 2. Index position
const fruits = ["👏", "😜"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // array의 첫번째 data 출력
// 대괄호에 index number전달받아 출력함 [index number]
// object의 []와 비교
// 1) array : ['key'] key에 상응하는 value를 받아와 출력함
// 2) object : ['property']:string
// runtime 시, value를 받아오기때문에 -> property 안에 값이 없을 때도 이용가능
// key == property, value

console.log(fruits[fruits.length - 1]);
// array의 마지막 data 출력
/* fruits.length - 1 ? array index는 0부터 시작하기 때문에 
 배열 길이의 -1을 하면 그 배열의 마지막 index를 받아올 수 있음 
 ex) array 5지만, index번호는 4번까지 */

/* 추가공부 
array[index]로 array value에 접근가능, 
index 값을 계산식으로 만든다면, 이식성이 높음 
what is portability? 다른 함수로 이동하더라도, 동일한 기능을 수행함 */

// 3. Looping over an array
// print all fruits

// (1) for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// (2) for of
for (let fruit of fruits) {
    // fruits 안의 변수를 fruit에 하나씩 할당함
    console.log(fruit);
}

// (3) for Each (using APIs)-callback function을 받아옴

/* fruits.forEach(function (fruits, index) {
  // ctrl로 instruction을 읽고 사용하는 습관기르기 **
  console.log(fruits, index);
}); */

// non-naming function(anomyous) -> arrow(=>) function
fruits.forEach((fruits) => console.log(fruits));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("○", "※");
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); // 하나만 remove
console.log(fruits);

/* push, pop은 새로운 고객 정보 저장 할때,
   unshift, shift는 오래된 정보 폐기 할때 */

// unshift : add an item to the beginning
fruits.unshift("@");
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);

// suhwa note! unshift, shift
// shift는 앞으로 이동 -> (array의 위치가 고정되어있기에)맨 앞자리 출력 x
// unshift는 뒤로 이동 -> 맨 앞자리에 새로운 정보 출력 o

// note !! shift, unshift are slower than pop, push
// 기존의 데이터를 건드리지 않는 pop, push
// shift, unshift는 기존의 데이터 이동 후, 새로운 data를 삽입함
// 가능하면 shift, unshift는 지양하자 !
// 추가학습 : big5, 정렬

// splice : remove an item by index position
fruits.push("※", "▒", "㏇");
console.log(fruits);
fruits.splice(1, 1); // array[1]부터 시작해 1개 없앨거야
console.log(fruits);
fruits.splice(1, 1, "a"); // this case, array length just same.
console.log(fruits);

// combine two arrays <concat>
const fruits2 = ["㉾", "㉿"];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);

// 5. Searching
// indexOf: find the index number : return value == number
console.log(newfruits);
console.log(newfruits.indexOf("㉾"));
// 없는 index 있냐고 물어보면 음수 출력함(-1)

// includes : retern value: true or false
console.log(newfruits.includes("㉾"));
console.log(newfruits.includes("💜"));

// lastIndexOf
// 동일한 value의 index number을 출력하기 위해서
// 앞으로 찾을수도(indexOf), 뒤로 찾을 수도(lastIndexOf)있음
newfruits.push("💚");
console.log(newfruits);
console.log(newfruits.indexOf("💚"));
console.log(newfruits.lastIndexOf("💚"));

// homework *
// READ APIs () - 배열이 선언된 곳으로 가서 --- done
// API 읽고 어떻게 쓸 수 있을지 고민해보기
// array<T> length, toString ... sort, every
