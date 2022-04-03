// 풀이 정리
// https://www.notion.so/ce4da7db467948039d7cc20b0cdc26cc

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
  let answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
    }
  }

  return answer;
}

console.log(solution(participant, completion));
