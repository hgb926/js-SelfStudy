var upn = 50;
var donwn = 1;
var rn = Math.floor(Math.random() * 50) + 1 // 난수 생성
 
while (true) {
  while (true) {
    var input = +prompt(`[ 1 ~ 50 사이의 무작위 숫자를 ${count}번 안에 맞춰보세요!! ]`)
    if (input > rn) {
        --count;
        upn = input;
        alert(`DOWN!! 기회가 ${count}번 남았습니다.\n[${donwn} ~ ${upn}]`)

      } else if (input < rn) {
        --count;
        donwn = input;
        alert(`UP!! 기회가 ${count}번 남았습니다.\n[${donwn} ~ ${upn}]`)

      } else {
        alert(`딩동댕!`)
        break;
      }
    }
  }