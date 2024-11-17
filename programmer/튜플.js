
const solution = s => {
    /**
     * 1. 2차원 배열로 변환 후
     * 2. 내부 배열의 길이 순대로 정렬
     * 3. 반복문 돌면서 처음 나온 원소라면 push
     */
    s = JSON.parse(s.replaceAll("{", "[").replaceAll("}", "]"));
    s.sort((a, b) => a.length - b.length)
    let result = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            if (!result.includes(s[i][j])) {
                result.push(s[i][j]);
            }
        }
    }
    return result;
}
console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")) // [2,1,3,4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")) // [2,1,3,4]
console.log(solution("{{20,111},{111}}")) // [111,20]
console.log(solution("{{123}}"))
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")) // [3,2,4,1]


// const solution = s => {
//     /**
//      * 1. 2차원 배열로 변환 후
//      * 2. 내부 배열의 길이 순대로 정렬
//      * 3. 반복문 돌면서 처음 나온 원소라면 push
//      */
//     let matrix = [];
//     // let temp = s.replaceAll("{", "").split("}")
//     let temp = s.replaceAll("{", "").split("}")
//     let arr = []
//     for (let i = 0; i < s.length; i++) {
//         if (temp[i]) {
//             // arr.push(temp[i].replaceAll(",", ""))
//             arr.push(temp[i])
//             // 두자리수 이상 해결해야하는데?
//             matrix.push(arr)
//             // console.log(arr)
//             arr = [];
//         }
//
//     }
//     console.log(matrix)
// }
// // console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))
// // console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))
// console.log(solution("{{20,111},{111}}"))
// // console.log(solution("{{123}}"))
// // console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"))
