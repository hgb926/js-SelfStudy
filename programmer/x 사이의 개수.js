const solution = myString => {
    let temp = myString.split('x')
    let result = []
    for (let i = 0; i < temp.length; i++) {
        result.push(temp[i].length)
    }
    return result;
}
console.log(solution('oxooxoxxox'))