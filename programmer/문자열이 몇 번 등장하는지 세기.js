function solution(myString, pat) {
    
  var answer = 0;

  for (let i = 0; i < myString.length; i++) {
      if (myString.slice(i, i+pat.length).includes(pat)) {
          answer++;
      }
  }
  return answer;
}

console.log(solution("banana", "ana"));