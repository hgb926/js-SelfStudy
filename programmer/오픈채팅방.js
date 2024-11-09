const solution = (record) => {
    const result = [];
    const userMap = new Map(); // 유저 ID와 닉네임을 매핑

    for (const entry of record) {
        const [status, id, name] = entry.split(" ");
        if (status === 'Enter' || status === 'Change') {
            userMap.set(id, name); // ID별 최신 닉네임 저장
        }
    }

    for (const entry of record) {
        const [status, id] = entry.split(" ");
        if (status === 'Enter') {
            result.push(`${userMap.get(id)}님이 들어왔습니다.`);
        } else if (status === 'Leave') {
            result.push(`${userMap.get(id)}님이 나갔습니다.`);
        }
    }

    return result;
};

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));