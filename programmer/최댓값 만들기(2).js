function solution(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] * numbers[i+1] > max) {
            max = i * i+1;
            console.log(max)
        }
    }
    return max;

    const number = solution([1,2,-3,4,-5]);
    console.log(number)
}