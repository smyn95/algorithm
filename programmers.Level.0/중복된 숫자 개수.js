const solution = (array, n) => array.reduce((a, c) => (n === c ? a + 1 : a), 0);
