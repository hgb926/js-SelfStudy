function solution(todo_list, finished) {
  for (let todo of finished) {
    if (finished[todo] === true) {
      todo_list.pop()
    }
  }
  return todo_list;
}

console.log(solution(["problemsolving", "practiceguitar", "swim", "studygraph"], [true, false, true, false]));