const solution = (a,b,n) => {
    let result = 0;

    /**
     * 현재 보유 콜라 n. 교환가능한 수량 a 랑 같거나 작을때까지 반복
     * 교환 가능한 콜라의 수는 Math.floor(n / a ) * a;
     * 받을 수 있는 콜라의 수는 (교환 가능 수 * a);
     * 현재 보유 콜라 수를 n = n - (n / a * a) + (n / a * b)로 갱신하며 result++
     */

    while (n >= a) {
        let canReceive = Math.floor(n / a ) * a;
        let received = canReceive / a * b;
        n = n - canReceive + received;
        result += received

    }
    return result;
}
console.log(solution(2,1,20))
console.log(solution(3,1,20))