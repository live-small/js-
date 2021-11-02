'use strict'
// XMLHttpRequest
// fetch()API

// JSON 
// Javascript Object Notation(객체표기법) - data type(format) 
// using string type 
// client ----JSON form---- serve 

// 1. object to JSON 
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'suhwa',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jupmp!`);
    },
};
// javascript에만 존재하는 symbol은 json으로 변환 x 

json = JSON.stringify(rabbit);
console.log(json);


json = JSON.stringify(rabbit, ['name', 'color']);
// array 이용해, 원하는 값만으로 목록생성 가능 
console.log(json);


json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === name ? 'suhwa' : value;
}); // using callbackFn -> 전달할 목록에 대해 세밀하게 조절가능 
console.log(json); // return value가 담겨있음 




// 2. JSON to object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); -> 존재하지 x 

console.log(rabbit.birthDate.getDate());
// date안에 존재하는 APIs(getDate) 이용 
// rabbit의 birthDate는 object 
console.log(obj.birthDate.getDate());
 // string(JSON)에서 object로 parse한 경우, string으로 할당
 // So, obj.birthDate는 string. 

 // object일때, 그 안의 APIs를 이용할 수 있는건가? yes
 // object 안에 존재하는 APIs가 뭔데? so many 
 // navigator.geolocation.getcurrentPostion (API>OBJ>FUN)









