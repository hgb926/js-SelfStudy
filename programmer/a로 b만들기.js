function solution(str1, str2) {
  let result = str1 + str2;
  result.replace(' ', '');
  return result;
}

console.log(solution(`hello`, `wolrd`));