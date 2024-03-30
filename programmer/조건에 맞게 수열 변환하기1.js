function solution(arr) {
  const result1 = arr
  .map(n => n *2)
  for (const i of result1) {
    if (result1[i] % 2 === 0 && result1[i] > 50) {
      result1[i] / 2;
    } else {
      result1[i] * 2
    }
  }

  return result1
}

// 미해결

console.log(solution([1,2,3,100]));