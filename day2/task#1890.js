//validation in calculator

const calculator = {
  add: (a, b) =>
    validate(a, b) ? a + b : "Error: Invalid arguments for addition.",

  subtract: (a, b) =>
    validate(a, b) ? a - b : "Error: Invalid arguments for subtraction.",

  multiply: (a, b) =>
    validate(a, b) ? a * b : "Error: Invalid arguments for multiplication.",
  
  divide: (a, b) => {
    if (!validate(a, b)) return "Error: Invalid arguments for division.";
    if (b === 0) return "Error: Division by zero.";
    return a / b;
  },
};

const validate = (...args) => {
  return args.every((arg) => typeof arg === "number" && !isNaN(arg));
};

// use case
console.log(calculator.add(2, 3));
console.log(calculator.add(2, "3")); 
console.log(calculator.subtract(10, 5)); 
console.log(calculator.subtract(10)); 
console.log(calculator.multiply(3, 4)); 
console.log(calculator.multiply(3, "4")); 
console.log(calculator.divide(10, 2));
console.log(calculator.divide(10, 0));
