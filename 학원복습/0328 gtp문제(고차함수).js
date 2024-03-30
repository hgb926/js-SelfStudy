const soccerPlayerList = [
  { name: "Messi", height: 170, weight: 72 },
  { name: "Ronaldo", height: 185, weight: 80 },
  { name: "Neymar", height: 175, weight: 68 },
  // 추가 선수 정보
];

// 주어진 선수 리스트에서 가장 높은 키를 가진 선수의 정보를 출력하세요.
const highestPlayer = soccerPlayerList
    .reduce((high, player) => high.height < player.height ? player : high)
    console.log(highestPlayer['name']);
// 주어진 선수 리스트에서 선수들의 평균 체중을 계산하여 출력하세요.

const avgWeight = soccerPlayerList
    .reduce((total, player) => total + player.weight, 0)

    console.log(avgWeight);

  