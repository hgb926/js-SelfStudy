const solution = (cacheSize, cities) => {
    if (!cacheSize) return cities.length * 5;
    // 캐시크기만큼의 배열 생성, 계속 갱신, 이번게 배열에 있으면 +1, 없으면 추가 후 +5

    let cache = []
    let result =  0;

    for (const city of cities) {
        const convertCity = city.toLowerCase()

        if (cache.includes(convertCity)) {
            // hit!
            cache = cache.filter(c => c !== convertCity) // 기존 요소 제거
            result++
        } else {
            // miss
            if (cache.length >= cacheSize) {
                cache.shift()
            }
            result += 5
        }
        cache.push(convertCity)
    }
    return result;
}
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]))
console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]))
console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]))
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]))
console.log(solution(0, 	["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))
