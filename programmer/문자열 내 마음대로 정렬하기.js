const solution = (string, n) => {
    return string.sort((a, b) => {
        if (a[n] !== b[n]) {
            return a[n].localeCompare(b[n]);
        }
        return a.localeCompare(b)
    })
}
console.log(solution(['sun', 'bed', 'car'], 1))
console.log(solution(['abce', 'abcd', 'cdx'], 2))