const clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"]
];

// const clothes = [
//   ["crowmask", "face"],
//   ["bluesunglasses", "face"],
//   ["smoky_makeup", "face"]
// ];

function solution(clothes) {
  let answer = 1;
  let obj = {};
  const len = clothes.length;

  for (let i = 0; i < len; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }

  for (let key in obj) {
    answer *= obj[key];
  }

  console.log(len);
  return answer - 1;
}

console.log(solution(clothes));
