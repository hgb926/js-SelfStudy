const solution = (before, after) => +([...after].reverse().join("") === before)

console.log(solution(`olleh`, `hello`));
console.log(solution('allpe', 'apple'))