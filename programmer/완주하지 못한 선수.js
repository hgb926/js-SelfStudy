const solution = (participant, completion) => {

    participant.sort();
    completion.sort();

    for (let i = 0; i < completion.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }

    // 마지막 사람이 완주하지 못한 경우
    return participant[participant.length - 1];
}

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));