function solution(sides) {
  let arr = sides.sort((a, b) => a - b);
  return arr[2] >= arr[0] + arr[1] ? 2 : 1
}
console.log(solution([199, 72, 222]));