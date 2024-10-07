const solution = (n) => {
    let result = n+1;
    let originCount = [...n.toString(2)].filter(n => n != 0).length

    while (true) {

        if ([...result.toString(2)].filter(n => n != 0).length !== originCount) {
            result++
        } else {
            return result
        }

    }
}