const solution = (n, left, right) => {
    let answer = [];
    // 쓸데없는 메모리를 만들지말라
    for (let i = left; i <= right; i++) {
        answer.push(Math.max(Math.floor((i) / n) + 1,(i % n) + 1))
    }
    return answer;
}
console.log(solution(3,2,5))
console.log(solution(4,7,14))