function solution(array) {
  return array.sort((a, c) => a - c)[~~(array.length / 2)];
}
