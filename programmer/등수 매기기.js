function solution(score) {
  let sum = 0;
  var answer = [];
  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < 2; j++) {
      sum += score[i][j];
    }
    answer.push(sum / 2);
    sum = 0;
  }
  let sortedArr = answer.slice().sort((a, b) => b - a); // 배열을 복사한 후 내림차순으로 정렬

  let result = answer.map((item) => sortedArr.indexOf(item) + 1);

  return result;
}
console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
