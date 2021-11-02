//added ECMAScript 5에 정의되어있는 것만 사용하겠따
"use strict";

// 1. javascript와의 첫만남
//console.log("hello world");

// 2. variable, rw(read/write)
//(mutable-변경가능)
// only let (added in ES6) <> var(don't ever use this!)
// var flexibility
// (1) var hosting (선언위치와 상관없이 가장 상단에 끌어올려주는 것)
// (2) block scope 없음
let globalname = "global name";

{
  let name = "suhwa";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(globalname);
// 3. constant, r(read only)
// (immutable) 선언함과 동시에 절대 값 변경할 수 없음
// favor immutable data type
const daysInweek = 7;
const maxNumber = 5;

// Note!
// immutable data types: primitive types, frozen objects (i.e. object. freeze)
// mutable data types: all objects by defalut are mutable in JS (ex: array) **
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. variable types
// (1) primitive(더이상 작아질 수 없는 single items)
//     : number, string, boolean, null, undefind, symbol
//  value로 값이 바로 저장됨
// (2) object (single item을 묶은 것): box container
// ** funcion, first-class function(다른 데이터처럼 변수에 할당가능, 함수 인자로도 전달가능, 반환값으로도 )
//  값이 크기때문에 ref가 value를 매개하는 형식으로 저장 (suhwa > ref1 > name, age)

// 다른 언어들과 달리 메모리, 데이터 타입 고려하지 않아도 됨 -> 정수, 실수 모두 number type
let a = 12; // typescript는 let a: number = 12;
let b = 1.2;

const count = 17; // integer
console.log(`value: ${count}, type: ${typeof count}`);
const size = 17.1; // decimal number 실수
console.log(`value: ${size}, type: ${typeof size}`);

// special number - infinity | -infinity | NaN
// **DOM 요소를 바꿀 때, 주의해야함(에러)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nan = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nan);

//number scope = 2^-53~ 2^53

//string
const char = "c";
const brendan = "brendan";
const greetin = "hello " + brendan; // 문자와 변수를 합칠 수 있음 
console.log(`value: ${greetin}, type: ${typeof greetin}`);
const helloBob = `hi ${brendan}!;`; // template literals(string)****

//boolean
// **false: 0, -0, null, undefined, NaN, ' '
// true: any other value(-1, false-string으로 인식, empty array)
const canRead = true;
const test = 3 < 1;
console.log(`value ${canRead}, type: ${typeof canRead}`); // ` $ { } `
console.log(`value ${test}, type: ${typeof test}`);

//null
let noting = null;
const lala = typeof noting;
console.log(lala); // type of null is object* 
console.log(`value ${noting}, type ${typeof noting}`);

//undefined
let X = undefined; // == let x;
console.log(`value ${X}, type ${typeof X}`);

//symbol (우선순위가 필요할때 )
//use: 자료구조에서 정말 고유한 식별자가 필요한 경우 또는 동시다발적으로 일어나는 코드
const symbol1 = Symbol("id"); //주어진 string에 상관없이 고유한 심볼로 만들어짐.
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for("id"); //동일한 심볼을 만들고 싶다면, .for 삽입
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2);
// console.log(`value: ${gsymbol1}, type: ${typeof gsymbol1}`);
//symbol은 다른 이들과 같이 출력시도하면 오류 발생! -> value.description 필요 
console.log(`value: ${gsymbol1.description}, type: ${typeof symbol1}`);

// object | real-life object | data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. dynamic typing : run-time 시, 할당된 값에 따라 데이터 타입이 변경될 수 있음.
// run-time 오류를 줄이고자 typescript로 type을 정해줌.



// false: 0, -0, ' ', null, undefined 
// true: -1, 'hello', 'false' => 한줄정리: 값이 존재한다면 true 

// object(array, class etc..)는 내부 값이 없어도, object 자체가 있기에 true로 취급 
/* 더 자세한 내용은 BOOLEAN OF MDN */

let obj = {
  name: 'suhwa',
};

// 1번 
if (obj) {
  console.log(obj.name);
}

// 2번 (1번보단 2번을 더 많이 씀, 간결하니까)
obj && console.log(obj.name); // true라면(값이 있다면) 출력하라 
// false면 출력하라 하고 싶다면? 어떻게 할까?? **



