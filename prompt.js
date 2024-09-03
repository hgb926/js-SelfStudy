const solution = (n) => {
    let answer = [];
    let str = n.toString()
    for (let i = 0; i < str.length; i++) {
        answer.push(parseInt(str[i]));
    }
    return answer.reverse();
}

let solution1 = solution(12345);
console.log(solution1)