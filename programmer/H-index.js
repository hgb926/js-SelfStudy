const solution = citations => {
    let temp = []
    for (let i = 0; i < citations.length; i++) {
        let result = 0
        for (let j = 0; j < citations.length; j++) {
            if (citations[i] <= citations[j]) {
                result++
            }
        }
        temp.push(Math.min(result, citations[i]))
    }
    return temp.sort((a, b) => b - a)[0]
}
console.log(solution([9,7,6,2,1]))
console.log(solution([3, 0, 6, 1, 5]))