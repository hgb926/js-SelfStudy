function solution(num, k) {
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === k.toString()) {
            return i + 1;
        }
    }
    return -1;
}

let solution1 = solution(232443, 4);
console.log(solution1); // 결과 출력
