function solution(array) {
  let first = array.sort((a, b) => a - b)
  let index = Math.floor(first.length / 2)
  return first[index];
}

console.log(solution([1, 2, 7, 10, 11]));

/*
function solution(array) {
    array.sort((a, b) => a - b)
    .Math.floor(array.length / 2);
    return array;
}

const middleIndex = 
Math.floor(sortedTraders.length / 2);
*/