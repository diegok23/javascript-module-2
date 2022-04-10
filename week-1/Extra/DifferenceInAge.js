function differenceInAges(ages) {
  ages.sort((a, b) => a - b);
  const youngest = ages[0];
  const oldest = ages[ages.length - 1];
  return [youngest, oldest, oldest - youngest];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));
