function solution(my_string, index_list) {
    let result = '';
    for (let i of index_list) {
      result += my_string[i];
    }
    return result;
  }

console.log(solution("cvsgiorszzzmrpaqpe", 	[16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]));