const solution = numbers => {
    let set = []
    // numbers.sort((a, b) => a - b)
    for (let i = 0; i < numbers.length; i++) {
        let add = numbers[i].toString()
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                add += numbers[j]
            }
        }
        set.push(add)
    }
    return set
}
console.log(solution([6, 10, 2]))
// console.log(solution([3, 30, 34, 5, 9]))