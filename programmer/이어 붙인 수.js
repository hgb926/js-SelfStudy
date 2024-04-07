function solution(num_list) {
  let even = ''; // 홀수
  let odd = ''; // 짝수
  for (let n of num_list) {
    if (n % 2 === 1) { // 홀수
      even += n;
    } else {
      odd += n;
    }
  }
  return +even + +odd;
}
console.log(solution([3,4,5,2,1]));