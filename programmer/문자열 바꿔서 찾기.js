function solution(myString, pat) {
  const swappedString = myString.split('').map(char => {
    if (char === 'A') {
      return 'B';
    } else if (char === 'B') {
      return 'A';
    }
    return char;
  }).join('');

  return swappedString.includes(pat) ? 1 : 0;
}

console.log(solution("ABAB","ABAB"));