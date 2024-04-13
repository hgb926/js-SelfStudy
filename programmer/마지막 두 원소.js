function solution(num_list) {
  let arr = num_list
  const max = num_list.reduce((max, n) => max < n ? n : max)
  if (num_list[num_list.length - 1] < max)  {
    arr.push(num_list[num_list.length - 1] * 2)
    return arr;
  } else {
    arr.push(num_list[num_list.length - 1] - 1)
    return arr;
  }
}

console.log(solution([2, 1, 6]));
// 자리 뺏기

// 왜 통과 안되지