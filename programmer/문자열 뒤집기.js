const solution = (my_string, s, e) => my_string.slice(0, s) +  [...my_string.slice(s, e+1)].reverse().join("") + my_string.slice(e+1);

console.log(solution("Progra21Sremm3", 6, 12))