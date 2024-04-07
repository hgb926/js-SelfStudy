function solution(my_string) {
  const aa = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < my_string.length; j++) {
      if (aa[i] === my_string[j]) {
        my_string[j] === ''
      }
    }
  }
  return my_string
}

console.log(solution(`bus`));

// 미해결
