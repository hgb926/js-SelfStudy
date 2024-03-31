
function solution(sides) {
  let result = 0;
  let firstTerm = 0;
  let secondTerm = 0;
  if (sides[0] < sides[1]) {
    firstTerm = sides[1] - sides[0];
    for(let i = sides[0]; i < sides[0]+sides[1]; i++) {
      secondTerm++;
    }
  } else {
    firstTerm = sides[0] - sides[1];
    for (let i = sides[1]; i < sides[0]+sides[1]; i++) {
      secondTerm++;
    }
  }
  result = firstTerm + secondTerm;
  return result
}
// 미해결
let a = [3, 6];
console.log(solution(a));


