function solution(my_strings, parts) {
    var answer = '';
    for (let i = 0; i < my_strings.length; i++) {
        for (let j = 0; j < my_strings[i].length; j++) {
            answer += my_strings[i].slice(parts[i][0], parts[i][1]+1);
            break;
        }
    }
    return answer;
}

let s = solution(["progressive", "hamburger", "hammer", "ahocorasick"],[[0, 4], [1, 2], [3, 5], [7, 7]] );
console.log(s)