const calculator = {
  square: (num) => {
    if (num < 0) return "Error: Negative number";
    return num * num;
  },

  squareRoot: (num) => {
    if (num < 0) return "Error: Negative number";
    return Math.sqrt(num);
  },

  log: (num) => {
    if (num <= 0) return "Error: Invalid input";
    return Math.log10(num);
  },

  naturalLog: (num) => {
    if (num <= 0) return "Error: Invalid input";
    return Math.log(num);
  },

  sin: (angle) => Math.sin(angle),
  cos: (angle) => Math.cos(angle),
  tan: (angle) => Math.tan(angle),

  power: (base, exponent) => Math.pow(base, exponent),
  circleArea: (radius) => {
    if (radius < 0) return "Error: Negative radius";
    return Math.PI * radius * radius;
  },
};

console.log(calculator.square(5)); 
console.log(calculator.squareRoot(25)); 
console.log(calculator.log(100)); 
console.log(calculator.naturalLog(10)); 
console.log(calculator.sin(Math.PI / 2)); 
console.log(calculator.cos(0)); 
console.log(calculator.tan(Math.PI / 4)); 
console.log(calculator.power(2, 3)); 
console.log(calculator.circleArea(5)); 
