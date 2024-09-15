const odd = n => {
    let sum = 0
    for (let i = 1; i <= n; i += 2) {
        sum += i
    }
    return sum
}

const even = n => {
    let sum = 0
    for (let i = 2; i <= n; i += 2) {
        sum += (i * i)
    }
    return sum
}

const solution = n => {
    if (n % 2 === 0) {
        return even(n)
    } else {
        return odd(n)
    }
}
