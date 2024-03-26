function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n/2; i++) {
    if (n / i === i) {
      answer = (i+1)*(i+1);
      return answer;
    } else {
      return -1;
    }
  }
}

// 맞는거같은데..
console.log(solution(121));