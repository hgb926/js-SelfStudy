// 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p
// 튜브가 말해야 하는 숫자 t개를 공백 없이 차례대로 나타낸 문자열.
// 단, 10~15는 각각 대문자 A~F로 출력 -> "0111"

const solution = (n, t, m, p) => {
    // while문 안에서 t개가 될때까지
    // loop한번당 진법 변환해서
    // 인원, 순서를 계산해서 지 차례때 배열에 하나씩 담고
    let formation = [];
    let turn = 0;
    while (formation.length < t) {
        // 튜브에 차례에만 push가 되도록.
        let number = turn.toString(n)

        if (number.length > 1) {
            let i = 0;
            while (i !== number.length) {
                // 여기에 조건
                if ((turn % m) + 1 === p) {
                    formation.push(number[i])
                }
                i++
                turn++
            }

        } else {
            if ((turn % m) + 1 === p) {
                formation.push(number)
            }
            turn++;
        }
    }
    return formation.join("")
}
console.log(solution(2,4,2,1)) // "0111"
// console.log(solution(16,37,2,1)) // "13579BDF01234567"

// 인원 5 내 순서 3   현재수 % 인원 == 내 순서 if (turn % m === p)
// 3, 8, 13, 18
// 인원 6 내 순서 2
// 2, 8, 14, 20
// 인원 3 내 순서 1
// 1, 4, 7, 10

