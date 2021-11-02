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
    // ���� �� 
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    // ���� ������ 
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


// �������� &&, || Ȱ�� 
console.log(true && 'hello'); // hello 
console.log(false && 'bye'); // false 
console.log('hello' && 'suhwa'); // suhwa
console.log(null && 'hello');
console.log(undefined && 'hello');
console.clear();

// && : �ϳ��� false��, false�� = ��ȯ�� 
// || : �ϳ��� true��, true�� = ��ȯ�� 

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


// 3. ���ǹ� X ��ü 
function getSound(animal) {
    const sounds = {
        dog: 'mung',
        cat: 'ya-ong',
        bird: 'jjack jjack',
        gugu: 'gu gu..gu'
    };
    return sounds[animal] || '...?';
}  // js���� ��ü�� �迭�� ���̴�? �� �� index�� ����? 

console.log(getSound('dog'));
console.log(getSound('gugu'));
console.log(getSound('person'));



// ��ü �ȿ�, �Լ��� �� 

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



// 4. ���� �Ҵ� **

// 4.1 ��ü  
// ��ü�� ���Կ����ڿ� �̿� ��, ���簡 �ƴ϶� ������ 
// ��, ��ü �� ���� ��, ��ΰ� �ٲ� ** 
// - ��ü�� �ּҰ��� ��ȯ�� * 

const object = { a: 1, b: 2 };

const { a, b, c = 3 } = object;

function printf({ a, b = 2 }) {
    console.log(a);
    console.log(b);
};

printf(object);

// �̸����� 
const number = {
    name: 'seven',
    type: 'lucky'
};

const { name: happyOfNum } = number;

console.clear();
console.log(happyOfNum);


// 4.2 �迭 
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


// 5. spread ������ 

// 5.1 spread 
const slime = {
    name: "slime"
};

const hotSlime = {
    ...slime,
    attribute: "hot",
};

console.log(hotSlime);
// ��, spread�� ���Ҹ� ������ �� 


// 5.2 rest 
const purpleCuteSlime = {
    name: 'slime',
    attribute: 'cute',
    color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(rest); // color�� ������ ������ 

const { attribute, ...originalSlime } = rest;
console.log(originalSlime);
// ���ǵ� ��ü��, ���Ҹ� �������� ���� ��


// �迭
const NUM = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const [one, ...Rest] = NUM;
console.log(one);
console.log(Rest);


// �Լ����ڷ� �̿� 
function sum(...num) {
    return num.reduce((acc, current) => acc + current, 0)
}

console.clear();
console.log(sum(...Rest));