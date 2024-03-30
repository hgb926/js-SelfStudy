function solution(n, k) {
  let total = 0;
  let service = -1;
  for (let i = 0; i <= n; i += 10) {
    service++;
  }
  total = n  * 12000 + k * 2000 - service * 2000;
  return total;
}
console.log(solution(10, 3));
