function solution(arr1, arr2) {
  if (arr1.length < arr2.length) {
    return -1;
  } else if (arr1.length === arr2.length) {
    let total1 = 0;
    let total2 = 0;
    for(let i = 0; i < arr1.length; i++) {
      total1 += arr1[i];
    }
    for(let i = 0; i < arr2.length; i++) {
      total2 += arr2[i];
    }
    if ( total1 === total2) {
      return 0;
    } else {
      return 1;
    }
  }
}
// 제한사항 미준수