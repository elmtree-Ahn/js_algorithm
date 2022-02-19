// 58
const data = parseInt("123456789", 10).toLocaleString("ko-KR");
console.log(data);

// 57번 복습
// const data = 1000;

// let arr = "";
// let count = 0;

// for (let i = 0; i <= data; i++) {
//   arr += i;
// }

// arr = arr.split("");

// for (let i in arr) {
//   if (arr[i] === "1") {
//     count++;
//   }
// }

// console.log(count);

// 58
// 내장함수 사용
// const n = prompt("숫자를 입력해주세요.");
// parseInt(n, 10);

// console.log(n.toLocaleString());

// 57 복습 for in 써보기
// let s = "";
// for (let i = 0; i <= 1000; i++) {
//   s += i;
// }
// let count = 0;
// for (let j in s) {
//   if (s[j] == 1) {
//     count++;
//   }
// }
// console.log(count);

// 57
// const obj = {};

// for (let i = 0; i <= 1000; i++) {
//   let tmp = i;
//   while (tmp > 0) {
//     let num = tmp % 10;
//     if (obj[num]) {
//       obj[num]++;
//     } else {
//       obj[num] = 1;
//     }
//     tmp = parseInt(tmp / 10, 10);
//   }
// }

// console.log(obj[1]);

// 56번 복습 일본으로 해보기
// const nationWidth = {
//   korea: 220877,
//   Rusia: 17098242,
//   China: 9596961,
//   France: 543965,
//   Japan: 377915
//   England: 242900
// };

// const width = nationWidth["Japan"];
// delete nationWidth["Japan"];

// const entry = Object.entries(nationWidth);
// // console.log(entry);
// const values = Object.values(nationWidth);
// // console.log(values);

// let gap = Math.max.apply(null, values);
// let result = [];

// for (let i in entry) {
//   if (gap > Math.abs(entry[i][1] - width)) {
//     gap = Math.abs(entry[i][1] - width);
//     result = entry[i];
//   }
// }

// console.log(result);

// var array = ["a", "b"];
// var elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.log(array); // ["a", "b", 0, 1, 2]

// const nationWidth = {
//   korea: 220877,
//   Rusia: 17098242,
//   China: 9596961,
//   France: 543965,
//   Japan: 377915,
//   England: 242900
// };

// for (const nation in nationWidth) {
//   let result = "";
//   let gap = 0;
//   let subGap = 0;
//   if (nation !== "korea") {
//     subGap = Math.abs(nationWidth["korea"] - nationWidth[nation]);

//   }
// }

// 55번 복습
// const route = [];

// function hanoi(num, start, end, temp){
//   //원판이 한 개일 때에는 바로 옮기면 됩니다.
//   if (num === 1) {
//     route.push([start, end]);
//     return NaN;
//   }

//   //원반이 n-1개를 경유기둥으로 옮기고
//   hanoi(num-1, start, temp, end);
//   //가장 큰 원반은 목표기둥으로
//   route.push([start, end]);
//   //경유기둥과 시작기둥을 바꿉니다.
//   hanoi(num-1, temp, end, start);
// }

// hanoi(3, 'A', 'B', 'C');
// console.log(route);
// console.log(route.length);

// 56
// const nationWidth = {
//   korea: 220877,
//   Rusia: 17098242,
//   China: 9596961,
//   France: 543965,
//   Japan: 377915,
//   England: 242900
// };

// const w = nationWidth["korea"];

// delete nationWidth["korea"];

// const entry = Object.entries(nationWidth);
// const values = Object.values(nationWidth);

// //gap에 최댓값 저장
// let gap = Math.max.apply(null, values);
// let item = [];

// for (let i in entry) {
//   if (gap > Math.abs(entry[i][1] - w)) {
//     gap = Math.abs(entry[i][1] - w);
//     item = entry[i];
//   }
// }

// console.log(item[0], item[1] - w);

// 55
// const route = [];

// function hanoi(num, start, end, temp) {
//   //원판이 한 개일 때에는 바로 옮기면 됩니다.
//   if (num === 1) {
//     route.push([start, end]);
//     return NaN;
//   }

//   //원반이 n-1개를 경유기둥으로 옮기고
//   hanoi(num - 1, start, temp, end);
//   //가장 큰 원반은 목표기둥으로
//   route.push([start, end]);
//   //경유기둥과 시작기둥을 바꿉니다.
//   hanoi(num - 1, temp, end, start);
// }

// hanoi(3, "A", "B", "C");
// console.log(route);
// console.log(route.length);

// 54

