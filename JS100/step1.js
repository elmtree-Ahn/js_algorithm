//test

// 27
const name = "효은 유일".split(" ");
const score = "70 100".split(" ");
const result = {};

for (let i = 0; i < name.length; i++) {
  result[name[i]] = parseInt(score[i], 10);
}

console.log(result);
