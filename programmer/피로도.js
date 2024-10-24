const solution = (k, dungeons) => {
    let result = 0;
    for (let i = 0; i < dungeons.length; i++) {
        k -= dungeons[i][1];
        if (k < dungeons[i][0]) {
            result++
        } else {
            return result;
        }
    }
    return  result;
}
console.log(solution(80, [[80,20],[50,40],[30,10]]))