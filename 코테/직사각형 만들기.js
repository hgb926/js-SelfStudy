/**
 주어진 숫자 배열에서 가장 많이 등장하는 숫자를 찾아 반환하세요. 만약 빈도수가 같은 숫자가 여러 개라면, 그 중 가장 작은 값을 반환하세요.
 •	입력: 숫자 배열 arr 이 주어집니다.
 •	출력: 가장 많이 등장하는 숫자를 반환합니다. 빈도수가 같은 숫자가 여러 개라면 그 중 가장 작은 값을 반환하세요.

 제한사항

 •	배열의 길이는 3 이상 100,000 이하입니다.
 •	배열의 각 요소는 1 이상 1,000,000 이하의 정수입니다.
 const arr1 = [1, 3, 2, 3, 3, 1, 1, 4, 1];
 // 결과: 1

 const arr2 = [4, 4, 5, 5, 5, 4];
 // 결과: 4

 const arr3 = [6, 7, 8, 9, 8, 7, 7];
 // 결과: 7
 •	arr1: 숫자 1과 3이 각각 4번씩 등장하지만, 1이 더 작기 때문에 결과는 1입니다.
 •	arr2: 숫자 4와 5가 각각 3번씩 등장하지만, 4가 더 작기 때문에 결과는 4입니다.
 •	arr3: 숫자 7이 3번 등장하므로 결과는 7입니다.
 */
const solution = (arr) => {
    // 갯수 담을 객체 생성
    let countObj = {};

    // 각 요소의 빈도수를 세는 작업
    for (let i = 0; i < arr.length; i++) {
        if (countObj[arr[i]] === undefined) {
            countObj[arr[i]] = 1; // 처음 등장하면 1로 초기화
        } else {
            countObj[arr[i]]++;
        }
    }

    // 최빈값을 찾기위해 변수 초기화
    let maxCount = 0;
    let result = null

    // 객체 순회하며 최빈값 찾기
    for (const key in countObj) {
        if (countObj[key] > maxCount) {
            maxCount = countObj[key];
            result = +key;
        } else if (countObj[key] === maxCount) {
            result = Math.min(result, +key);
        }
    }

    return result;
}
console.log(solution([4,4,5,5,5,4]))

// let ojb = {}
//     ojb["1"] = 1
// console.log(ojb)
