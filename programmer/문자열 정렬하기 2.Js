const solution = my_string => {
    let result = [];
    for (let i = 0; i < my_string.length; i++) {
        result.push(my_string.toLowerCase()[i].charCodeAt())
    }

    return result
        .sort((a, b) => a - b)
        .map(n => String.fromCharCode(n))
        .join("")
}
console.log(solution('Bcad'))