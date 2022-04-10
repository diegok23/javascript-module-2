const summation = function (num) {
  let addition = 0;
  for (let i = 0; i <= num; i++) {
    addition += i;
  }
  return addition;
};

console.log(summation(8));
