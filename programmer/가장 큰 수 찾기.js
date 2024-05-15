// 배열 하나 복사해서 sort
function solution(array) {
    var answer = [];
    // 최대값을 찾는다.
    let max = Math.max(...array);
    answer.push(max);
    // 최대값의 인덱스를 찾는다.
    answer.push(array.indexOf(max));
    return answer;
}


let solution1 = solution([9,10,11,8]);
console.log(solution1)