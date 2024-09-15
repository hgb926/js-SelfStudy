const solution = (a, b, c) => {
    let result = [...new Set([a,b,c].sort((a, b) => a-b))];
    switch (result.length) {
        case 3 :
            return a + b + c;
        case 2 :
            return (a + b + c) * (a**2 + b**2 + c**2)
        case 1 :
            return (a*3) * (a**2 + a**2 + a**2) * (a**3 + a**3 + a**3)
    }
}
console.log(solution(4,4,4))