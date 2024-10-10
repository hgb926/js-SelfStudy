const solution = (arr, n) => {
    if (n > arr[arr.length-1]) return arr[arr.length-1]
    arr.push(n)
    arr.sort((a, b) => a - b);
    const idx = arr.indexOf(n)
    return Math.max((idx - arr[idx-1]) > (arr[idx+1] - idx) ? arr[idx-1] : arr[idx+1])
}
console.log(solution([3,10,28], 20))
console.log(solution([10,11,12],13))