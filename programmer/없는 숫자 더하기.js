function solution(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return 45 - total
}
let numbers = solution([1,2,3,4,6,7,8,0]);
console.log(numbers)