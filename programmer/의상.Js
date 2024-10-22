function solution(clothes) {
    const map = {};
    for (const [name, type] of clothes) {
        if (map[type]) {
            map[type]++;
        } else {
            map[type] = 1;
        }
    }
    let answer = 1;
    for (const count of Object.values(map)) {
        answer *= count + 1;
    }
    return answer - 1;
}


console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));