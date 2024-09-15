const solution = my_string => [...my_string].filter(str => !['a', 'e', 'i', 'o', 'u'].includes(str)).join("")
console.log(solution(`nice to meet you`));

// 미해결
