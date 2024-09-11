const solution = n => {
    let count = 0;
    while (n !== 1  &&  count < 500) {
        n % 2 === 0 ? n /= 2 : n = n * 3 + 1
        count++
    }
    return count < 500 ? count : -1;
}
console.log(solution(12))