const solution = (x, n) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i)
  }
  return answer;
}
let solution1 = solution(-4,2);
console.log(solution1)


// function solution(x, n) {
//   var answer = [];
//   answer.push(x)
//   for (let i = 1; i < n; i++) {
//     if (x >= answer[0] * 3) {
//       x = (x+x) /2
//     } else {
//       x = x+x
//     }
//     answer.push(x)
//   }
//   return answer;
// }
// console.log(solution(2, 5));
// // 어렵다
