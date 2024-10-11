const solution = my_string => {
    const result = [...my_string].filter(s => 65 > s.charCodeAt());
    console.log(result)
}
console.log(solution("aAb1B2cC34oOp"))
// let a = 'e'
// console.log(a.charCodeAt())