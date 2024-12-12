const solution = (s) => {
    let count = 0; // 올바른 괄호 문자열의 개수
    const length = s.length;

    for (let i = 0; i < length; i++) {
        // 문자열을 회전시킨 결과
        const rotated = s.slice(i) + s.slice(0, i);
        if (isBalanced(rotated)) count++;
    }

    return count;
};

const isBalanced = (str) => {
    const stack = [];

    for (let char of str) {
        if (char === '[' || char === '{' || char === '(') {
            // 여는 괄호는 스택에 추가
            stack.push(char);
        } else {
            // 닫는 괄호일 때 스택이 비어있거나 짝이 맞지 않으면 false
            if (
                (char === ']' && stack.pop() !== '[') ||
                (char === '}' && stack.pop() !== '{') ||
                (char === ')' && stack.pop() !== '(')
            ) {
                return false;
            }
        }
    }

    // 스택이 비어 있어야 올바른 괄호 문자열
    return stack.length === 0;
};

// 테스트
console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]"));   // 0