const solution = (i, j, k) => {
    let temp = ''
    for (let l = i; l <= j; l++) {
        temp += l
    }
    let result = 0
    for (let l = 0; l < temp.length; l++) {
        if (temp[l] === k.toString()) result++
    }
    return result;
}
console.log(solution(1, 13, 1))
console.log(solution(10,50,5))
console.log(solution(3,10,2))