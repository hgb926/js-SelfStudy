function solution(n, k) {
    var answer = [];
    for (let i = k; i <= n; i+=k) {
        answer.push(i)
    }
    return answer;
}
let solution1 = solution(10,3);
console.log(solution1)