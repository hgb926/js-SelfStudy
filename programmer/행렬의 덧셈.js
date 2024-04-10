function solution(arr1, arr2) {
  var answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    answer[i].push(arr1[i] + arr2[i])
  };
  return answer;
}
console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]));