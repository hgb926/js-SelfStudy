function solution(n_str) {
  let a = +n_str
  for (let i = 0; i < n_str.length; i++) {
    if (a[i] == 0) {
      a[i] = '';
    }
  }
  return String(a);
}
console.log(solution('0010'));