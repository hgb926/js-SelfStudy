function solution(d, budget) {
    var answer = 0;
    let sorted = d.sort((a, b) => a- b);
    for (let i = 0; i < sorted.length; i++) {
        if (0 <= budget - sorted[i]) {
            budget -= sorted[i];
            answer++
        } else {
            break;
        }
    }
    return answer;
}

console.log(solution([1,3,2,5,4], 9))
console.log(solution([2,2,3,3], 10))