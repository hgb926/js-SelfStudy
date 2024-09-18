const solution = (emergency) => {
    const sorted = [...emergency].sort((a, b) => b - a);
    return emergency.map(e => sorted.indexOf(e) + 1);
}

console.log(solution([3, 76, 24]));  // [3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7]));  // [7, 6, 5, 4, 3, 2, 1]
console.log(solution([30, 10, 23, 6, 100]));  // [2, 4, 3, 5, 1]
