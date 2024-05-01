
// 피보나치 수열 만들기..

  let fibArr = [0, 1]; // 피보나치 수열의 첫 번째와 두 번째 숫자
  let result = [];
while (true) {
  // 세 번째 숫자부터 n번째 숫자까지 반복하여 피보나치 수열 생성
  let n = 99999;
  for (let i = 2; i <= n; i++) {
    // 현재 숫자는 이전 두 숫자의 합
    let nextFib = fibArr[i - 1] + fibArr[i - 2];
    if (nextFib % 2 === 0 && nextFib < 4000000) { 
    fibArr.push(nextFib); // 새로운 숫자를 배열에 추가
    }
    console.log(fibArr);
  }
}



// 예시: 처음 10개의 피보나치 수열 출력