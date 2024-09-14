const solution = (a, b) => {
    if ("" +a + b === 2 * a * b) return parseInt(""+a + b);
    if ("" +a + b > 2 * a * b) {
        return parseInt(""+a + b);
    } else {
        return 2 * a * b
    }
}

let s = solution(2, 91);
console.log(s)