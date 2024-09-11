function solution(left, right) {
  let result = 0; // 리턴값
  for (let i = left; i <= right; i++) {
    let divCount = 0; // 약수 갯수
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divCount++;
      }
    }
    if (divCount % 2 === 0) { // 짝수면 더한다
      result += i;
    } else {
      result -= i;
    }
  }
  return result;
}

console.log(solution(13, 17));
// left 부터 rigth까지 의 수를 다 1 ~ right번 나눠보고
//