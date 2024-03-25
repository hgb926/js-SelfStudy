function solution(num_list) {
  var result = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (0 > num_list[i]) {
      result = num_list.indexof(i);
      return result;
    } else {
      return -1;
    }
  }
}

console.log(solution([12, 4, 15, 46, 38, -2, 15]));
