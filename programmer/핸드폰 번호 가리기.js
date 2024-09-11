function solution(phone_number) {
    let stars = ''
    for (let i = 0; i < phone_number.length - 4; i++) {
        stars += "*"
    }
    return stars + phone_number.slice(-4);
}
let solution1 = solution("01033334444");
console.log(solution1)
