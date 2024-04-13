function solution(left, right) {
  let arr = [];
  var result = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) { // j가 약수라면
          result++;
        }
      }
      arr.push(result)
  }

  return arr;
}

console.log(solution(13, 17));
// left 부터 rigth까지 의 수를 다 1 ~ right번 나눠보고
//