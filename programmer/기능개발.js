const solution = (progresses, speeds) => {
    let days = [];

    // 인덱스가 같으니까.. 자기 작업량만큼 다 더 하다가 100이 되면
    // 뒤에 100 이상 된거까지 없애버리고 더한 카운트를 push

    // 남은 일수 계산
    for (let i = 0; i < progresses.length; i++) {
        const remaining = 100 - progresses[i];
        const requiredDays = Math.ceil(remaining / speeds[i]);
        days.push(requiredDays)
    }

    
    return days;
}
console.log(solution([93, 30, 55], [1, 30, 5]))
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))