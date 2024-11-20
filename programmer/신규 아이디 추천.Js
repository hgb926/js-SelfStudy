const solution = new_id => {
    let result = '';

    // 1단계
    for (let i = 0; i < new_id.length; i++) {
        result += new_id[i].toLowerCase();
    }
    console.log(result, 1)

    // 2단계
    result = result.replace(/[^a-z0-9._-]/g, '');
    console.log(result, 2)
    // 3단계
    result = result.replace(/\.{2,}/g, '.');
    console.log(result, 3)
    // 4단계
    if (result[0] === ".") result = result.slice(1);
    if (result[result.length-1] === ".") result = result.slice(0, -1)
    console.log(result, 4)
    // 5단계
    if (!result) {
        result = "a";
    }
    console.log(result, 5)
    // 6단계
    if (result.length >= 16) result = result.slice(0, 15)
    console.log(result, 6)
    // 7단계
    if (result.length <= 2) {
        while (result.length <= 3) {
            result += result[result.length-1]
        }
    }
    console.log(result, 7)
    return result
}
// console.log(solution("...!@BaT#*..y.abcdefghijklm"))
console.log(solution("z-+.^."))
// console.log(solution("=.="))
// console.log(solution(	"123_.def"))
// console.log(solution("abcdefghijklmn.p"))