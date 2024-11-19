const solution = (N, stages) => {
    /**
     * 접근 방식:
     * 1. 각 스테이지에 도달한 사람 수와 실패한 사람 수를 계산.
     * 2. 실패율을 계산하여 스테이지 번호와 함께 저장.
     * 3. 실패율 기준으로 내림차순 정렬. 실패율이 같으면 스테이지 번호 오름차순 정렬.
     *
     * 예외:
     * - 특정 스테이지에 도달한 유저가 없을 경우 실패율은 0으로 정의.
     * - 모든 사용자가 마지막 스테이지를 클리어한 경우에도 처리.
     */

    let stageCounts = {}; // 스테이지 별 도달한 사용자 수 저장
    let result = [];

    // 스테이지별 사용자 분포 계산
    stages.forEach(stage => {
        if (stage <= N) {
            stageCounts[stage] = (stageCounts[stage] || 0) + 1; // 도달한 사용자 수 누적
        }
    })
    console.log(stageCounts)
    let totalPlayers = stages.length; // 전체 플레이어 수

    for (let i = 1; i <= N; i++) {
        let failRate = 0;

        if (stageCounts[i]) { // 현재 스테이지에 도달한 사용자가 있는 경우
            failRate = stageCounts[i] / totalPlayers;
            totalPlayers -= stageCounts[i] // 다음 스테이지로 도달한 사용자 수 감소
        }
        result.push({ stage: i ,failRate});
    }
    console.log(result)
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
// console.log(solution(4, [4, 4, 4, 4, 4]));