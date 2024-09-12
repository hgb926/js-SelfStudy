const solution = (s, n) => {
    let answer = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i].charCodeAt() === 32) answer += " "
        if (s[i].charCodeAt() <= 122) {
            answer += String.fromCharCode(s[i].charCodeAt()+n)
        } else {
            answer += String.fromCharCode(s[i].charCodeAt()-25)
        }
    }
    return answer
}

let s1 = solution(("a B z"), 4);
console.log(s1)
