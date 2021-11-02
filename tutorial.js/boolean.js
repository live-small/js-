'use strict'

// 0 == null == undefined = ''
// 1) null,undefined 
// 2) 0, ''(empty string)

// 1. false와 관계 
console.log(false == null); // f  ** 
console.log(false == undefined); // f ** 
console.log(false == 0); // t 
console.log(false == ''); // t 
console.log(false == ``); // t 
console.log(false == []); // t 
console.log(false == NaN); // f 

/* null, undefined는 값이 없는 친구들  --> false와 같지 않음 
  0과 empty string은 값이 있는 친구들 --> boolean으로 변환 시, false값임 */

// 2. NaN와 관계 
console.log(NaN == null); // f
console.log(NaN == undefined); // f
console.log(NaN == 0); // f
console.log(NaN == ''); // f 
console.log(NaN == NaN); // f

// 3. true와 관계 
console.log(true == null); // f
console.log(true == undefined); // f
console.log(true == 0); // f
console.log(true == ''); // f 
console.log(true == '0');

// 4. 1) + 2) 
console.log('' == null); // f  
console.log('' == undefined); // f  
console.log(0 == null); // f
console.log(0 == undefined) // f