"use strict";

// 1. Concept

// function recursive(parameter) {
//     execute something..
//     if(����) {
//         return result
//     } else {
//         return recursive(�۾��� ����)
//     }
// }
// function findFromRandomStory(): string {
//   let str = "it's ok";
//   return str;
// }

// function answerByStory(question: string): string {
//   // ������ �̾߱⿡�� �� ã��
//   let answer = findFromRandomStory();

//   // �̾߱� �ӿ��� ���� ������ ������
//   if (answer === null) {
//     return answerByStory(question); // �ٽ� ȣ��
//   }
//   // ���� ������
//   else {
//     return answer; // ���� ��ȯ
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
