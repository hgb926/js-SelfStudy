const solution = (numer1, denom1, numer2, denom2) => {
    // 최대공약수 찾기
    let divisor = denom1;
    while (true) {
        if (divisor % denom1 === 0 && divisor % denom2 === 0) break;
        divisor++
    }
    return [(divisor / denom1 * numer1) + (divisor / denom2 * numer2), divisor]
}
console.log(solution(1,2,3,4))
console.log(solution(9,2,1,3))