// 이중 반복문, length / 2 로 각기 다른 변수에 할당
// 두번째 변수.reverse() 하고 === 검사

let first = 0;
let second = 0;
let sum = 0;
for (let i = 10; i < 100; i++) {
  for (let j = 10; j < 100; j++) {
    sum = i * j
    if (sum.length >= 4) {
      first = sum[0] + sum[1] + ''
      second = sum[2] + sum[3] + ''
    }
  }
}
second = second.split("").reverse().join("")
if (first === second) {

  console.log(sum);
}

