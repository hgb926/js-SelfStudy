const solution = num => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i === 1) continue; // 1은 소수가 아님
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) sum += i;
    }
    return sum;
}
console.log(solution(2000000))