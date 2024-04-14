function solution(myString) {
  
  let newstring = '';
  for (let i = 0; i < myString.length; i++) {
    if (myString.length >= 20 && typeof(myString[i]) !== String) return;
    if (myString[i] === 'a') {
      newstring += myString[i].toUpperCase();
    } else {
      newstring += myString[i].toLowerCase();
    }
  }
  return newstring;
}

console.log(solution("PrOgRaMmErS"));