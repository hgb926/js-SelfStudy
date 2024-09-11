const solution = n => Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;

// 테스트 예시
console.log(solution(121)); // 144
console.log(solution(3));   // -1
