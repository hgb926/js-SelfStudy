const solution = s => {
    let sum = 0;
    const removeSpace = s.split(" ")
    console.log(removeSpace)
    for (let i = 0; i < removeSpace.length; i++) {
        if (removeSpace[i] === "Z") {
            sum -= +removeSpace[i-1]
        } else if (removeSpace[i] !== "Z") {
            sum += +removeSpace[i]
        }
    }
    return sum;
}
console.log(solution("1 2 Z 3"))