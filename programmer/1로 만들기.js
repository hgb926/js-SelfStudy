const solution = num_list => {
    let result = 0;
    for (let i = 0; i < num_list.length; i++) {
        let targetNum = num_list[i];
        while (targetNum > 1) {
            if (targetNum % 2 === 0) {
                result++
                targetNum /= 2
            } else {
                result++
                targetNum = (targetNum - 1) / 2
            }
        }
    }
    return result
}
console.log(solution([12,4,15,1,14]))