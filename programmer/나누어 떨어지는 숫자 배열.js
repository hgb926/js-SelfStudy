
function solution(arr, divisor) {

  let result = arr.filter(i => i % divisor === 0);
  return result.length > 1 ? result.sort((a, b) => a - b) : [-1];
}
// 미해결 (제한사항)
console.log(solution([3,2,6], 10));


