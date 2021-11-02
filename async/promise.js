'use strict'

// Promise is a JavaScript object for asynchronous operation. 
// point of view: state, differ between producer and consumer.
// state: pending --> fulfilled or rejected
// Producer vs Consumer 

// 1. Producer 
// When new Promise is created, the executor runs automatically. 
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (ex-network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('success'); // then에 전달함    
        // reject(new Error('no network')); // javascript object = Error 
    }, 2000);
});


// 2. Consumers: then, catch, finally 
promise
    .then((value) => {
        // (조건) promise가 정상작동했으면(resolve), 
        // then은 resolve가 전달하는 return value of promise을 받음 
        console.log(value);
    })
    .catch(error => {
        // (조건) promise가 실패할 때(=에러발생 -> 에러잡는용) 
        // error handing 
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    }); // 성공하든 실패하든 무조건 호출함  
// (using) 어떤 기능을 마지막으로 수행하고 싶을 때  


// 3. Promise chaining 
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber // return value of resolve => parameter of then(it's not important to rename) 
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => { // when use this, return?** 
            setTimeout(() => resolve(num - 1), 1000);
        }); // then는 값을 전달할 수도 있고, promise를 전달할 수도 있음(APIs참고)
    })
    .then((num) => console.log(num));


// 4. Error Handling 
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    }); // 🐓 => parameter (return value => parameter)

const getEgg = hen => // parameter을 받야야 에러없이 정상작동가능 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (
                hen === '🐓'
            ) { resolve(`${hen}=>🥚`), 1000 }
            else { reject(new Error(`error! ${hen}=>🥚`)), 1000 }
        })
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg}=>🍳`), 1000);
    });


getHen() // function 
    .then(getEgg)
    .catch(error => {
        return '🍩';
    }) // 에러가 나도, 실행될 수 있게 해줌
    .then(cook)
    .then(console.log) // .then(cook => console.log(cook))
    .catch(console.log)