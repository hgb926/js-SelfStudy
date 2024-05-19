function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string.charCodeAt(i) > 90) {
            answer += my_string[i].toUpperCase()
        } else if (my_string.charCodeAt(i) < 90) {
            answer += my_string[i].toLowerCase()
        }
    }
    return answer;
}
let s = solution("cccCCC");
console.log(s)