'use strict'

// JavaScript is synchronous(동기=순차적인 아이) 
// Execute the code block in order after hoising. 
// hoisting: var, function declaration 
// 선언된 지점과 상관없이 제일 상단으로 (올라가 먼저 실행되는 것)
// **모든 함수의 선언은 hoisting됨

// 1. Asynchronous 
console.log('1');
setTimeout(function() {
    console.log('2');
 }, 1000); // unit: 10-3(ms) --> 1000 == 1초  
// setTimeout - browser APIs (브라우저 호출, 메시지 큐, 스택..내부적으로 발생하는 것)
// 우리가 지정한 시간이 지나면, 콜백함수 호출함 
console.log('3');


// 2-1. Synchronous callback 
function printImmediately(print) {
    print();
}
printImmediately(()=>console.log('hello'));


// 2-2. Asynchronous callback 
function printWithDelay(a, b) {
    setTimeout(a, b);
}
printWithDelay(() => console.log('async callback'),2000);

/* 언어마다 callbackFn을 쓰는 방식이 다름 ex) pointer , 람다 express */


// Callback Hell example 
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if (
                (id === 'suhwa' && password === 'fighting') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);

    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if(user === 'suhwa') {
                onSuccess({name: 'suhwa', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userstorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userstorage.loginUser(
    id, 
    password, 
    user => {
        userstorage.getRoles(
            user, 
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            (error) => {
                console.log(error)
            }
        );
    },
    error => {console.log(error)}
    );