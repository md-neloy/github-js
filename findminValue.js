const Math = {
  min: (num1, num2) => {
    return num1 > num2 ? num2 : num1;
  },
  max: (num1, num2) => {
    return num1 > num2 ? num1 : num2;
  },
};
console.log(`Minimum value is ${Math.min(20, -20)}`);
console.log(`Maxmimum value is ${Math.max(20, -20)}`);
