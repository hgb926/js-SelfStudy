function solution(arr) {
    let answer = 1; // 최소값
    while (true) {
        if (arr.filter(n => answer % n != 0).length === 0) {
            return answer
        }
        answer++
    }
    return answer;
}