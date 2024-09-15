const solution = n => {
    let i = 1;
    while (1) {
        if (Number.isInteger(i * 6 / n)) return i
        i++
    }
}
console.log(solution(10))