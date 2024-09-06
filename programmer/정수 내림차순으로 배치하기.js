
const solution = (n) => {
    let string = n.toString()
    let temp = []
    for (let i = 0; i < string.length; i++) {
        temp.push(string[i])
    }
    let sorted = temp.sort((a, b) => b - a);
    let result = ''
    for (let i = 0; i < sorted.length; i++) {
        result += sorted[i]
    }
    return +result
}

let result = solution(118726);
console.log(result)