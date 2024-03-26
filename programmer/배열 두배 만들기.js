function solution(numbers) {
  var answer = [];
  var result;
  for (let i = 0; i < numbers.length; i++) {
    result = numbers[i] * 2;
    answer.push(result);
  }
  return answer;
}
console.log(solution([1, 2, 3, 5]));
