const solution = (s) => {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]] = 1;
        }
    }
    let result = ''
    for (const key in map) {
        if (map[key] === 1) {
            result += key
        }
    }
    return [...result]
        .map(c => c.charCodeAt())
        .sort((a, b) => a - b)
        .map(c => String.fromCharCode(c))
        .join("")
}
console.log(solution('abcabcadc'))
console.log(solution('abdc'))
console.log(solution("hello"))