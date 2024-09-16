const solution = (my_string, m, c) => {
    let answer = ''
    for (let i = c-1; i < my_string.length; i = i + m) {
        answer += my_string[i]
    }
    return answer;
}
console.log(solution("ihrhbakrfpndopljhygc", 4, 2))
console.log(solution('programmers', 1, 1))