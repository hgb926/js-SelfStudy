const solution = (arr) => {
    let result = 0; // return value
    let count = 1;

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i-1] === arr[i]) {
            count++
        } else {
            result = Math.max(count, result)
            count = 1
        }
    }

    return Math.max(count, result);
}
// console.log(solution(["apple", "banana", "banana", "banana", "apple", "apple"]))
// console.log(solution(["dog", "dog", "cat", "cat", "cat", "dog"]))

let x = -16;
let y = x >> 3;
console.log(y)