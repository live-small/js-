'use strict'

// Fuction Concept **
// return as parameter --> share to *ref of function 
// Ex) doSomething(add), add를 수행하는 얘를 가리켜봐, 어이 거기 너, 이 일좀 해 

/* function 선언: 난 이런 일을 할 수 있어! 이거 봐! 이런 걸 처리한다구 
   fucntion 호출: 이 함수 찾아서, 코드블럭 수행시켜 ! */ 



// function declearation 
function doSomething(add) {
    console.log(add);
    const result = add(3,4);
    console.log(result);
};

function add(a,b) {
    const sum = a+b;
    return sum;
};


// function call 
doSomething(add);
