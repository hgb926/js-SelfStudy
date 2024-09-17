const solution = (my_string, indices) => {
    let result = ''
    for (let i = 0; i < my_string.length; i++) {
        if (i !== indices[i]) result += my_string[i]
        // 다시 해보자
    }
    return result;
}
console.log(solution("apporoograpemmemprs",[1, 16, 6, 15, 0, 10, 11, 3]))