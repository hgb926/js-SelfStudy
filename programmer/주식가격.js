const solution = prices => {
    let result = []
    for (let i = 0; i < prices.length; i++) {

        let idx = i;
        let count = 0;
        while (idx < prices.length) { // 끝까지
            if (idx === prices.length - 1) {
                result.push(count)
            }

            if (prices[i] > prices[idx]) { // 끝까지 가기전에 떨어졌으면
                result.push(count)
                break;
            }
            count++
            idx++
        }
    }

    return result
}

console.log(solution([1,2,3,2,3]))