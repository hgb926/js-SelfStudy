// function solution(num_list) {
//   let arr = num_list
//   const max = num_list.reduce((max, n) => max < n ? n : max)
//   if (num_list[num_list.length - 1] < max)  {
//     arr.push(num_list[num_list.length - 1] * 2)
//     return arr;
//   } else {
//     arr.push(num_list[num_list.length - 1] - 1)
//     return arr;
//   }
// }

const solution = num_list => {
    let i = num_list.length -1
    num_list[i] > num_list[i-1] ?
        num_list.push(num_list[i] - num_list[i-1])
    :
        num_list.push(num_list[i] * 2)
    return num_list
}

console.log(solution([2, 1, 6]));