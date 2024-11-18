const solution = numbers => {
    let result = []
    // loop는 0부터 n-1까지, 마지막자리에 -1 추가
    // 뒷 원소와 비교해서, 뒤가 더 크면 push[i+1]
    // 뒷 원소가 더 작으면 -1
    // 만약 뒷 원소와 동일하면 나올때까지 while?
    for (let i = 0; i < numbers.length-1; i++) {
        if (numbers[i] < numbers[i+1]) {
            while (true) {
                if (numbers[i] < numbers[i+1]) {
                    result.push(numbers[i+1]);
                    break;
                }
                result.push(numbers[i+1]);
                i++
            }
        } else if (numbers[i] > numbers[i+1]) {
            result.push(-1)
        } else {
            while (true) {
                if (numbers[i] < numbers[i+1]) {
                    result.push(numbers[i+1]);
                    break;
                }
                result.push(numbers[i+1]);
                i++
            }
        }
    }
    return [...result, -1]
}
// console.log(solution([2,3,3,5]))
console.log(solution([9,1,5,3,6,2]))