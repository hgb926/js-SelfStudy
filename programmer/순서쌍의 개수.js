const solution = n => {
    let result = 0;
    for (let i = n; i >= 1; i--) {
        if (Number.isInteger(n / i)) result++
    }
    return result;
}
console.log(solution(20))