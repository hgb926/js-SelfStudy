const solution = (s) => {

    /**
     * 1. 반복하여 s에서 0을 제거. (제거할때마다 횟수++)
     * 2. 한번 반복 마다 방금전 반복한 s.length의 2진수를 다시 루프에 올림
     * 3. 반복할때마다 반복횟수++
     * 반복문 맨 마지막에서 s를 갱신 (s = s.length.toString(2))
     */

    let loopCount = 0;
    let removeCount = 0;

    while (s !== "1") {

        let temp = ""
        for (let i = 0; i < s.length; i++) {
            s[i] !== "0" ? temp += s[i] : removeCount++;
        }
        s = temp.length.toString(2);
        loopCount++;
    }
    return [loopCount, removeCount]
}

console.log(solution("110010101001"))
console.log(solution("01110"))
console.log(solution("1111111"))