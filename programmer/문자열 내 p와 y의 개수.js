const solution = s => {
    let p = 0, y = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() === 'p') p++;
        else if (s[i].toLowerCase() === 'y') y++;
    }
    return p === y
}

let solution1 = solution("pPoooyY");
console.log(solution1)