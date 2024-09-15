const solution = (my_string, num1, num2) => {
    let result = ''
    for (let i = 0; i < my_string.length; i++) {
        if (i === num1) {
            result += my_string[num2]
        } else if (i === num2) {
            result += my_string[num1]
        } else {
            result += my_string[i];
        }
    }
    return result;
}
let s = solution('hello', 1, 2);
console.log(s)