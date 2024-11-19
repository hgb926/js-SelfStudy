const solution = (N, stages) => {
    // 실패율 매핑
    // 총 도전자 객체, 성공하지못한 자 객체
    let stageMap = {};
    stages.sort((a, b) => b - a);
    console.log(stages)
    for (let i = 0; i < stages.length; i++) {
        if (stages[i] > N) { // N보다 높은 (모두 클리어)
          stageMap[stages[i]-1] = 0;
        } else if (stageMap[stages[i]]) {
            stageMap[stages[i]]++
        } else {
            stageMap[stages[i]] = 1;
        }
    }
    console.log(stageMap)

    // 역 누적 로직 (나누기 연산을 하기위해서)
    let result = {};
    let keys = Object.keys(stageMap).map(Number).sort((a, b) => a - b);

    for (let i = 0; i < keys.length; i++) {
        let currentKey = keys[i]
        let sum = 0;
        for (let j = i; j < keys.length; j++) {
            if (currentKey === N) {
                sum++
            }
             sum += stageMap[keys[j]];
        }
        result[currentKey] = sum;
    }
    console.log(result)

    // let arr = []
    // for (const stage in stageMap) {
    //     arr.push(stageMap[stage] / result[stage]);
    // }
    // console.log(arr)
}

console.log(solution(5,[2,1,2,6,2,4,3,3]))
// console.log(solution(4,[4,4,4,4,4]))