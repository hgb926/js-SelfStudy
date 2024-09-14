const solution = n => {
    return `${Number(n)} is ${Number(n) % 2 === 0 ? 'even' : 'odd'}`;
}
console.log(solution(1))