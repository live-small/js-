// 중괄호 열고 닫는거 잘보기 ! 범위 !

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`a1, ${i}`);
    }
}

for (let a = 0; a < 11; a++) {
    if (a > 8) {
        break;
    }
    console.log(a);
}

for (let i = 0; i < 11; i++) {
    console.log(`a1, ${i}`);
}

/* i+2가 문제가 있네 => 무한루프로 감 
for 문에서 step 부분 +2는 어떻게 할지 고민, 학습 
*/
