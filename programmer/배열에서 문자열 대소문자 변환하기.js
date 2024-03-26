function solution(strArr) {
  var answer = [];
  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 0) { // 인덱스 짝수
      answer.push(strArr[i].toLowerCase());
    } else {
      answer.push(strArr[i].toUpperCase());
    }
  }
  return answer;
}

console.log(solution(["AAA","BBB","CCC","DDD"]));