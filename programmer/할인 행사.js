function solution(want, number, discount) {
    let count = 0;

    const wantMap = {};
    for (let i = 0; i < want.length; i++) {
        wantMap[want[i]] = number[i]
    }

    // discount 배열에서 10일간의 묶음마다 검사
    for (let i = 0; i <= discount.length - 10; i++) {
        // 현재 10일간의 제품을 저장할 임시 객체
        const discountMap = {};

        // 10일간의 제품을 discountMap에 기록
        for (let j = i; j < i + 10; j++) {
            if (discountMap[discount[j]]) {
                discountMap[discount[j]]++;
            } else {
                discountMap[discount[j]] = 1;
            }
        }

        // wantMap과 discountMap이 일치하는지 검사
        let isMatch = true;
        for (let key in wantMap) {
            if (wantMap[key] !== discountMap[key]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) count++

    }
    return count;
}