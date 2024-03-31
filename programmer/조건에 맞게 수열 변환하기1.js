function solution(arr) {
  let result = [];
  for (const num of arr) {
    if (num % 2 === 0 && num > 50) {
      result.push(num / 2);
    } else if (num % 2 === 1 && num < 50) {
      result.push(num * 2)
    } else {
      result.push(num);
    }
  } 
  return result;
}
// 미해결, 제한사항
console.log(solution([1, 3, 4, 6, 25, 28]));
