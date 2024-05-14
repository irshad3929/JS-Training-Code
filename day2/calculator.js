//calculator in optimise way

const calculator = {
  "+": (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      console.log("Invalid input. Both operands must be numbers.");
      return undefined;
    }
    return a + b;
  },

  "-": (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      console.log("Invalid input. Both operands must be numbers.");
      return undefined;
    }
    return a - b;
  },

  "*": (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      console.log("Error: Invalid input. Both operands must be numbers.");
      return undefined;
    }
    return a * b;
  },

  "/": (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      console.log("Error: Invalid input. Both operands must be numbers.");
      return undefined;
    }
    if (b !== 0) {
      return a / b;
    } else {
      console.log("Error: Division by zero");
      return undefined;
    }
  },

  "%": (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      console.log("Error: Invalid input. Both operands must be numbers.");
      return undefined;
    }
    if (b !== 0) {
      return a % b;
    } else {
      console.log("Error: Modulus by zero");
      return undefined;
    }
  },
};




// Example usage:
const operator = "+";
const num1 = 10;
const num2 = 5; // Change num2 to '5' to test invalid input

if (calculator.hasOwnProperty(operator)) {
  const operation = calculator[operator];
  const result = operation(num1, num2);
  if (result !== undefined) {
    console.log(`Result of ${num1} ${operator} ${num2} is ${result}`);
  }else{
    console.log("Operator not supported");
  }
} 

// const supportedOperators = Object.keys(calculator);
// function calculate(operator, num1, num2) {
//     if (!supportedOperators.includes(operator)) {
//       console.log("Operator not supported");
//       return;
//     }
//   }
