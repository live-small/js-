"use strict";

// 1. Concept

// function recursive(parameter) {
//     execute something..
//     if(조건) {
//         return result
//     } else {
//         return recursive(작업된 인자)
//     }
// }
// function findFromRandomStory(): string {
//   let str = "it's ok";
//   return str;
// }

// function answerByStory(question: string): string {
//   // 임의의 이야기에서 답 찾기
//   let answer = findFromRandomStory();

//   // 이야기 속에서 답이 나오지 않으면
//   if (answer === null) {
//     return answerByStory(question); // 다시 호출
//   }
//   // 답이 나오면
//   else {
//     return answer; // 답을 반환
//   }
// }

let numbers = [3, 1, 4, 5, 9];

function recursive(acc, array) {
  if (array.length === 0) {
    console.log(`total is ${acc}`);
    return acc;
  } else {
    try {
      console.log(`recursive(${acc} [${array}]) is "`);
      return recursive(acc + array[0], array.slice(1));
    } catch (e) {
    } finally {
      console.log(`" said.`);
    }
  }
}
recursive(0, numbers);
