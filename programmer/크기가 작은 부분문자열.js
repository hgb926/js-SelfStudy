const solution = (t, p) => {
    let result = 0;
    for (let i = 0; i < t.length - p.length+1; i++) {
        if ((Number(t.slice(i, i+p.length))) <= Number(p)) result++
    }
    return result;
}

// let number = solution("500220839878", "7");
// let number = solution("3141592", "271");
let number = solution("10203", "15");
console.log(number)