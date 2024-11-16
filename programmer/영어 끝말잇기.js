const solution = (n, words) => {
    let copy = [words[0]];
    for (let i = 1; i < words.length; i++) {
        copy.push(words[i]);
        if (copy.includes(words[i+1]) || words[i][0] !== words[i-1][words[i-1].length-1]) { // 이전과 다를경우 처리
            return [(i % n) + 1, (copy.length+1) / n]
        }
    }
    return [0, 0]
}
console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]))