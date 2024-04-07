function solution(str, n) {
  let result = ''
  for (let i = 1; i <= n; i++) {
    result += str
  }
  return result;
}

console.log(solution(`string`, 5));