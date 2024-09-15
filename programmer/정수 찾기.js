const solution = (num_list, n) => +num_list.some(num => n === num);


let solution1 = solution([1,2,3,4,5], 3);
console.log(solution1)