// 38
const scores = "97 86 75 66 55 97 85 97 97 95".split(" ").sort();
const top3 = [];
let count = 0;

while (top3.length < 4) {
  let value = scores.pop();
  if (!top3.includes(value)) {
    top3.push(value);
  }
  count++;
}

console.log(top3);
console.log(count - 1);
// console.log(scores);

// let data = 1;

// while (data <= 25) {
//   data = data * 3;
// }

// console.log(data);
// 37

// const data = ["원범", "원범", "혜원", "혜원", "혜원", "유진"];
// let winner = "";
// let result = {};

// for (let i in data) {
//   let name = data[i];
//   result[name] = result[name] === undefined ? 1 : result[name] + 1;
// }

// winner = Object.keys(result).reduce((a, b) => {
//   return result[a] > result[b] ? a : b;
// });

// console.log(winner, result[winner]);

// console.log(result);
// 검색로직
// const dummy = [
//   "빼빼로오리지널",
//   "빼빼로아몬드",
//   "빼빼로누드",
//   "빼빼로씬",
//   "빼빼로크런키",
//   "빼빼로오레오",
//   "아몬드봉봉",
//   "오레오오즈"
// ];

// const data = "빼빼로";

// const result = [];
// for (let index in dummy) {
//   const item = dummy[index];
//   if (item.indexOf(data) !== -1) {
//     result.push(item);
//   }
// }

// console.log(result);

// 37
// const data = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(" ");
// let result = {};
// let winner = "";

// for (let index in data) {
//   let name = data[index];
//   result[name] = result[name] === undefined ? 1 : result[name] + 1;
// }

// winner = Object.keys(result).reduce((a, b) => {
//   return result[a] > result[b] ? a : b;
// });

// console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);

// 36
// const data = 2;
// let result = "";
// for (let i = 1; i < 10; i++) {
//   result = result + `${data * i} `;
// }

// console.log(result);

// 35
// function one(n) {
//   function two(x) {
//     return Math.pow(x, n);
//   }
//   return two;
// }

// const a = one(2);
// const b = one(3);
// const c = one(4);

// console.log(a(10));
// console.log(b(10));
// console.log(c(10));
