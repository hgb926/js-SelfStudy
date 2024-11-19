function solution(number, limit, power) {
    /**
     * 약수 갯수 구하기가 관건
     * 만약 약수의 갯수가 limit을 넘어가면 그 수는 power로 정하고 break;
     */

    let sum = 0;

    for (let i = 1; i <= number; i++) {
        let count = 0;

        // 약수는 대칭적이라 절반만 찾아도 나머지 절반을 찾을수있음
        // ex) 36 = (1, 36), (2, 18), (3, 12) 이므로 루프를 sqrt(i)까지만 돌려도 충분
        for (let j = 1; j * j <= i; j++) {
            console.log(j*j, i, j)
            if (i % j === 0) {
                count++ // 작은 약수
                if (j !== (i / j)) count++; // 큰 약수 (같은 수가 아니라면 추가)
            }
            if (count > limit) {
                count = power
                break;
            }
            console.log()
        }
        sum += count;
    }
    return sum;
}

console.log(solution(10,3,2))