// const solution = (array, commands) => {
//     let result = [];
//     for (let i = 0; i < commands.length; i++) {
//         result.push(array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => a - b).slice(commands[i][2]-1, commands[i][2])[0])
//     }
//     return result;
// }

const solution = (array, commands) => commands.map(c => array.slice(c[0]-1, c[1]).sort((a, b) => a - b)[c[2]-1]);
console.log(solution([1, 5, 2, 6, 3, 7, 4],	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))

