const solution = my_string => {
    let result = 0;
    let extract = ''
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(my_string[i])) {
            extract += my_string[i];
        }
        result += extract
    }
    return result
}
// 미해결
console.log(solution("aAb1B2cC34oOp"))