const solution = myString => {

    return [...myString.replaceAll("x", '')].sort((a, b) => b- a);
}


console.log(solution("dxccxbbbxaaaa"))