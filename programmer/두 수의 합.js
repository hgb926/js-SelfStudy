
const solution = (a, b) => (BigInt(a) + BigInt(b)).toString();
// js 는 숫자의 최대 정밀도를 초과하는 큰 숫자를 정확히 다루지 못함
// 그래서 big int 함수를 사용해야 함. (더 높은 정밀도 제공)

console.log(solution("18446744073709551615", "287346502836570928366"));