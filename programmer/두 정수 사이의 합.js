const calc = (a, b) => {
    let sum = 0;
    let max = a > b ? a : b;
    let min = a > b ? b : a;
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum;
}
let number = calc(3,5);
console.log(number)