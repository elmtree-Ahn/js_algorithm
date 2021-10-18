//test
const data = [
  {
    id: 1,
    abc: "고기"
  },
  {
    id: 2,
    abc: "고기"
  },
  {
    id: 3,
    abc: "밥"
  },
  {
    id: 4,
    abc: "밥"
  }
];

console.log(data);

const name = "고기";
const findArr = [];
for (let i = 0; i < data.length; i++) {
  if (data[i].abc === name) {
    findArr.push(data[i]);
  }
}

console.log(findArr);

// Q.27 아따 안풀린다.
// const name = "사과 딸기".split(" ");
// const point = "60 80".split(" ");
// let result = {};
// test

// for (let i = 0; i < name.length; i++) {
//   result.name[i] = point[i];
// }
// console.log(result);

// Q.26
// const data = prompt();

// switch (data) {
//   case "수성":
//     console.log("Mercury");
//     break;
//   case "금성":
//     console.log("Venus");
//     break;
//   case "지구":
//     console.log("Earth");
//     break;
//   case "화성":
//     console.log("Mars");
//     break;
//   case "목성":
//     console.log("Jupiter");
//     break;
// }

// Q.25
// const data = Number(prompt());
// const result = (data) => {
//   return data * data * 3.14;
// };
// console.log(result(data));

// Q.24
// const data = prompt();
// const result = data.toUpperCase();
// console.log(result);

// Q.20
// const data = prompt().split(" ").map(Number);
// let [a, b] = data;
// const result1 = parseInt(a / b);
// const result2 = a % b;
// console.log(result1, result2);

// Q. 19
// const data = prompt();
// let arr = data.split(" ").map(Number);

// console.log(arr[0] ** arr[1]);

// 문제 18
// const data = prompt();
// let arr = data.split(" ").map(Number);
// let result = arr.reduce((sum, el) => sum + el, 0) / arr.length;
// console.log(result);

// 문제 17
// const height = prompt();
// let result = height >= 150 ? "YES" : "NO";
// console.log(result);

// 문제 16
// const name = prompt();
// const nameReverse = name.split("").reverse().join("");
// console.log(nameReverse);

// 문제 15
// const name = prompt();
// console.log(`안녕하세요. 저는 ${name}입니다.`);

// 문제 14
// const data = prompt();

// if (data % 3 === 0) {
//   console.log("짝");
// } else {
//   console.log(data);
// }

// 문제13
// const stars = [
//   "수성",
//   "금성",
//   "지구",
//   "화성",
//   "목성",
//   "토성",
//   "천왕성",
//   "해왕성"
// ];
// const input = prompt();

// console.log(stars[input - 1]);

// 문제12
// class Wizard {
//   constructor(health, mana, armor) {
//     this.health = health;
//     this.mana = mana;
//     this.armor = armor;
//   }
//   attack() {
//     console.log("파이어볼");
//   }
// }

// const x = new Wizard(545, 210, 10);
// console.log(x.health, x.mana, x.armor);
// x.attack();

// 문제11
// let s = 0;

// for (let i = 1; i <= 100; i++) {
//   s += i;
// }

// console.log(s);

// 문제10
// const n = prompt();
// let tree = "";

// for (let i = 1; i <= n; i++) {
//   let star = "";
//   for (let j = 1; i <= n - i; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= i * 2 - 1; k++) {
//     star += "*";
//   }
//   tree += star + "\n";
// }
// console.log(tree);

// 문제9
// let year = "2019";
// let month = "04";
// let day = "26";
// let hour = "11";
// let minute = "34";
// let second = "27";

// let result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

// console.log(result);

// 문제8
// let d = {
//   height: 180,
//   weight: 78,
//   weight: 84,
//   temperature: 36,
//   eyesight: 1
// };
// console.log(d["weight"]);

// 문제7
// 3,5번

// 문제6
// 2번

// 문제5
// var a = 10;
// var b = 2;
// for (var i = 1; i < 5; i += 2) {
//   a += i;
// }
// console.log(a + b);

// 문제4
// 2번

// 문제3
// let arr = [100, 200, 300];
// console.log(typeof arr);

// 문제2
// let arr = [200, 100, 300];
// arr.splice(2, 0, 10000);
// console.log(arr);

// 문제1
// let nums = [100, 200, 300, 400, 500];
// nums.pop();
// nums.pop();
// console.log(nums);
