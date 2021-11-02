// // 코드종

// // 1.Closure
// // 생성한 시점의 scope chain을 계속 들고 있음

// // 정리 !
// // 다른 언어는 리턴하고 끝나면, 함수 내부 변수가 사라지지만,
// // js는 closure로 인해 사라지지않고 참조됨

// let d = 'x';

// function outer() {
//     let a = 1;
//     let b = 'B';

//     function inner() {
//         let a = 2;
//         console.log(b);
//     }
//     return inner; // inner(); --> result of function (error)
//     // closure function하면 왜 error가 뜰까? **
// };

// const someFun = outer();
// someFun();

// // 선언할 때 값이 결정되는 것 : closure
// // 호출할 때 값이 결정되는 것 : this

// // 2. this
// // 정리✨
// // this는 누가 호출했냐에 따라서 값이 달라지는 카멜레온 같은 짜식
// // 이런 변화무쌍한 this를 고정시키려면 bind(value you want) 이용

// let someone = {
//     name: 'suhwahan',
//     whoAmI: function () {
//         console.log(this);
//     }
// };

// someone.whoAmI(); // 호출한 whoAmI는 어디에 속해있는가?
// // dot 앞에 someone ! --> this는 someone안에 있음

// let myWhoAmI = someone.whoAmI;
// myWhoAmI(); // 호출한 곳은? global, global는 window에 있으니
// // this는 window 객체!

// // 3. let
// // scope 안에서만 존재함 <-> var
// // scope : 변수의 값을 찾아볼 때 들여다보는 곳
// // 자기 꺼에 없으면, 상위 scope를 들여다봄 (0 -> setClick -> global)

// let btn = [
//     document.getElementById('btn0'),
//     document.getElementById('btn1'),
//     document.getElementById('btn2')
// ]; // global scope : btn , setClick Fn

// function setClick() {
//     for (var i = 0; i < 3; i++) {
//         btns[i].onclick = function () {
//             console.log(i);
//         }
//     }
// };

// // git :소스코드 관리
// // 분산버전 관리 시스템

// // #비동기처리방법 - promise , 예외처리

// // 4. promise, await, async
// // async function 안에서만 await 쓸 수 있음
// // await가 끝나기 전에 다음 코드 실행할 수 없음!
// // <await> 모두들 날 기다려야해

// function delay(sec, callback) {
//     setTimeout(() => {
//         callback(new Date().toISOString());
//     }, sec * 1000);
// }

// // console.log('start', new Date().toISOString());

// // delayP define(instance of promise)
// function delayP(sec) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(new Date().toISOString());
//         }, sec * 1000)
//     })
// };

// function normalFun() {
//     return 'wow';
// }
// // 이를 await normalFun 해도 됨 *
// // async 안에서만 await 를 쓸 수 있지만,
// // await 뒤에는 어떤 function이든 상관없음 !

// async function myAsync() {
//     const time = await delayP(3) // output: resolve value
//         .then((time) => { // promise의 기능 이용가능*
//             return 'x';
//         })
//     console.log(time);

//     return 'async';
// };

// // delayP의 return 값은 then이란 method를 가진 친구
// // then을 쓸 수 있는 얘가 promise의 instance !
// // Form : instance of promise.then

// /* 모두 1초 뒤 실행됨
// delay(1,(result)=> {
//     console.log(1, result);
// });

// delay(1,(result)=> {
//     console.log(2, result);
// });

// delay(1,(result)=> {
//     console.log(3, result);
// }); */

// /*  1초에 1개씩 출력하고 싶다면?
// delay(1,(result)=> {
//     console.log(1,result);

//     delay(1,(result)=> {
//         console.log(2, result);

//         delay(1,(result)=> {
//             console.log(3, result);
//         });
//     });
// }); */ // 직관적인 코드 x --> promise 이용

// // promise 이용
// /* delayP(1)
// .then((result)=> {
//     console.log(1, result);
//     return delayP(1)
//     .then((result)=> {
//         console.log(2,result);
//     return delayP(1)
//     .then((result)=> {
//         console.log(3, result);
//         })
//     })
// }); */

// // 5. 예외처리
// // function, variable 등이 global scope에 쌓임
// // 이들은 call stack에 있다가, 큐로 가서 실행됨

// function wait(sec) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('error!');
//         }, sec * 1000);
//     });
// }

// wait(3)
//     .then(() => {
//         console.log('done!');
//     }, e => {
//         console.log('1nd catch in Then', e);
//     }); // then((after resolve, reject))

