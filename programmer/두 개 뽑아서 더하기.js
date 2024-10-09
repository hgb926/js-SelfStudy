const solution = (numbers) => {
    // 일단 중복 제거
    const distinct = [...new Set(numbers)]
    let result = []
    for (let i = 0; i < distinct.length-1; i++) {
        for (let j = i+1; j < distinct.length; j++) {
            result.push(distinct[i] + distinct[j])
        }
    }
    return [...new Set(result)].sort((a, b) => a - b);
}
console.log(solution([2,1,3,4,1]))
console.log(solution([5,0,2,7]))