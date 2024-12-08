const solution = (brown, yellow) => {
    // brown, yellow의 합 / 약수 중 가운데 수 2개
    const sum = brown + yellow;
    // sum의 제곱근부터 시작 ?
    const height = width =Math.floor(Math.sqrt(sum))
    let width = height
    while (width < sum) {
        if (height * width === sum) return [width, height]
        width++;
    }
}

console.log(Math.sqrt(7))
console.log(solution(10, 2))