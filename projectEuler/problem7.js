let count = 0; // 출력된 소수의 개수를 추적
let num = 2; // 시작하는 숫자
let arr = [];
while (count < 10001) {
  let isPrime = true; // 현재 숫자가 소수인지 여부를 추적
  // 2부터 현재 숫자의 제곱근까지의 모든 수로 나누어 봄
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) { // 나누어 떨어지면 소수가 아님
      isPrime = false;
      break;
    }
  }
  if (isPrime) { // 소수인 경우 출력하고 개수를 증가시킴
    arr.push(num);
    count++;
    if (count === 10000) {
      console.log(arr[10000]);
      break;
    }
    break;
  }
  num++; // 다음 숫자로 이동
}
// (n % n === 0 && n)
