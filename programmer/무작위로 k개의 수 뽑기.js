const solution = (arr, k) => {
    let result = []
    for (let i = 0; i < k; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result
}
//미해결
console.log(solution([0,1,1,2,2,3],3))
console.log(solution([0,1,1,1,1],4))