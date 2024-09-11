const solution = (s) =>  (s.length === 4 || s.length === 6) && !isNaN(+s) ?  true : false

let solution1 = solution('1234');
console.log(solution1)