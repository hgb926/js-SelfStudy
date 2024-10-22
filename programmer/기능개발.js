const solution = (progresses, speeds) => {
    let days = [];
    for (let i = 0; i < progresses.length; i++) {
        let day = Math.ceil((100 - progresses[i]) / speeds[i])
        days.push(day)
    }
    let result = []
    let count = 1
    for (let i = 0; i < days.length - 1; i++) {
        if (days[i] >= days[i + 1]) {
            count++
        } else {
            result.push(count)
            count = 1
        }
    }
    result.push(count) // 마지막 원소 추가
    return result
}
console.log(solution([93, 30, 55], [1, 30, 5]))
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))