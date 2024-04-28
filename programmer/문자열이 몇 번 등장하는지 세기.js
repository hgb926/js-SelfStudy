function solution(myString, pat) {
    
  var answer = 0;
  for (let i = 0; i < myString.length; i++) {
      if (myString.includes(pat)) {
          answer++;
          myString = myString.slice(i)
      }
  }
  return answer;
}

console.log(solution("banana", "ana"));