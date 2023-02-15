function solution(sides) {
  const [first, second, last] = sides.sort((a, b) => a - b);
  return first + second > last ? 1 : 2;
}
