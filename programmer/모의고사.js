function solution(answers) {
    // 수포자들의 찍기 패턴
    const patterns = [
        [1, 2, 3, 4, 5], // 1번 수포자
        [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 3번 수포자
    ];

    // 수포자들이 맞춘 개수를 저장하는 배열
    const scores = [0, 0, 0];

    // 정답 배열과 수포자들의 패턴을 비교
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < patterns.length; j++) {
            if (answers[i] === patterns[j][i % patterns[j].length]) {
                scores[j]++;
            }
        }
    }
    console.log(scores)

    // 최고 점수 찾기
    const maxScore = Math.max(...scores);

    // 최고 점수를 받은 수포자(1, 2, 3)의 번호를 반환
    return scores
        .map((score, index) => (score === maxScore ? index + 1 : null))
        .filter(number => number !== null);
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]