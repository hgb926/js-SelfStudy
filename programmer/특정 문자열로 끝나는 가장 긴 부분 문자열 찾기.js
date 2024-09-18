const solution = (myString, pat) => {
    let result = ''
    for (let i = 0; i < myString.length; i++) {
        result += myString[i]
        if (result.includes(pat) && myString[i+1] !== pat) return result
    }
}
// 3번 테스트 반례 걸림

console.log(solution("AbCdEFG", "dE"))
console.log(solution("AAAAaaaa","a"))