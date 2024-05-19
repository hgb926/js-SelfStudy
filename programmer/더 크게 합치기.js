function solution(a, b) {
    var answer = 0;
    answer = a + "" + b > b + "" + a ? a + "" + b : b + "" + a;
    return +answer;
}
let number = solution(9,91);
console.log(number)
