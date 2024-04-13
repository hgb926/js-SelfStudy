function solution(num_list) {
  let odd = 0;
  let even = 0;
  for (let i = 3; i < num_list.length + 3; i++) {
    if (i % 2 === 1) {
      odd += num_list[i - 3]
    } else {
      even += num_list[i - 3];
    }
  }
  return odd > even ? odd : even;
}

console.log(solution([-1,2,5,6,3]));