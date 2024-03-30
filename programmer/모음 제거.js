function solution(my_string) {
  const aa = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < my_string.length; i++) {
    for (const j of aa) {
      if (j === my_string[i]) {
        my_string[i] = ``;
      }
    }
  }
  return my_string
}

console.log(solution(`bus`));

// 미해결
