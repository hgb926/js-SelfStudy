
function solution(my_string) {
    var answer = 0;
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i].charCodeAt() < 56) {
            answer += +my_string[i]
        }
    }
    return answer;
}

// console.log(solution("aAb1B2cC34oOp"))
// console.log(solution("1a2b3c4d123"))