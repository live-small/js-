'use strict'
/* 
// Callback Hell example 
class UserStorage {
loginUser(id, password) {
    return new Promise((resolve, reject) => {
    setTimeout(()=> {
        if (
            (id === 'suhwa' && password === 'fighting') ||
            (id === 'coder' && password === 'academy')
            ) {
               resolve(id); // return id => parameter of then
            } else {
               reject(new Error(`no id,password`));
                }
            },1000);
        });
    }

    getRoles(user) {
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                if (user === 'suhwa') {
                    resolve({name: 'suhwa', role: 'admin'});
                } else {
                    reject(new Error(`error!`));
                }
            },1000);
        });
    } 
};

const userstorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userstorage.loginUser(id,password)
.then(userstorage.getRoles)
.then((user) => {
    alert(`Hello ${user.name}, you have a ${user.role} role`)
}) // 함수와 object ? 여기서 방황했음 
// console.log() 를 넣으면 에러가 발생 --> 왜지? 로그남겨서 어디에서 에러났는지 확인하는건 아닌가?
.catch(error => console.log('error !!'));

// class안에 object를 넣을 수 있는건가요? **class의 return 값으로 JS_object를 이용 */


// homework 
class UserStorage {
    loginUser(id, password) {
        setTimeout(() => {
            if (
                (id === 'suhwa' && password === 'fighting') ||
                (id === 'coder' && password === 'academy')
            ) {
                return id;
            } else {
                return new Error(`id,password Error`);
            }
        }, 1000);
    };

    getRoles(user) {
        setTimeout(() => {
            if (user === 'suhwa') {
                return ({ name: 'suhwa', role: 'admin' });
            } else {
                return (new Error(`error!`));
            }
        }, 1000);
    };
}
const userstorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

async function user_role(userstorage, id, password) {
    const user = await userstorage.loginUser(id, password);
    const role = await userstorage.getRoles(user);
    return role;
}

user_role(console.log);
