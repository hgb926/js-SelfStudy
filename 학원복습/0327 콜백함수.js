
// 주어진 문자열 배열에서 길이가 5보다 큰 문자열들만 필터링하여 새로운 배열을 반환하는 함수를 작성해보세요.

// ["banana", "orange", "strawberry"]

// const strings = ["apple", "banana", "orange", "strawberry", "grape"];
// // 배열 순회
// const workout = ['benchpress', 'squart', 'deadleft', 'running']

// function getNewArr(arr, callback) {
//   const result = [];
//   for (let i of arr) {
//     if (callback(i)) {
//       result.push(i)
//     }
//   }
//   return result;
// }

// const getdead = getNewArr(workout, (any) => any === 'deadleft')
// console.log(getdead);

// const fiveLength = getNewArr(strings, (i) => i.length > 5)
// console.log(fiveLength);

// const getBananagrape = getNewArr(strings, (g) => g === `banana` || g === 'grape')
// console.log(getBananagrape); 



/*
코드를 전달하려면 함수로 전달해야함
- 함수 생성
- 코드를 받기위해 본체에 파라미터를 하나 생성
- 만든 코드를 그 파라미터로 전달
*/


const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
    salary: 5400000,
    age: 35,
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
    salary: 2700000,
    age: 18,
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
    salary: 3900000,
    age: 56,
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
    salary: 7900000,
    age: 42,
  },
];

function map(array, condition) {
  const result = [];
  for (const item of array) {
    result.push(condition(item));
  }
  return result;
}

function makefilter(arr, condition) {
  const result = [];
  for (const item of arr) {
    if (condition(item)) {
      result.push(item)
    }
  }
  return result;
}


// 회원정보에서 회원의 이름들만 다 추출해서 배열 담기

const userName = map(userList, (i) => i.userName)
console.log(userName);

// 회원정보에서 회원의 주소들만 다 추출해서
// 배열에 담아줘

const address = map(userList, (i) => i.address)
console.log(address);

// 회원의 첫번째 취미들만 다 추출해줘

const hobbies = map(userList, (a) => a.hobbys.length < 3)
console.log(hobbies);

// 모든 회원의 이름과 계정을 연결해서 배열에 담아줘
// [ 대길이(abc1234), 빠나나(banana), ... ]
const nameAndAccount = map(userList, i => [`${i.userName}(${i.account})`]);
console.log(nameAndAccount);

// 서울에 사는 급여가 400만원보다 높은 사람의 이름과 주소만 추출해줘
const goldspoon = makefilter(userList, i => i.address ==='서울' && i.salary > 4000000); // 
console.log(goldspoon);
