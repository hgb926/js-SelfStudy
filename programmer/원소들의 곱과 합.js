function solution(num_list) {
  let a = num_list.reduce((a, b) => {return a * b})
  let total = 0
  for (let i of num_list) {
    total += i;
  }
  let b = total ** 2;
  return a > b ? 0 : 1
}
console.log(solution([5, 7, 8, 3]));