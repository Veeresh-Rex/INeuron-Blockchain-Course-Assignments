//

function matchHouses(n) {
  if (n < 0) return -1;
  return 6 * n - (n - 1);
}

console.log(matchHouses(87));
