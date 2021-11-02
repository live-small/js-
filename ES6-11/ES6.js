/** 
 * Shorthand property names 
 * key = value --> key만 써도 됨 
 * 해당 키를 가진 변수를 불러와 이용하기때문
*/

{
    const suhwa1 = {
        name: 'suhwa',
        age: '23',
    };

    const name = 'suhwa';
    const age = '23';

    // good 
    const suhwa2 = {
        name, // name: name,
        age, // age: age,
    };
    console.log(suhwa1, suhwa2);
}



/**
 * Destructuring Assignment 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * const {key of object} = obj name;
 * value에 각각 접근하는 방법 *더효율적이게 
 */

/** suhwa extra study #1214
 * on the left-hand side of the assignment to define 
 * what values to unpack from the sourced variable.
 * 
 * 1) Assignment separate from declaration 
 *  let a,b; 
 *  [a,b] = [1,2];
 * 
 * 2) Default values 
 *  when value is undefined 
 *  [a=5, b=7] =[1];
 *  console.log(a,b); // 1, 7
 * 
 *  array start zero '0' 
 * 
 * 3) Parsing an array returned frome a function 
 *  function f() {
 *    return [1, 2];
 *    }
 *  let a, b; 
 *  [a, b] = f(); 
 *  console.log(a,b); // 1,2
 * 
 * 4) Assigning the rest of an array to a variable 
 *  const [a, ...b] = [1,2,3];
 *  console.log(a); // 1
 *  console.log(b); // 2,3
 */

{
    // object
    const student = {
        name: 'Anna',
        level: 1,
    };

    // 💩
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // ✨
    {
        const { name, level } = student;
        console.log(name, level);

        const { name: studentName, level: studentLevel } = student;
        console.log(studentName, studentLevel);

        // new name + default value 
        let { a: aa = 10, b: bb = 5 } = { a: 3 };
        console.log(aa); // 3
        console.log(bb); // 5
    }

    // array 
    const animals = ['🐶', '🐱'];

    // 💩
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // ✨
    {
        const [one, two] = animals; // num of array는 서수로 세나?
        console.log(one, two);
    }
    /* const x = [1, 2, 3, 4, 5];
       const [y, z] = x;
       console.log(y); // 1
       console.log(Z); // 2
    */

    // colors 
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const [R, A, I, N, B, O, W] = colors;
    console.log(R);
}


/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * obj or array의 각각 value를 가져옴 
 */

{
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];


    // array copy <-- map, foreach API
    const arrayCopy = [...array];
    console.log(arrayCopy);


    const arrayCopy2 = [...array, { key: 'key3' }];
    obj1.key = 'newKey';
    // obj는 value가 들어있는 ref를 갖고있기때문에, value 바꾼 시점과 상관없이 다바뀜 
    console.log(array, arrayCopy, arrayCopy2);


    // object copy 
    const obj3 = { ...obj1 };
    console.log(obj3); // output: newKey


    // array concatenation 
    console.clear();
    const fruits1 = ['🥝', '🥥', '🍑', '🍒'];
    const fruits2 = ['🍇', '🍑', '🍒'];
    // const fruits = [...fruits1, ...fruits2];
    const fruits = [];
    fruits.push(...fruits1, ...fruits2)
    console.log(fruits);


    //     // object merge 
    //     const dog1 = { dog1: '🐕‍🦺' };
    //     const dog2 = { dog: '🐶' };
    //     const dog = { ...dog1, ...dog2 };
    //     console.log(dog);
    //     // Warning ** Key of obj 동일할 경우, 뒤에오는 걸로 덮어씌움
    // }

    // /** 
    //  * Default parameters 
    //  * In javascript, function parameters default to undefined.
    //  */

    // {
    //     //💩 -> ✨
    //     {
    //         function printMessage(message = 'default message') {
    //             console.log(message);
    //         }

    //         printMessage('hihi');
    //         printMessage(); // output: undefined --> parameter = default
    //     }
    // }


    // /** 
    //  * Ternary Operator 
    //  */

    // {
    //     const isCat = true;
    //     //💩
    //     {
    //         let component;
    //         if (isCat) {
    //             component = 'cat';
    //         } else {
    //             component = 'dog';
    //         }
    //         console.log(component);
    //     }

    //     // ✨
    //     {
    //         const component = isCat ? 'cat' : 'dog';
    //         console.log(component);
    //         console.log(isCat ? 'cat' : 'dog');
    //     }
    // }

    /**
     * Template Literals 
     */
    // {
    //     const weather = '⛅';
    //     const temparature = '16℃';

    //     console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
    // }
}
