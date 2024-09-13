function solution(s) {
  const ex = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
  };

  let answer = '';
  let word = '';

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      // 숫자일 경우 바로 추가
      answer += s[i];
    } else {
      // 영단어를 추출
      word += s[i];
      if (ex[word] !== undefined) {
        answer += ex[word];
        word = ''; // 초기화
      }
    }
  }

  return parseInt(answer, 10);
}

console.log(solution("one4seveneight")); // 1478