const solution = n => {
    // 피보나치수열을 구현하려면..
    const arr = new Array(n + 1).fill(0);

    const fibonacci = num => {
        if (num === 0) return 0;
        if (num === 1) return 1;

        if (arr[num] !== 0) return arr[num];

        arr[num] = fibonacci(num-1) + fibonacci(num-2);
        return arr[num];
    }
    return fibonacci(n) % 1234567;
}
console.log(solution(5))
console.log(solution(10))
