const solution = s => {
    var answer = s.split(" ");
    let result = ''
    for (let i = 0; i < answer.length; i++) {
            let converted = ''
        for (let j = 0; j < answer[i].length; j++) {
            if (j % 2 === 0) {
                converted += answer[i][j].toUpperCase()
            } else {
                converted += answer[i][j].toLowerCase()
            }
        }
        result += converted + " "
    }
    return result.slice(0, -1)
}
let s = solution("try hello world");
console.log(s)