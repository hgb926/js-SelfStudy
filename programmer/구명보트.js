const solution = (people, limit) => {
    let boatCount = 0;
    people.sort((a, b) => a - b)
    // 투포인터 사용 (가장 가벼운, 가장 무거운)
    let min = 0;
    let max = people.length-1
    while (min <= max) {
        if (people[min] + people[max] <= limit) {
            min++
            max--
        } else {
            max--
        }
        boatCount++
    }

    return boatCount
}
console.log(solution([70,50,80,50], 100))
console.log(solution([70,80,50], 100))