const solution = (n, words) => {
    let copy = []; // 이전에 사용된 단어를 저장할 배열

    for (let i = 0; i < words.length; i++) {
        // 중복 단어 및 끝말잇기 조건 위반 여부를 확인
        let flag = copy.includes(words[i]) || // 현재 단어가 이미 사용된 단어인지 확인
            ((copy.length > 0) && (copy[i - 1].slice(-1) !== words[i][0])); // 끝말 조건 위반 확인

        // 중복 단어거나 끝말잇기 규칙 위반 시 탈락자 정보 반환
        if (flag) {
            return [(i % n) + 1, Math.ceil((i + 1) / n)]; // [탈락자의 번호, 탈락자의 차례]
        }

        // 단어가 규칙에 맞다면 copy에 추가
        copy.push(words[i]);
    }

    return [0, 0]; // 탈락자 없을 시
};

// 테스트 케이스
console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])); // [3, 3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])); // [0, 0]
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])); // [1, 3]