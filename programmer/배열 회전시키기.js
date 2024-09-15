const solution = (numbers, direction) => {
    if (direction === 'right') {
         numbers.unshift(numbers.pop())
    } else if (direction === 'left') {
        numbers.push(numbers.shift());
    }
        return numbers
}
// console.log(solution([1,2,3], 'right'))
console.log(solution([4,455,6,4,-1,45,6], 'left'))