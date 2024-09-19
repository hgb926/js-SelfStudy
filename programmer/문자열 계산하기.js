const solution = my_string => {
    const oper = ['+', '-']
    const removedSpace = my_string.replaceAll(" ", "")
    for (let i = 0; i < my_string.length; i++) {
        if (oper.includes(removedSpace[i])) {
            let first = +removedSpace.slice(0, i)
            let second = +removedSpace.slice(i+1)
            if (removedSpace[i] === "-") return first - second
            else return first + second
        }
    }
}
console.log(solution("31 + 24"))
console.log(solution("33 - 44"))