// const solution = new_id => {
//     let result = '';
//
//     // 1단계
//     for (let i = 0; i < new_id.length; i++) {
//         result += new_id[i].toLowerCase();
//     }
//
//     // 2단계
//     result = result.replace(/[^a-z0-9._-]/g, '');
//
//     // 3단계
//     result = result.replace(/\.{2,}/g, '.');
//
//     // 4단계
//     if (result[0] === ".") result = result.slice(1);
//     if (result[result.length-1] === ".") result = result.slice(0, -1)
//
//     // 5단계
//     if (!result) {
//         result = "a";
//     }
//
//     // 6단계
//     if (result.length >= 16) result = result.slice(0, 15)
//     if (result[result.length-1] === ".") result = result.slice(0, 14)
//
//     // 7단계
//     if (result.length <= 2) {
//         while (result.length <= 2) {
//             result += result[result.length-1]
//         }
//     }
//
//     return result
// }


const solution = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')
    return id.padEnd(3, id[id.length-1])
}


console.log(solution("...!@BaT#*..y.abcdefghijklm"))
console.log(solution("z-+.^."))
console.log(solution("=.="))
console.log(solution(	"123_.def"))
console.log(solution("abcdefghijklmn.p"))