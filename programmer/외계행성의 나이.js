function solution(age) {
  let answer = ''
  for (let i = 0; i < age.toString().length; i++) {
    answer += String.fromCharCode((age.toString()[i].charCodeAt()+49))
  }
  return answer
}

console.log(solution(100));
