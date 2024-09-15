// function solution(myString) {
//
//   let newstring = '';
//   for (let i = 0; i < myString.length; i++) {
//     if (myString.length >= 20 && typeof(myString[i]) !== String) return;
//     if (myString[i] === 'a') {
//       newstring += myString[i].toUpperCase();
//     } else {
//       newstring += myString[i].toLowerCase();
//     }
//   }
//   return newstring;
// }

const solution = myString => {
    let result = myString.toLowerCase()
    let convert = ''
    for (let i = 0; i < result.length; i++) {
        if (result[i] !== 'a') {
            convert += result[i]
        } else {
            convert += result[i].toUpperCase()
        }
    }
    return convert
}

console.log(solution("PrOgRaMmErS"));