// const IsContunuousNumber = (arr) => {
//   const sortData = arr.sort();
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (sortData[i] + 1 !== sortData[i + 1]) {
//       return "NO";
//     }
//   }
//   return "YES";
// };

// const data = "4 3 2 1 5 7".split(" ").map((el) => {
//   return parseInt(el, 10);
// });

// console.log(IsContunuousNumber(data));

// 1 복습
// let nums = [100, 200, 300, 400, 500];
// console.log(nums.splice(0, 3));

// 2 복습
// let arr = [200, 100, 300];
// arr.splice(2, 0, 10000);
// console.log(arr);

// 53 해설 보고 다시 풀어보기

// const YesOrNo = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "(") {
//       count++;
//     } else {
//       count--;
//     }
//   }

//   if (count !== 0) {
//     return "NO";
//   }

//   const bracket = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "(") {
//       bracket.push("(");
//     } else {
//       if (bracket.length === 0) {
//         return "NO";
//       }
//       bracket.pop();
//     }
//   }

//   return "YES";
// };

// const data = "(()())()".split("");

// console.log(YesOrNo(data));

// 53 내 풀이
// 이 풀이는 순서가 뒤바뀐 괄호를 체크할 수가 없다.!
// const data = "(())".split("");

// function YesOrNO(arr) {
//   const left = [];
//   const right = [];

//   for (let i = 0; i < data.length; i++) {
//     if (arr[i] === "(") {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   if (left.length === right.length) {
//     return "YES";
//   } else {
//     return "NO";
//   }
// }

// console.log(YesOrNO(data));

// 52 복습

// const quickSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return quickSort(left).concat(pivot, quickSort(right));
// };

// const array = [2, 5, 4, 1, 6, 9];

// console.log(quickSort(array));

// 52
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(pivot, quickSort(right));
// }

// const array = "6 7 2 9 4 1 3".split(" ").map((n) => parseInt(n, 10));

// console.log(quickSort(array));

// // 51
// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);

//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   while (left.length) {
//     result.push(left.shift());
//   }
//   while (right.length) {
//     result.push(right.shift());
//   }

//   return result;
// }

// const array = "9 2 8 4 7 1".split(" ").map((n) => parseInt(n, 10));

// console.log(mergeSort(array));

// 50 혼자 다시 풀기
// const data = "9 2 8 4 1"
//   .split(" ")
//   .map((item) => {
//     return parseInt(item, 10);
//   })
//   .sort();

// console.log(data);

// 54
// function sol(l) {
//   l.sort((a, b) => {
//     return a - b;
//   });

//   for (let i = 0; i < l.length - 1; i++) {
//     if (l[i] + 1 !== l[i + 1]) {
//       return "NO";
//     }
//   }
//   return "YES";
// }

// const n = prompt("입력해주세요")
//   .split(" ")
//   .map((n) => parseInt(n, 10));

// console.log(sol(n));

// 53
// function mathBrackets(e) {
//   let count = 0;

//   //괄호 개수가 같지 않으면 false
//   for (let i = 0; i < e.length; i++) {
//     if (e[i] === "(") {
//       count++;
//     }
//     if (e[i] === ")") {
//       count--;
//     }
//   }
//   if (count !== 0) {
//     return false;
//   }

//   let 괄호 = [];
//   for (let i in e) {
//     if (e[i] === "(") {
//       괄호.push("(");
//     }

//     if (e[i] === ")") {
//       if (괄호.length === 0) {
//         return false;
//       }
//       괄호.pop();
//     }
//   }
//   return true;
// }

// const n = prompt("입력해주세요.").split("");

// if (mathBrackets(n) === true) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// test
// const data = [
//   [1, 2, 3],
//   ["a", "b", "c"]
// ];

// console.log(data[0][-1]);

// 52
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[0]; //기준점
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(pivot, quickSort(right));
// }

// const array = prompt("배열을 입력하세요")
//   .split(" ")
//   .map((n) => parseInt(n, 10));

// console.log(quickSort(array));

// test

// console.log(Math.floor(2200));

// const data = [
//   {
//     name: "오메가",
//     subcolor: "#B1C9E8",
//     color: "#3D87CB"
//   },
//   {
//     name: "마그네슘",
//     subcolor: "#E9EC6B",
//     color: "#A8AD00"
//   },
//   {
//     name: "유산균",
//     subcolor: "#ACE8FC",
//     color: "#00A9E0"
//   },
//   {
//     name: "비타민B",
//     subcolor: "#FEDFAB",
//     color: "#F19E48"
//   },
//   {
//     name: "비타민C",
//     subcolor: "#FFF790",
//     color: "#FCC400"
//   },
//   {
//     name: "비타민D",
//     subcolor: "#FDD086",
//     color: "#EA7600"
//   },
//   {
//     name: "멀티미네랄",
//     subcolor: "#A5DFD3",
//     color: "#259591"
//   },
//   {
//     name: "밀크씨슬",
//     subcolor: "#E7BAE4",
//     color: "#981E97"
//   },
//   {
//     name: "칼슘",
//     subcolor: "#83786F",
//     color: "#83786F"
//   },
//   {
//     name: "철분",
//     subcolor: "#FFBEC6",
//     color: "#C74E61"
//   }
// ];

// const value = "오메가";

// for (let i = 0; i < data.length; i++) {
//   if (data[i].name === value) {
//     console.log(data[i].subcolor);
//     console.log(data[i].color);
//   }
// }

// const data = {
//   good: "good",
//   bad: "bad",
//   cool: "cool"
// };

// console.log(data[0]);

// const data = {
//   유저명: "루피",
//   평가: "평균 이상",
//   점수: 7,
//   평균명: "성인 여성 평균",
//   평균: 8,
//   코멘트1:
//     "면역력 상태 설문(ISQ) 총 10점 중 8점으로, 면역력이 양호한 상태에 해당합니다.",
//   코멘트2:
//     "지난 1년동안 ‘갑작스런 고열’이 자주 발생하였습니다. 질환으로 인한 증상일 수 있으니 병원에 방문하시기 바랍니다. (추천 진료과: 내과)",
//   태그모음: [
//     {
//       id: 0,
//       title: "면역력을 높이는 나의 상태",
//       tag: ["스트레스 낮음", "충분한 운동량"]
//     },
//     {
//       id: 1,
//       title: "면역력을 낮추는 나의 상태",
//       tag: ["당뇨", "수면 부족"]
//     },
//     {
//       id: 2,
//       title: "나에게 자주 발생하는 감염성 질환",
//       tag: ["구내염"]
//     },
//     {
//       id: 3,
//       title: "유지영님의 면역력 증진을 위한 추천",
//       tag: [
//         "규칙적인 운동 (주 3회 이상)",
//         "스트레스 관리",
//         "절주 (일주일 소주 1병 이내)",
//         "적정 체중 유지 (23kg)",
//         "밤 11시 이전 취침"
//       ]
//     }
//   ]
// };

// const originalGage = data.점수 * 10;
// const gage = originalGage + "%";

// const defualtGage = data.평균 * 10;
// const defualtGagePersent = defualtGage + "%";

// const reverseGage = 100 - originalGage + "%";

// console.log(gage);

// console.log(typeof null);
// console.log(Boolean(null));

// let data = ["0점"];

// console.log(parseInt(data[0].replace("점", "")));

// const items = [1, 2, 3, 4, 5];
// return (
//   <div>
//     <ul>
//       {items.map((item) => (
//         <li>{item}</li>
//       ))}
//     </ul>
//   </div>
// );

// const data = [1, 2, 3];

// console.log(data[data.length - 1]);

// let data = [false, false, true];

// console.log(data.includes(true));

// const data = [1, 2, 3];
// console.log(data[-1]);
// console.log(Boolean([]));
// setInterval(()=>{
//   setSecond(second - 1);
// }, 1000)
// let data = "zzzzz";
// console.log(Boolean(parseInt(data)));
// let arr = ["ㄱ", "ㄴ", "ㄷ"];

// console.log(arr["ㄱ"]);

// test
// export const TestComent = ({ text }) => {
//   return (
//     <TestComentST>
//       <img src={infoImg} alt="" />
//       <div className="text">
//         {text.split("\\n").map((line) => {
//           return (
//             <>
//               {line}
//               <br />
//             </>
//           );
//         })}
//       </div>
//     </TestComentST>
//   );
// };

// const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

// let Arr = [];

// data.map((i, a) => {
//   return (Arr[a] = a);
// });

// console.log(Arr);
// test
// let data = ["a", "b", "c"];

// const handel = (check) => {
//   if (!data.includes(check)) {
//     data.push(check);
//   } else if (data.includes(check)) {
//     data = data.filter((item) => item !== check);
//   }
// };

// handel("d");
// handel("d");

// console.log(data);

// 51
// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);

//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   while (left.length) {
//     result.push(left.shift());
//   }
//   while (right.length) {
//     result.push(right.shift());
//   }

//   return result;
// }

// const array = prompt("배열을 입력하세요")
//   .split(" ")
//   .map((n) => parseInt(n, 10));

// console.log(mergeSort(array));

// 50
// function bubble(arr) {
//   let result = arr.slice(); // 원본 배열 복사

//   for (let i = 0; i < result.length - 1; i++) {
//     for (let j = 0; j < result.length - i; j++) {
//       if (result[j] > result[j + 1]) {
//         let temp = result[j];
//         result[j] = result[j + 1];
//         result[j + 1] = temp;
//       }
//     }
//   }
//   return result;
// }

// const items = prompt("입력해주세요.")
//   .split(" ")
//   .map((n) => {
//     return parseInt(n, 10);
//   });

// console.log(bubble(items));

// 49
// const data = "10 9 8 7 6 5 4 3 1 2".split(" ").map((a) => {
//   return parseInt(a, 10);
// });

// data.sort((a, b) => {
//   return b - a;
// });

// console.log(data[0]);

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
