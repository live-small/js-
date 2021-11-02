// function
// -fundamental building block in the program
// -subprogram 로도 불리며 can be used multiple times
// -performs a task or calculates a value

// 1. function declaration
// function name(param1, param2) {body... return;}
// one function === one something
// naming: doSomething, command 등 verb(동사)형태로 지정해야함
// 복잡한 일을 쪼개서 만들어야함
// function is object in JS (funcion을 parameter로 전달할 수 있음)

"use strict";
function printHello() {
    console.log("hello");
}
printHello();

function hi(TEXT) {
    // parameter에 message**
    console.log(TEXT);
}
hi("insert you want to something, okay bye....");

/* typeScript > playground (type -> javascript)
- typeScript 맛보기 *
 parameter type, return type 명시해야함
 log(parameter type):return type

function log(message: String):number {
  // parameter에 message**
  console.log(message);
  return 0;
}
log("insert you want to something"); */

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by *reference*, object는 메모리에 ref를 할당
function changeName(obj) {
    obj.name = "coder";
    console.log(obj);
}
const suhwa = { name: "suhwa" };
changeName(suhwa);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
    // 2개의 parameter을 받음(받지못할 경우, = "default"값 출력됨)
    console.log(`${message} by ${from}`);
}
showMessage("Hi"); // from은 받지못해 by undefined 출력

// 4. Rest parameter (added in ES6)
function printAll(...args) {
    // ... == rest parameter, 배열형태로 전달됨
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        // args에 있는 것들이 하나씩 출력되는 형태, 위와 동일
        console.log(arg);
    }
    /* 배열에서 더 자세히 - args.forEach(arg) => console.log(arg);*/
}
printAll("dream", "conding", "suhwa"); // [ 1 . 2 . 3 ] <배열형태로 전달

// 5. Local scope - closure 심화학습 (함수의 중첩)
let globalMessage = "global"; // global variable
function printMessage() {
    {
        let message = "hello"; // local variable
        console.log(message);
        console.log(globalMessage);
    }

    function printAnother() {
        console.log(message);
        let childMessage = "hello!";
        console.log(childMessage);
        /* printAnother();  Q. 함수의 호출은 항상 함수 밖에서만 가능? 안에서 호출시 무한루프가 일어남 
     JS는 함수 안에서 또 다른 함수를 선언할 수 있다. */
    }
}

printMessage(); // printanother(); 안되는 원인 찾기 ****

// 6. Return a value
function sum(a, b) {
    return a + b;
    // 함수는 parameter과 return값이 필요하지만, return이 없는걸 대비해
    // return undefined;이 내포되어 있음 *신경쓰지 않아도됨
}
let result = sum(1, 2);
console.log(`sum ${result}`);

// 7. Early return, early exit -> block 안의 함수가 길어질수록 가독성, 효율 하락
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good (안되는 경우로 return으로 지정해두고, 이후 코드 작성)
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

/* 지금까지는 function을 어떻게 선언할 수 있는지에 대해 알아봤음, 이젠 어떻게 표현할지 */
// 함수의 정의는 declaration, expression로 할 수 있음
// First-class function
// functions are treate like any other variable
// - can be assigned as a value to variable,변수에 할당됨
// - can be passed as an argument to other function
// - can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it
const prints = function () {
    // anonymous function
    /* const print = funciton print() > named funciton */
    console.log("print");
};
prints();
// 변수가 함수기에, 변수를 호출하면 함수를 호출한 것과 동일
// 함수명이 없어도 가능 => 변수명으로 호출

const printAgain = prints; // 17:27(5)
printAgain();

const sumAgain = sum; // 위에서 만든 sum함수이용
console.log(sumAgain(1, 3));

// +수화추가공부
// function expression의 IIFE는 ()-grouping operator을 이용한 것
// grouping operator은 funciton expression의 우선순위를 결정(precedence of evaluation)
// 함수를 return하는 function은 higher-order function
// 함수가 argument로 전달되는 것을 callback function

const sayHello = function () {
    return function () {
        // return value가 꼭 필요한가? 네. 중괄호 안에선 리턴 키워드를 써야, 리턴이 됩니다.
    };
};
const myFunc = sayHello();
myFunc();

let howareyou = (function () {
    let ifine = "thankyouandyou?";
    console.log(ifine);
})();
/* IIFE는 함수취급 안하기에, howareyou(); 변수명으로 출력불가(에러발생) */

// IIFE-함수를 설정함과 동시에 출력!
// 주의: 함수 내의 변수는 밖으로 접근할 수 없기에 밖에서 호출하면 에러뜸
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE <- 추가공부 완료

/* function declaration vs function expression
declation은 hoisting 때문에(JS 엔진이 선언된 것을 가장 위로올림) 
변수를 가장 위로 올림 > 할당 이전의 호출 가능 */

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === "love you") {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// 함수 안에서 자신의 함수 호출할 수 있음 > recursions

/* function printNo() {
  console.log('NO');
} 
 선언의 hoisting 때문에 순서 바뀜 */

const printNo = function print() {
    console.log("no!");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function**
// always anonymous

/* const simplePrint = function () {
  console.log("simplePrint!");r
}; */

const simplePrint = () => console.log("simplePrint!");
simplePrint();

/* const add = function (a,b) { 
    return a+b;
}; */

// 질문! return 값으로는 console에 출력안되나? 네 안됩니당
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b; // *arrow에 중괄호를 쓰게되면 retun값 반환 필수*
};
console.log(add(100, 3)); // return값은 그 자체로 출력안되기에, 콘솔에 함수불러야지 출력됨

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

// 나의 첫 코드
function remainder(d, h) {
    return d % h;
}
const REM = remainder(100, 8);
console.log(`100을 8로 나눈 나머지는 ${REM}`);

// 두번째
let duhagi = function (a, b) {
    return a + b;
};
console.log(duhagi(3, 9));

// elliy
function calculate(command, a, b) {
    switch (command) {
        case "add":
            return a + b;
        case "substract":
            return a - b;
        case "divide":
            return a / b;
        case "multiply":
            return a * b;
        case "remainder":
            return a % b;
        default:
            throw Error("unknown command");
    }
}
console.log(calculate("add", 2, 3));

/* 함수를 다른 함수의 인자로 전달의 핵심 **
함수를 가르키고 있는 ref(참조값,주소값)이 복사되어 전달되는 것 */

function add2(num1, num2) {
    return num1 + num2;
}

function divide2(a1, a2) {
    return a1 / a2;
}

function surprise(operator) {
    const result2 = operator(500, 12);
    console.log(result2);
}
surprise(add2);
surprise(divide2);
