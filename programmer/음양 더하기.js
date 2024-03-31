function solution(absolutes, signs) {
  var sum = 0;
  const result = [];
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) {
      absolutes[i] = absolutes[i] - absolutes[i] * 2;
      result.push(absolutes[i]);
    } else {
      result.push(absolutes[i])
    }
    for (let i = 0; i < result.length; i++) {
      sum += result[i];
    }
  }
  return sum;
}
console.log(solution([1, 2, 3], [true, false, true]));

// 미해결