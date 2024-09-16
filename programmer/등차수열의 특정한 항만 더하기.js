const solution = (a, d, included) => {
    var answer = 0;
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            answer += a + i * d;
        }
    }
    return answer;
}

console.log(solution(3,4, [true, false, false, true, true]))