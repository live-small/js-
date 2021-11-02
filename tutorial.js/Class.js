/* Class 
like template (class를 이용해서 instance 생성)
field (속성-이름,나이 등), method(행동) */

"use strict";
// class : template (no data)
// object : *instance* of a class (data in)
// JavaScript classes
// -introduced in ES6
// -syntactical sugar over prototype-based inheritance
//  기존의 prototype을 기반으로 간단하고 편리하게 사용중

// 1. Class declarations
class Person {
    //constructor(생성자-object에게 필요한 데이터 전달함)
    //object는 생성자에게 받은 데이터를 field에 바로 할당함
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}, hello!`);
    }
}

const ellie = new Person("ellie", 20);
// 새로운 object를 만들때 new 사용
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
// 방어기제 설정(사람 나이가 -1이 되지 않도록!)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; // 없을 경우, 출력이 안됨.
    }
    get age() {
        // 값을 리턴 (age라는 getter을 정의함)
        return this._age;
    }
    set age(value) {
        // 값을 설정(값을 설정하기에 값을 받아와야함)
        // 전달된 value를 this.age에 할당할때 메모리의 값을 업데이트하는게 아니라
        // setter을 호출함 (이를 방지하기 위해 getter, setter에 쓰이는 변수 다르게 만들어줘야함)

        /* (1)
     if (value < 0) {
      throw Error("age can not be negative");
    } 
     this._age = value;*/

        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (pubilc private)
// too Soon !
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

class experiment {
    publicField = 2; // 생성자 없이 field 추가할 수 있음
    #privateField = 0;
    // #을 추가하면 class 내부에서만 값을 보고, 접근하고 변경할 수 있음
    /* class 내부값을 어떻게 봐? 코드를 뜯어서만 볼 수 있는거 아닌가? */
}

const Experiment = new experiment();
console.log(Experiment.publicField); // early also chrome
console.log(Experiment.privateField); // 출력안됨 (undefined)

// 4. Static properties and methods > 한줄정리: 공통문항 == static
// too Soon !
/* class라는 붕어빵 틀을 만들어놓으면 자신이 원하는 재료(data)를 넣어 object를 생성하는데, 
간혹 class가 가진 고유의 값과 반복되어지는 method의 경우를 static으로 묶음 
> object와 상관없이 class에 이를 연결시켜놓음  
*/

// 즉, static은 class에 연결되어있는 것 > 출력 시, class이름을 이용해야함
// using form: [Class name.static]

class Article {
    // field
    static publisher = "Dream Coding"; //static
    constructor(ArticleNumber) {
        this.ArticleNumber = ArticleNumber;
    }
    //method
    static printPublisher() {
        //static method
        console.log(Article.publisher);
    }
    printgogo() {
        console.log(this.ArticleNumber);
    }
}
// 방을 먼저 만들고, 그 안에 class를 이용해 채운다 (할당 먼저 -> 클래스이용)
const article1 = new Article(1); // object
const article2 = new Article(2);
console.log(Article.publisher); // atricle1.publisher로 호출해도 Dream coding 출력 x > static에 class value와 method가 연결되어있기 때문
Article.printPublisher(); // 그래서 class를 직접 호출해야함
/* article2.printPublisher(); -> X, the reason is that static */

// static method 일 경우엔, constructor을 이용해 출력 할 순 없나요?**
// 응 없어.
console.log(article2.printgogo()); // ouput : undefined

// object와 상관없이 *input data*에 공통적으로 적용될 때, 이용 !

// 5. 상속과 다형성 (inheritance)**중요
// a way for one class to extend another class
// extends로 class의 속성을 상속받음 ex) class Rectangle extends Shape{}
// using form  [class 상속받을 객체 extends class name{}]
class Shape {
    // shape 도형이란 공통점, 재사용, 확장성, 유지보수 굿
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color1 = color; // 반드시 통일할 필요 x
    }

    draw() {
        // method 1
        console.log(`drawing ${this.color1} color of things`);
    }

    getArea() {
        // method 2
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} //extends라는 class를 이용해 연장
class Triangle extends Shape {
    getArea() {
        // overiding - 삼각형의 넓이 구하는 함수 재정의
        // 이를 이용할 경우, 부모의 method는 호출하지 않음
        // 부모도 호출하고 싶다면, super.draw();
        super.draw();
        return (this.width * this.height) / 2;
    }
}

class Cycle extends Shape {
    getArea() {
        return (this.width / 2) * (this.width / 2);
    }
}

//example1
const rectangle = new Rectangle(20, 20, "blue"); // color == char
rectangle.draw();
console.log(rectangle.getArea());

//example2
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

//example3
const cycle = new Cycle(20, 20, "purple");
cycle.draw();
console.log(cycle.getArea());
// 변수 cycle에 class를 사용해서 data를 할당해놓음
// => Cycle 아닌 cycle에 getArea가 있는 것

// 6. Class checking: instanceof
// 부제: 니가 내 자식이 맞냐?
// instance __ class > 왼쪽 class로 만든 object인지 아닌지 체크
// return to true or falue
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

// [부록] 추가공부(from Ellie extra class)
// need to study : class diagram(클래스 다이어그램)
// class를 이용해 object를 만들게되면, constructor가 실행됨
// ref: https://youtu.be/fU25vI0EOOk

/* callbackFn이용해, 우리가 원하는 기능을 이용할 수 있음 */

console.clear();

class Counter {
    constructor(runEveryFiveTimes) {
        // Have must it? yes, have to scope
        this.counter = 0; // inner variable
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
            // if this.callback is true(콜백함수가 있다면-안전성보장), execute
        }
    }
}
// parameter로 function이 전달될 때 사용, 하지만 예외처리 없어 에러 확률 높음
// this.callback(this.counter);
// runIf5times는 다양한 기능을 하는 함수를 받는 자리 == parameter
// this.counter & num 관계 => same

function printSomething(num) {
    console.log(`Wow!${num}`);
}
function alertNum(num) {
    alert(`Wow!${num}`); // 팝업창 생성
}

const coolcounter = new Counter(printSomething);
// method에 콜백을 할당하면, method를 호출할때마다 인자로 함수를 전달해야함.
// 하지만, 생성자에 콜백을 할당하면
// class를 만들때, 콜백함수 한번만 넘기면 됨.
const print = new Counter(alertNum);
// 콜백함수를 constructor로 받게되면, class로 object 만들 때
// 사용하는 사람이 이용하고 싶은 기능(콜백함수)을 넣어서 활용가능
// 즉, 재사용성 높아짐 *

coolcounter.increase(); // so many code -> how to decreas? 함수내부에 넣으면 됨.
coolcounter.increase();
coolcounter.increase();
coolcounter.increase();
coolcounter.increase();
coolcounter.increase();
coolcounter.increase();
coolcounter.increase();
coolcounter.increase();
coolcounter.increase();

// **Class의 재사용성 가능성 향상**
// Counter class를 자기 입맛에 맞는 객체로 만들 수 있음
// 특정 기능을 하는 객체들을 만들 수 있음

// class의 function안에 조건을 설정한다면, 더 다양한 interation이 어렵
// 한정적인, 동적인 반응만 가능

/* class Counter {
  constructor() {
    this.counter = 0; // inner variable
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0) {
      console.log('yo!');
    }
  }
} */

// So, using callbackFn

/* class Counter {
  constructor() {
    this.counter = 0; // inner variable
  }

  increase(runIf5times) {
    this.counter++;
    console.log(this.counter);
    if(this.counter%5 === 0) {
      runIf5times(this.counter); 
      // runIf5times는 다양한 기능을 하는 함수를 받는 자리 == parameter
    }
  }
} 

const coolcounter = new Counter();
function printSomething(num) {
  console.log(`Wow!${num}`);
} 

function alertNum(num) {
  alert(`Wow!${num}`); // 팝업창 생성 
} 

coolcounter.increase(printSomething); //다양한 함수를 정의하고, 인자로 받아오자 
coolcounter.increase(printSomething); // 그럼 다채로운 인터렉션이 가능함 
coolcounter.increase(printSomething);
coolcounter.increase(printSomething);
coolcounter.increase(printSomething);

coolcounter.increase(printSomething);
coolcounter.increase(printSomething);
coolcounter.increase(printSomething);
coolcounter.increase(printSomething);
coolcounter.increase(alertNum);*/

// 하지만, increase 함수를 이용할때마다, parameter(function)을 받아오는게 비효율적
// 그래서, constructor에서 callbackFn를 받음
