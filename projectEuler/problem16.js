const calculation = (squareNum) => {
    let sum = (BigInt(2) ** BigInt(squareNum)).toString();
    let result = 0;
    for (let i = 0; i < sum.length; i++) {
        result += +sum[i]
    }
    return result;

}

let number = calculation(1000);
console.log(number)