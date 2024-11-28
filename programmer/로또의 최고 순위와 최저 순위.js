const solution = (lottos, win_nums) => {
    let min = 7;
    let max = 7;

    for (let i = 0; i < lottos.length; i++) {
        if (win_nums.includes(lottos[i])) {
            min--
        }
        if (win_nums.includes(lottos[i]) || lottos[i] === 0) {
            max--
        }
    }

    return min === 7 ? [1, 6] : [max, min];
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]))