

let num = 21;
while (true) {
  let check = 0;
  for (let i = 1; i <= 20; i++) {
    if (num % i === 0) {
      check++
    }
  }
  if (check === 20) {
    console.log(num);
    break;
  } else {
    num++;
  }
}
