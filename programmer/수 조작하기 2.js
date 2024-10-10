const solution = numLog => {
    let answer = ''

    for (let i = 0; i < numLog.length; i++) {

        let current = numLog[i]
        let next = numLog[i+1]

        if (current+1 === next) {
            answer += 'w'
        } else if (current-1 === next) {
            answer += 's'
        } else if (current+10 === next) {
            answer += 'd'
        } else if (current-10 === next) {
            answer += 'a'
        }
    }
    return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]))