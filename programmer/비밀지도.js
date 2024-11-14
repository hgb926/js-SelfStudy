function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push((arr1[i] | arr2[i]).toString(2))
        if (answer[i].length < n) {
            let zero = "";
            for (let j = 0; j < n - answer[i].length; j++) {
                zero += "0";
            }
            answer[i] = zero + answer[i]
        }
        answer[i] = answer[i].replaceAll("1", "#").replaceAll("0", " ")
    }
    return answer;
}

console.log(solution(5, [9,20,28,18,11], [30,1,21,17,28]))
console.log(solution(6, [46,33,33,22,31,50], [27,56,19,14,14,10]))