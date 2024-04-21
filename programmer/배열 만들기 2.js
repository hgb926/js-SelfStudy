function solution(l, r) {
  let arr = [];
  for(let i = l; i <= r; i += 5) {
      if (i.includes(5) && i.includes(0)) {
          arr.push(i)
      }
  }
  return arr;
}
// 다시 풀어보자
console.log(solution(5, 555));