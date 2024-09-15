const solution = n => {
    // 결과를 저장할 이차원 배열 초기화
    let result = [];

    // 이차원 배열 생성
    for (let i = 0; i < n; i++) {
        // 각 행을 저장할 배열
        let row = [];
        for (let j = 0; j < n; j++) {
            // i와 j가 같으면 1, 그렇지 않으면 0
            row.push(i === j ? 1 : 0);
        }
        // 생성된 행을 결과 배열에 추가
        result.push(row);
    }

    return result;
}

console.log(solution(3))