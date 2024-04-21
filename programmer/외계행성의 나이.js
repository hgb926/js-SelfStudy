function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i].charCodeAt() - 97;
  }
  return answer;
}

console.log(solution("baa"));
