let result = 0n;  // BigInt 사용
for (let i = 1n; i <= 1000n; i++) {
    result += i ** i;  // 각 i에 대한 i^i를 더함
}

// 결과의 마지막 10자리 출력
const lastTenDigits = result % 100000000n;  // 10자리 수만 추출
console.log(lastTenDigits);
