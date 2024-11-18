const solution = (N, stages) => {
    // 객체 매핑
    let stageMap = {};
    stages.sort((a, b) => b - a);
    console.log(stages)
    for (let i = 0; i < stages.length; i++) {
        if (stageMap[stages[i]]) {
            stageMap[stages[i]]++
        } else {
            stageMap[stages[i]] = 1;
        }
    }
    console.log(stageMap)

    // 역 누적 로직
    let result = {};
    let keys = Object.keys(stageMap).map(Number).sort((a, b) => a - b);

    for (let i = 0; i < keys.length; i++) {
        let currentKey = keys[i]
        let sum = 0;
        for (let j = i; j < keys.length; j++) {
            sum += stageMap[keys[j]];
        }
        result[currentKey] = sum;
    }
    console.log(result)

    for (const stage in stageMap) {
        // stage = key
        // stageMap[stage]; = value
        // 현재 순회하고있는 key보다 높은 key의 value들을
        // 다 더해서 key와 다시 매핑해야 한다.

    }


}

console.log(solution(5,[2,1,2,6,2,4,3,3]))
// console.log(solution(4,[4,4,4,4,4]))