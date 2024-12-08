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

    // map.put(key, map.getOrDefault(key, 0) + 1 )
    // 스테이지별 사용자 분포 계산
    stages.forEach(stage => {
        if (stage <= N) {
            stageCounts[stage] = (stageCounts[stage] || 0) + 1; // 도달한 사용자 수 누적
        } else {
            stageCounts[stage-1] = 0;
        }
    })
    let length = stages.length;
    let resultMap = {};

    for (const key in stageCounts) {
        resultMap[key] = (stageCounts[key] / length)
        length -= stageCounts[key];
    }
    // 내림차순 정렬
    let sorted = Object.entries(resultMap).sort((a, b) => b[1] - a[1]);
    let result = []

    for (const element of sorted) {
        result.push(+element[0])
    }
    return result

}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4]));