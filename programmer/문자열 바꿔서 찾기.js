function solution(myString, pat) {
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === 'A') {
      myString[i] = 'B';
    } else if (myString[i] === 'B') {
      myString[i] = 'A';
    }
  }
  return myString.includes(pat) ? 0 : 1;
}