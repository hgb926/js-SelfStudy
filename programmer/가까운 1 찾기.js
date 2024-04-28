function solution(arr, idx) {
  var answer = 0;
  for (let i = idx; i < arr.length; i++) {
    if (idx < i && arr[i] > 0) {
      answer = i
    } else {
      answer = -1
    }
  }
  return answer;
}