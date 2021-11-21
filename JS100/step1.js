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
