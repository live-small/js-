// Written as of ES2019(ES11)

/**
 * Optional Chaining(ES11) 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 * form : ?.
 * KEY: 참조의 단순화(from undefined or null) 
 * using : 존재하지 않을 수 있는 메서드 호출 or API 사용 시
 */

{
    const person1 = {
        name: 'Suhwa',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Ellie',
            },
        },
    };
    const person2 = {
        name: 'Bob',
    };

    // 💩💩💩💩💩 
    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        printManager(person1);
        // printManager(person2); Error --> Issue 
    }
    // 💩💩💩 using ternary operator
    {
        function printManager(person) {
            console.log(
                person.job 
                ? person.job.manager 
                    ? person.job.manager.name
                    : undefined 
                : undefined
            );
        }
        printManager(person1);
        printManager(person2); // output: undefined
    }
    // 💩 using &&(and operator)
    {
        function printManager(person) {
            console.log(person.job&&person.job.manager&&person.job.manager.name);
        }
        printManager(person1);
        printManager(person2); 
    } // 코드중복 --> 비효율적

    // ✨
    {
        function printManager(person) {
            console.log(person.job?.manager?.name); // **hot trend
        }
        printManager(person1);
        printManager(person2); 
    }

    // array 접근 
    // let arrayItem = arr?.[42];

    // default value 
    // form: ?? default value 
    let customer = {
        name: 'Nari',
        details : {age : 82}
    };
    const customerCity = customer?.city ?? "Unknown city";
    console.log(customerCity);
}

/**
 * Nullish Coalescing Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_Coalescing_Operator
 * form: ?? default value
 * KEY: 더 섬세해진 기본값 설정 (empty string, 0(num))
 * NUll, undefined 일 경우에만, 실행되는 기본값 설정 ** 
 */
{
    // Logical OR operator 
    // false: false, '', 0(num), null, undefined
    // 앞에있는 값이 false 일때만, 뒷 값이 실행 
    // 0, ' ', NaN을 유효한 값으로 이용할 때, 버그발생 가능성 높음 

    {
        const name ='Suhwa';
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name ='';
        const userName = name || 'Guest';
        console.log(userName);
    } // 사용자가 이름을 설정하지 않아도 Guest로 할당됨

    {
        const num = 0;
        const message = num || 'undefined';
        console.log(message); 
    } // 0을 넣었지만, undefined으로 할당됨 <-- 0을 false로 간주


    // ✨ - Do you has value? 
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message); 
    }
}

/**
 * Nullish & Optional chaining 
 * Nullish controls undefined and null 
 * : 명확한 값으로 undefined과 null을 처리함 
 * Optional chaining is useful when access the value may be Null or undefined 
 * : null or undefined 일 수 있는 객체의 속성에 접근할 때 유용 
 */
