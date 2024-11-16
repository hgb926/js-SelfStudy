const solution = (n, a, b) => {
    /**
     * while n이 2이기 전까지
     * 1회 반복 시
     * n = n / 2, a,b는
     * 만약 홀수면 (a + 1) / 2, 아니면 / 2
     */
    let answer = 1;
    while (n !== 2) {
        a % 2 === 1 ? a = (a + 1) / 2 : a = a / 2
        b % 2 === 1 ? b = (b + 1) / 2 : b = b / 2
        n = n / 2
        answer++
        if (b - a === 1) {
            return answer
        }
    }
    return answer;
}
console.log(solution(8,4,7))