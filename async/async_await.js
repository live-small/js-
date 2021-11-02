'use strict'

// async & await
// clear style of using promise :) 

// 1. async

function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs...
        resolve('ellie'); // if don't use resolve or reject, promise is pending 
    })
} // code block = scope 

// 오래걸리는 작업은 Asynchronous로 처리 ** <-- JS is synchronous  
const user = fetchUser();
user.then(console.log);

async function fetchUser() {
    // do network request in 10 secs... --> using await
    return 'ellie';
} // function 앞에 async를 쓰면, function을 promise로 바꿈  


const user = fetchUser();
user.then(console.log); // promise 출력 (resolve)
console.log(user); // return value of promise



// 2. await ✨기다려! 
// async function 안에서만 사용가능 
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve("suhwa"), ms);
    })
}

delay(5000)
    // 얘는 왜 setTimeout이 안통하지? 수화야 바보니..? setTimeout 안에 resolve를 줘야지!(21.7.8일 수화)
    // 그렇지 않을 경우엔, promise는 만들자마자 executor이 실행되기때문에 바로 실행돼 !  
    .then(name => console.log(`${name} : Is this menu spicy?`));
// resolve don't defined, So print undefined while writing console.log

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

/* function getbanana() {
    return delay(3000)
    .then(console.log('🍌'));
};

getbanana(); */ // output: 🍌  





/* Promise Hell(like callback Hell)  
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}

pickFruits().then(**console.log**); 
vita process is console.log* return is not console */



// using Async
async function pickfruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickfruits().then(console.log); // return 값을 출력 

// Error Handling -- try catch 


// await 병렬처리 
// using Promise (promise 생성과 동시에, 실행되는 점)
async function pickfruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise; // 동기화시킴 
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}


// 3. useful Promise APIs ✨
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);


function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);


