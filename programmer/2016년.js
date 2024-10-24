const solution = (a, b) => {
    let date = new Date();
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    date.setFullYear(2016);
    date.setMonth(a-1)
    date.setDate(b);
    console.log(date)
    return week[date.getDay()];
}
console.log(solution(5, 24))