// 1. string concatenation (문자열의 합)
console.log("my" + "cat");
console.log("1" + 2); // 숫자+문자열 > 문자열로 변환 > 12출력 **
console.log(`string literals: 1+2= ${1 + 2}`); // ' < 출력하려면 앞에 / 있어야 되지만 literals는 안해도 됨

// 2. numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation (지수)

// 3. increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 변수, 값 : 3, 3 > 3, 4 > 3, 3 > 3, 2
const postIncrement = counter++; // post주목, 변수에 먼저 값을 할당한 후, 증감됨
const preDecrement = --counter;
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counteR : ${counter}`);

// 4. assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. comparison operators
console.log(10 < 6); // fales, true 값으로 출력됨
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

//  || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// or은 true 값 하나만 있으면 업무 끝 > 제일 간단한 함수를 앞에 배치하는게 효율적

console.log(`and: ${value1 && value2 && check()}`);
// and는 fales값 하나만 있으면 업무 끝, 모두 true여야 true값 반환할 수 있으니까
// heavy operation일수록 뒤에서 체크하도록 코드 작성

/* ** often used to compress long if-statement
nullableObject && nullableObject.something

 if (nullableObject != null) {
  nullableObject.something;
} 
 nullableObject가 null이 아닐때만 something을 반환 */

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("melong");
  }
  return true;
}

// !(not)
console.log(!value1); // false > true

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strict equality, no type conversion (type까지 신경씀)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const suhwa1 = { name: "suhwa" }; // object가 메모리에 할당될때, reference 형태로 저장됨 ( suhwa -> ref -> name: suhwa)
const suhwa2 = { name: "suhwa" };
const suhwa3 = suhwa1; // suhwa1이 가지고 있는 ref1을 참조해 할당함
console.log(suhwa1 == suhwa2); // reference 값이 다르기에 fales
console.log(suhwa1 === suhwa2);
console.log(suhwa1 === suhwa3); // true

// equality - puzzler
// 0 == null == undefined = ''
// 1) null,undefined
// 2) 0, ''(empty string)
console.log(0 == false); // t
console.log(0 === false); // f - 0 != boolean tyep
console.log("" == false); // t
console.log("" === false); // f - ' ' != boolean type
console.log(null == undefined); // t **
console.log(null === undefined); // f - different type

// 8. conditional operator: if
// if, else if, else
const name = "suhwa";
if (name === "suhwa") {
  console.log("Welcome, suhwa!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("Who are you?");
}

// 9. Ternary operator: ?
// condition ? value1(T) : value2(F);
console.log(name === "suhwa" ? "yes" : "no"); // 너무 많은 조건 사용시, 코드가독성 떨어짐

// 10. Switch statement
// use for multiple if checks (if 반복 시, switch 사용하는 게 좋음) - jump table로 저장되기때문에
// use for multiple type checks in TS (정해진 타입 검사시, switch가 가독성에 좋음)
const browser = "IE"; // initial value
switch (browser /* condition */) {
  case "IE":
    console.log("go away!");
    break;
  case "chrome": // 동일한 출력물일 경우, case 묶기
  case "firefox":
    console.log("love you!");
    break;
  default:
    // switch문 , default 값 지정 잊지말기
    console.log("same all!");
    break;
}

// 11. Loop (반복문)
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
  console.log(`do while ${i}`); // do 안이 body
  i--;
} while (i > 0);

// for loop, for(begin; condition; step) > begin - condition - body - step
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration(지역변수 선언할 수 있음)
  console.log(`inline variable for: ${i}`);
}

// nested loops > CPU에 타격, 최대한 피하기
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue #짝수(even) #홀수(odd)
//  Q1. iterate from 0 to 10 and print only even numbers (use continue)
//  Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`a1. ${i}`);
  }
}

for (let a = 0; a < 11; a++) {
  if (a > 8) {
    break;
  }
  console.log(a);
}
// lable - 현업에선 최대한 지양한 코드 작성
