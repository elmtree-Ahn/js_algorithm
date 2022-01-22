// 49
const data = "10 9 8 7 6 5 4 3 1 2".split(" ").map((a) => {
  return parseInt(a, 10);
});

data.sort((a, b) => {
  return b - a;
});

console.log(data[0]);

// 48
// const data = "AAABBBcccddd";
// let result = "";

// for (let i = 0; i < data.length; i++) {
//   if (data[i] === data[i].toUpperCase()) {
//     result += data[i].toLowerCase();
//   } else {
//     result += data[i].toUpperCase();
//   }
// }

// console.log(result);

// 47
// const people = {
//   이호준: "01050442903",
//   이호상: "01051442904",
//   이준호: "01050342904",
//   이호준: "01050442903",
//   이준: "01050412904",
//   이호: "01050443904",
//   이호준: "01050442903"
// };

// let result = new Set();
// for (let key in people) {
//   result.add(people[key]);
// }

// // 명수 춢력
// console.log(result);

// 46
// const data = 20;
// let arr = "";
// let sum = 0;

// for (let i = 1; i <= data; i++) {
//   arr = arr + String(i);
// }

// let result = arr.split("");

// for (let i = 0; i < result.length; i++) {
//   sum = sum + Number(result[i]);
// }
// console.log(sum);

//45
// const now = new Date();
// console.log(now.getFullYear());

// 44
// const data = 3849;
// let makeList = String(data).split("");
// let result = 0;

// for (let i = 0; i < makeList.length; i++) {
//   result = result + Number(makeList[i]);
// }

// console.log(result);

// 43
// const data = Number(prompt("Give me number"));
// const result = data.toString(2);

// console.log(result);

// 42
// const a = Number(prompt("Month"));
// const b = Number(prompt("Day"));

// function getDate(month, day) {
//   let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   let dayOfWeek = week[new Date(`2020-${month}-${day}`).getDay()];
//   console.log(dayOfWeek);
// }

// getDate(a, b);

// 41
// const data = Number(prompt("숫자를 입력하세요."));

// function result(number) {
//   let count = 0;

//   for (let i = 1; i <= number; i++) {
//     if (number / i === parseInt(number / i)) {
//       count++;
//     }
//   }

//   if (count === 2) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }

// result(data);

// 40
// const limit = Number(prompt("리미트를 입력하세요."));
// const person = Number(prompt("몇 명이 탑승하나요?"));

// let total = 0;
// let count = 0;

// for (let i = 1; i <= 5; i++) {
//   let weight = Number(prompt("무게를 입력하세요"));
//   total = total + weight;
//   if (total <= limit) {
//     count++;
//   }
// }

// console.log(count);

// 39
// const data = "hqllo my namq is hyqwon";
// console.log(data.split("q").join("e"));

// 38
// const scores = "97 86 75 66 55 97 85 97 97 95".split(" ").sort();
// let top3 = [];
// let count = 0;

// while (top3.length < 3) {
//   let value = scores.pop();
//   if (!top3.includes(value)) {
//     top3.push(value);
//   }
//   count++;
// }

// console.log(top3);
// console.log(count);

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
