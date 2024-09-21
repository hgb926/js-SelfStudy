const problem30 = (originNum) => {
    let date = new Date().getMilliseconds();
    console.log(date)
    let result = 0;
    // 10^6 까지 확인
    for (let i = originNum; i < 1000000; i++) {
        // 숫자를 문자열로 변환하여 각 자리의 5제곱을 계산
        let sumOfPowers = i.toString()
            .split('')
            .reduce((sum, digit) => sum + Math.pow(digit, 5), 0);

        if (sumOfPowers === i) {
            console.log(i);
            result += i;
        }
    }
    console.log("Result :", result, "time: ", `${new Date().getMilliseconds() - date}`);
};

problem30(2); // 1을 제외한 숫자부터 시작
