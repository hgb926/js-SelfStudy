
// 가운데 인덱스 구하기
// slice를 활용할건데, 함수 생성하고 슬라이스의 인자값을 if로

function solution(s) {
  const a = s.length / 2;
  if (s.length % 2 === 1) {
    s = s.slice(a, a+1)
  } else {
    s = s.slice(a-1, a+1)
  }
  return s
}
console.log(solution(`qwer`));

// let second = `qwer`
// console.log(second.slice(1,3));
