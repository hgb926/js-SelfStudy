function solution(k, m, score) {
    let result = 0;

    // 점수를 내림차순으로 정렬
    score.sort((a, b) => b - a);

    // m개씩 묶어서 최저점 * m을 더함
    for (let i = 0; i <= score.length - m; i += m) {
        const box = score.slice(i, i + m);
        result += box[m - 1] * m; // 상자에서 가장 작은 값 * m을 더함
    }

    return result;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33