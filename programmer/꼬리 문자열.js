const solution = (str_list, ex) => {
    let answer = ''
    for (const str of str_list) {
        if (!str.includes(ex)) {
            answer += str
        }
    }
    return answer
}

let solution1 = solution(["abc", "def", "ghi"], "ef");
console.log(solution1)