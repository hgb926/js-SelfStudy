function makeAngle(arr) {
  let sorted = arr.sort((a, b) => a - b)
  return sorted[0] + sorted[1] >= sorted[2] ? 2 : 1
}

console.log(makeAngle([3, 6, 2]));

// 이거 왜 안됨?

// 문자열 -> 숫자로 변환
// 배열로 처리
// 포이치

function getTotal(num) {
  let sum = 0;
  newNum = num.toString();
  for (let i = 0; i < newNum.length; i++) {
    sum += parseInt(newNum[i])
  } return sum;
}

console.log(getTotal(1234));