const solution = arr => {
    if (arr.length === 1) return [-1]; // 배열의 길이가 1이면 [-1] 반환

    let minValue = Math.min(...arr); // 배열에서 가장 작은 값을 찾음
    return arr.filter(num => num !== minValue); // 가장 작은 값을 제외한 새로운 배열 반환
}