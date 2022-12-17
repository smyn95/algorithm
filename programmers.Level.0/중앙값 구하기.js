function solution(array) {
  return array.sort((a, c) => a - c)[Math.floor(array.length / 2)];
}
