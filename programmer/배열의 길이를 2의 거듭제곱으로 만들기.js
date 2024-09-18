const solution = (arr) => {
    let length = arr.length;

    // 2의 거듭제곱이 될 때까지 0을 추가
    let powerOfTwo = 1;
    while (powerOfTwo < length) {
        powerOfTwo *= 2;
    }

    // 2의 거듭제곱 길이에 맞게 부족한 0 추가
    while (arr.length < powerOfTwo) {
        arr.push(0);
    }

    return arr;
}

console.log(solution([1, 2, 3, 4, 5, 6]));
