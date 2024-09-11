const solution = s => {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        // 스택이 비어 있지 않고, 스택의 최상단 문자와 현재 문자가 동일한 경우
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop(); // 짝지어 제거
        } else {
            stack.push(s[i]); // 현재 문자를 스택에 추가

        }
    }

    // 스택이 비어있다면 모든 문자가 제거된 것이므로 1 반환, 아니면 0 반환
    return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
// console.log(solution("cdcd"));   // 0