// async function myAsyncFun() {
//     console.log(new Date());
//     try {
//         await wait(3);
//     } catch (e) {
//         console.error(e);
//     } // using try ~ catch | .catch
// }
// const result = myAsyncFun();

// // promise와 async function의 catch error시,
// // return 값의 차이가 있음
// // 1. promise -> using try ~ catch
// // 2. async Fun -> using .catch (return: catch scope)

// async function myAsyncFun() {
//     console.log(new Date());
//     const result = await wait(3).catch((e) => {
//         console.error(e);
//     })
//     return console.log(result); // output: undefined(<--return catch scope)
// };

// const result = myAsyncFun();

// // 비동기적 코드는 try ~ catch로 error caught 잡을 수 없음
// // try ~ catch가 error를 잡을 때, 실행되지 않기때문에
// // So, using promise.catch

// // 같은 맥락으로, async Fun 내부의 에러는
// // try ~ catch로 caugh 할 수 없음  --> .catch로 잡아야함
// // ex) console.log -> consdoekjf.log (reference erro)

// // 추가로 공부 : error object, console.error

// // 6. Call Stack
// // 실행될 애들이 존재하는 list
// // 아래가 막혀있는 공간
// // console.log는 위에서부터 아래로 찍힘

// // 7. DOM; document object module
// // HTML(document) --> object of JS
// // 접근해서 제어! 이용! 활용!
// // *document 는 브라우저에서 제공하는 함수

// // const title = document.getElementById("title");
// // const title = document.querySelector(".title or #title"); // return node of HTML
// console.log(title);
// console.dir(title); // output: everyting you can use
// title.innerHTML = "HI! from JS"; // change html content
// title.style.color = "red";
// // console is function
// // log is object
// // object has many object using it.

// /* 우리가 배울 모든 함수들은
// 우리가 찾게 될 모든 객체들의 함수들
// DOM 형태로 변경가능 해 */

// // 8. event
// // MDN - JavaScript DON event
// const title = document.querySelector("#title");
// function handleResize(event) {
//     console.log(event);
// }
// window.addEventListener("resize", handleResize); // output: event <--console.log
// // [Form] .addEventListener("자극", 반응-Fn);

// // --------------------------------------------------

// /* 난잡한 코드
// const title = document.querySelector("#title");

// const BASE_COLOR = "#34495e";
// const OTHER_COLOR = "#5f27cd";

// function handClick() {
//     const current_color = BASE_COLOR;
//     if (current_color === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//     }  else {title.style.color = BASE_COLOR};
// };

// function init() {
//    title.style.color = BASE_COLOR;
//    title.addEventListener("click", handClick);
// };

// init(); */

// const title = document.querySelector("#title");

// const CLICK_CLASS = "clicked"; // *control* string(link html to css)

// function handClick() {
//     // only act on click
//     // as soon as return defalut value
//     const currentClass = title.className; // Class name of HTML
//     if (currentClass !== CLICK_CLASS) {
//         title.className = CLICK_CLASS; // help css decoration to use CLICK_CLASS
//     } else {
//         title.className = "";
//     }

//     // use to Conditional (ternary) operator
//     currentClass !== CLICK_CLASS ? title.className = CLICK_CLASS : title.className = "";

//     // conditional operator +
//     // Nested Ternary
//     let isStudent = false;
//     let isSenior = true;
//     let price = isStudent ? 8 : isSenior ? 6 : 10
//     console.log(price); // outpur: 6
// };

// function init() {
//     title.addEventListener("click", handClick);
// };

// init();

// console.clear();
// ["bilbo", "gandaif", "nazul"].forEach((item, index, array) => {
//     alert(`${item}is at index ${index} in ${array}`);
// });

// // forEach(callback(value, index, array));

// let users = [
//     { id: 1, name: "Suhwa" },
//     { id: 2, name: "Subin" },
//     { id: 3, name: "Mary" }
// ];

// let user = users.find(user => user.id == 1);
// console.log(user);
// console.log(user.id);
// console.log(user.name);

// Sort
// let arr = [9, 8, 7];
// arr.sort(function (a, b) {
//     console.log(a + "<>" + b);
//     return a - b;
// });
// console.log(arr);

// Reduce
let array = [1, 2, 3, 4, 5];

let result = array.reduce((sum, current) => sum + current, 0);
console.log(result);

/* Using */
function max(...numbers) {
    return numbers.reduce(
        (acc, current) => (current > acc ? current : acc),
        numbers[0]
    );
}

const results = max(1, 2, 3, 4, 10, 5, 6, 7, 8, 9);
console.log(results);
