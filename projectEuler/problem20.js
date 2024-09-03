const calculation = (number) => {
    let sum = BigInt(1);  // BigInt로 초기화
    for (let i = number; i > 1; i--) {
        sum *= BigInt(i);  // 각 곱셈도 BigInt로 변환
    }

    let result = sum.toString();  // 최종 결과를 문자열로 변환
    let value = 0;

    // 각 자리의 숫자를 더함
    for (let i = 0; i < result.length; i++) {
        value += parseInt(result[i]);  // 각 자릿수를 숫자로 변환하여 더하기
    }

    return value;
}

let result = calculation(100);
console.log(result);  // 각 자리의 숫자를 더한 결과 출력