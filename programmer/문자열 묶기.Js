const solution = strArr => {
    // 문자열 길이를 기준으로 그룹화할 객체
    const lengthMap = {};

    // 문자열의 길이를 기준으로 그룹화
    for (let str of strArr) {
        const length = str.length; // 문자열의 길이

        // 해당 길이의 그룹이 이미 존재하면 개수를 증가, 없으면 1로 초기화
        if (lengthMap[length]) {
            lengthMap[length]++;
        } else {
            lengthMap[length] = 1;
        }
    }
    let maxSize = 0;
    for (const key in lengthMap) {
        maxSize = Math.max(lengthMap[key], maxSize)
    }
    return maxSize
}
console.log(solution(["a","bc","d","efg","hi"]))