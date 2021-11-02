'use strict';
/* ref : fastCampus - velopert */

// 1. setter, getter 
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,

    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    // 값을 얻어서 
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    // 값을 설정함 
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
}

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);

// 2. falsy 
console.log(!false);
console.log(!'');
console.log(!null);
console.log(!NaN);
console.log(!0);

// true VS false --> ? 
const animal = null;
function isIt(animal) {
    if (!!animal) { // animal Null check
        return animal.name;
    }
}
isIt(animal);


// 논리연산자 &&, || 활용 
console.log(true && 'hello'); // hello 
console.log(false && 'bye'); // false 
console.log('hello' && 'suhwa'); // suhwa
console.log(null && 'hello');
console.log(undefined && 'hello');
console.clear();

// && : 하나만 false면, false값 = 반환값 
// || : 하나면 true면, true값 = 반환값 

console.log(false || 'hello');
console.log(1 || 'no...');

/* Using */
const nameLessDog = {
    name: '',
};

function getName(animal) {
    const name = animal && animal.name;
    return name || 'not name ! ';
}

const get = getName(nameLessDog);
console.log(get);


// 3. 조건문 X 객체 
function getSound(animal) {
    const sounds = {
        dog: 'mung',
        cat: 'ya-ong',
        bird: 'jjack jjack',
        gugu: 'gu gu..gu'
    };
    return sounds[animal] || '...?';
}  // js에서 객체랑 배열의 차이는? 둘 다 index로 접근? 

console.log(getSound('dog'));
console.log(getSound('gugu'));
console.log(getSound('person'));



// 객체 안엔, 함수도 들어감 

function makeSound(animal) {
    const tasks = {
        dog: () => {
            console.log('i am dog');
        },
        cat() {
            console.log('i am cat');
        },
        bird: () => {
            console.log('i am bird, i can fly~');
        }
    }

    const task = tasks[animal];
    if (!task) {
        console.log('...?');
        return;
    }
    task();
}

makeSound('dog');
makeSound('cat');
makeSound('suhwa');



// 4. 비구조 할당 **

// 4.1 객체  
// 객체를 대입연산자에 이용 시, 복사가 아니라 참조임 
// 즉, 객체 값 변경 시, 모두가 바뀜 ** 
// - 객체는 주소값을 반환함 * 

const object = { a: 1, b: 2 };

const { a, b, c = 3 } = object;

function printf({ a, b = 2 }) {
    console.log(a);
    console.log(b);
};

printf(object);

// 이름변경 
const number = {
    name: 'seven',
    type: 'lucky'
};

const { name: happyOfNum } = number;

console.clear();
console.log(happyOfNum);


// 4.2 배열 
const deepObject = {
    state: {
        information: {
            Name: 'suhwa',
            languages: ['korean', 'english', 'chineses']
        }
    },
    age: 24
};

const { Name, languages: [first, second] } = deepObject.state.information;
const { age } = deepObject;

const extracted = {
    Name,
    first,
    second,
    age
};

console.log(extracted);


// 5. spread 연산자 

// 5.1 spread 
const slime = {
    name: "slime"
};

const hotSlime = {
    ...slime,
    attribute: "hot",
};

console.log(hotSlime);
// 즉, spread는 원소를 복사할 때 


// 5.2 rest 
const purpleCuteSlime = {
    name: 'slime',
    attribute: 'cute',
    color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(rest); // color를 제외한 나머지 

const { attribute, ...originalSlime } = rest;
console.log(originalSlime);
// 정의된 객체를, 원소를 기준으로 나눌 때


// 배열
const NUM = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const [one, ...Rest] = NUM;
console.log(one);
console.log(Rest);


// 함수인자로 이용 
function sum(...num) {
    return num.reduce((acc, current) => acc + current, 0)
}

console.clear();
console.log(sum(...Rest));