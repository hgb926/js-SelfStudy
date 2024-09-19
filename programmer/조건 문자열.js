const solution = (ineq, eq, n, m) => {
    if (ineq === ">" && eq === "=") return n >= m ? 1 : 0;
    if (ineq === "<" && eq === "=") return n <= m ? 1 : 0;
    if (ineq === ">" && eq === "!") return n > m ? 1 : 0;
    if (ineq === "<" && eq === "!") return n < m ? 1 : 0;
    return 0;
}

console.log(solution("<", "=", 20, 50))
console.log(solution(">", "!", 41, 78))
