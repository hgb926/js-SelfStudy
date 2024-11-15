const solution = (N, stages) => {
    // 객체 매핑
    let map = {};
    stages.sort((a, b) => a - b);
    for (let i = 0; i < stages.length; i++) {
        if (map[stages[i]]) {
            map[stages[i]]++
        } else {
            map[stages[i]] = 1;
        }
    }



}

console.log(solution(5,[2,1,2,6,2,4,3,3]))
// console.log(solution(4,[4,4,4,4,4]))