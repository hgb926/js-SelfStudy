function solution(num_list, n) {
    var answer = [];
    return answer.concat(num_list.slice(n)).concat(num_list.slice(0, n))
}
let solution1 = solution([5,2,1,7,5],3);
console.log(solution1)