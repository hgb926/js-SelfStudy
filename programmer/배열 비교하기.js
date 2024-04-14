function solution(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else if (arr1.length === arr2.length) {
    let one = 0;
    let two = 0;
    for(let n of arr1) {
      one += n;
    }
    for(let k of arr2) {
      two += k;
    }
    if (two > one) { // 2가 1보다 크다면
      return -1
    } else if (two < one) {
      return 1
    } else {
      return 0;
    }
  }
}