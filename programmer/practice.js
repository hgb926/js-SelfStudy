

function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.unshift(strlist[i].length);
  }
  return answer;
}
