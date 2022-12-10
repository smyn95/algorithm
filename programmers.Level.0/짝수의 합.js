// function solution(n) {
//   let answer = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) answer += i;
//   }
//   return answer;
// }

function solution(n) {
  let num = ~~(n / 2);
  return num * (num + 1);
}
