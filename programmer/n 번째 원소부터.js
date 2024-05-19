function solution(num_list, n) {
    var answer = [];
    for (let i = n-1; i<num_list.length; i++) {
        answer.push(num_list[i])
    }
    return answer;
}

let solution1 = solution([5,2,1,7,5], 2);
console.log(solution1)