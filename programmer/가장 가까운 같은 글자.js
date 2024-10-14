const solution = (s) => {
    let result = [];
    let lastSeen = {}; // 각 문자의 마지막 위치를 기록할 객체

    for (let i = 0; i < s.length; i++) {
        if (lastSeen[s[i]] === undefined) { // 처음 나온 경우
            result.push(-1);
        } else { // 이전에 나온 경우
            result.push(i - lastSeen[s[i]]);
        }
        lastSeen[s[i]] = i; // 마지막 위치 업데이트
    }

    return result;
}

console.log(solution('banana')); // [ -1, -1, -1, 2, 2, 2 ]
console.log(solution('foobar')); // [ -1, -1, 1, -1, -1, -1 ]