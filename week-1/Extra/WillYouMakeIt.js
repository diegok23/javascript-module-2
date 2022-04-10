const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));