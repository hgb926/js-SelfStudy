function solution(cards1, cards2, goal) {
    /**
     * goal은 card1, card2로만 이뤄져있어서 순서가 Yes, No의 관건
     * cards의 인덱스 관리를 어떻게?
     * cards 배열에서 사용한 원소는 splice로 remove처리하고, 현재 지금 goal에서 필요한 원소가
     * i+1, i+2 ... 해야하는 상황에서는 return No
     */
    let temp = [];
    for (let i = 0; i < goal.length; i++) {
        if (goal[i] === cards1[0]) {
            temp.push(cards1[0])
            cards1.splice(cards1[0], 1)
        }
        if (goal[i] === cards2[0]) {
            temp.push(cards2[0])
            cards2.splice(cards2[0], 1)
        }
    }
    return temp.length === goal.length ? "Yes" : "No";
}