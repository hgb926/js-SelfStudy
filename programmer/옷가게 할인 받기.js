function solution(price) {
    let result = 1;
    if (price >= 500000) {
      result = result * price * 0.8
    } else if (price >= 300000) {
      result = result * price * 0.9
    } else if (price >= 100000) {
      result = result * price * 0.95
    } else {
      result = result * price
    }
    return result;
}

console.log(solution(100000));