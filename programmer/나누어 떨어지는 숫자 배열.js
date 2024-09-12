const solution = (arr, divisor) => {
    let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1]
}
console.log(solution([2, 36, 1, 3], 1))


//
// function solution(arr, divisor) {
//
//   let result = arr.filter(i => i % divisor === 0);
//   return result.length > 1 ? result.sort((a, b) => a - b) : [-1];
// }
// // 미해결 (제한사항)
// console.log(solution([3,2,6], 10));
//
//
