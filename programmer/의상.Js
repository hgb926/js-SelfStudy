const solution = clothes => {
    let map = {}
    for (let i = 0; i < clothes.length; i++) {
        map[clothes[i]] = clothes[i][0]
    }
    let result = []
    return null;
}
console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))