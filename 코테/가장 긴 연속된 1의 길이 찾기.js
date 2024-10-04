/**
 주어진 이진 배열에서 가장 긴 연속된 1의 길이를 찾아 반환하세요.

 •	입력: 배열 **arr**는 0과 1로 이루어진 배열입니다.
 •	출력: 가장 긴 연속된 1의 길이를 반환합니다.

 제한사항

 •	배열의 길이는 1 이상 10,000 이하입니다.
 •	배열의 각 요소는 0 또는 1입니다.
 const arr1 = [1, 1, 0, 1, 1, 1];
 // 결과: 3

 const arr2 = [1, 0, 1, 1, 0, 1];
 // 결과: 2

 const arr3 = [0, 0, 0, 1, 1, 1, 1, 0, 1];
 // 결과: 4
 •	배열 **arr1**에서, 연속된 1이 가장 긴 부분의 길이는 3입니다.
 •	배열 **arr2**에서, 가장 긴 연속된 1의 부분은 두 개로, 그 길이는 2입니다.
 •	배열 **arr3**에서는 연속된 1이 4번 등장한 부분이 가장 길기 때문에 결과는 4입니다.
 */
const solution = (arr) => {
    let count = 0;	//  연속된 1의 길이를 담을 변수
    let result = 0; // 리턴값
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++
        } else { // 0 이라면
            result = count // 그동안 나온 1을 result에 저장
            count = 0 // count 초기화
        }
    }
    return Math.max(count, result);
}

console.log(solution([1, 1, 0, 1, 1, 1])); // 결과: 3
console.log(solution([1, 0, 1, 1, 0, 1])); // 결과: 2
console.log(solution([0, 0, 0, 1, 1, 1, 1, 0, 1])); // 결과: 4


