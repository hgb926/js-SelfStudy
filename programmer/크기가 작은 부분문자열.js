function solution(t, p) {
    let answer = 0;
    for (let i = 0; i < t.length; i ++) {
        if (t.slice(i, p.length+i) > p) {
            answer++;
        }
    }
    return answer;
}

let number = solution("500220839878", "7");
console.log(number)