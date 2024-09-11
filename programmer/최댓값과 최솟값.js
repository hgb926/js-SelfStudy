function solution(s) {
    let temp = s.split(" ").map(Number); // 공백을 기준으로 문자열을 나누고 숫자로 변환
    let max = Math.max(...temp);
    let min = Math.min(...temp);
    return min + " " + max;
}
let s = solution("-1 -2 -3 -4");
console.log(s)