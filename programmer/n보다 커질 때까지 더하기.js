function solution(numbers, n) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (answer > n) {
      return answer;
    } else {
      answer += numbers[i]
    }
  }
  return answer;
}