function solution(s) {
  let empty = [];
  let empty2 = [];
  for (let i = 0; i < s.length; i++) {
    empty.push(s[i].charCodeAt())
  }
  empty.sort((a, b) => b - a);
  for (let i = 0; i < s.length; i++) {
    empty2.push(String.fromCharCode(empty[i]))
  }
  return empty2.join(''); // join은 배열 풀기
}
console.log(solution("Zbcdefg"));

let a = 'a';
console.log(a.charCodeAt()); // 97
let b = String.fromCharCode(65)
console.log(b);

