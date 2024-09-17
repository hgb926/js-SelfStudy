const solution = (arr, flag) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i] - 1; j++) {
            if (flag[i]) {
                result.push(arr[i])
                console.log(result)
            } else {
                result.pop()
            }
        }
    }
    return result
}
console.log(solution([3,2,4,1,3], [true,false,true,false,false]))
