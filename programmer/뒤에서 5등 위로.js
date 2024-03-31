function solution(num_list) {
  let result = [];
  let arr = num_list.sort((a, b) => a - b);
  for (let i = arr.length - 5; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
// 잘 되지만 통과는 못함
console.log(solution([35, 49, 19, 23, 54, 23, 79, 39, 86]));