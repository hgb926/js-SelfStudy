const solution = my_string => {
    let result = [];
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(my_string[i])) result.push(+my_string[i]);
    }
    return result.sort((a, b) => a - b);
}
console.log(solution('hi12392'))