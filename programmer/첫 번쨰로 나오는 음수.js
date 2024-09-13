const solution = num_list => num_list.indexOf(num_list.find(n => n < 0))


console.log(solution([12, 4, 15, 46, 38, -2, 15]));
