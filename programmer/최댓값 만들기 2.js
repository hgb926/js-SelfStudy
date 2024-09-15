const solution = numbers => {
    let sort = numbers.sort((a, b) => a - b);
    return Math.max((sort[0] * sort[1]), (sort[sort.length-1] * sort[sort.length-2]))
}

console.log(solution([1,2,-3,4,-5]))