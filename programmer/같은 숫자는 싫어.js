const solution = arr => {

    let currentNumber = 0
    let result = []
    for (let i = 0; i < arr.length; i++) {
        currentNumber = arr[i]
        if (currentNumber !== arr[i-1]) {
            result.push(currentNumber)
        }
    }
    return result
}
let arr1 = [1,1,3,3,0,1,1];
let solution1 = solution(arr1);
console.log(solution1)


const remove = (arr, index) => arr.filter((n, i) => arr[index] !== i)


