function solution(n, k) {
  const lamb = 12_000;
  const drink = 2_000;
  if (n >= 10) {
    k -= (n / 10) << 0;
  }
  return n * lamb + drink * k;
}
