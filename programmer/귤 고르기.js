const solution = (k, tangerine) => {
    let map = {};
    tangerine.forEach(key => {
        map[key] = (map[key] || 0) + 1;
    })
    console.log(map)
    // 객체 정렬

}
console.log(solution(6, [1,3,2,5,4,5,2,3]))
// console.log(solution(4, [1,3,2,5,4,5,2,3]))
// console.log(solution(2, [1,1,1,1,2,2,2,3]))