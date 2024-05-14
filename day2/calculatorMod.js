//calculator with modify

const calculator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) =>
    b == 0 ? console.log("denominator should be greater than zero ") : a / b,
  "%": (a, b) =>
    b == 0 ? console.log("denominator should be greater than zero ") : a % b,
};

function calculate(operator, num1, num2) {
  if (!Object.keys(calculator).includes(operator)) {
    console.log("Operator not supported");
    return;
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Invalid input. Both operands must be numbers.");
    return;
  }

  const operation = calculator[operator];
  const result = operation(num1, num2);
  console.log(`Result of ${num1} ${operator} ${num2} is ${result}`);
}

// test our code
calculate("+", 5, 3);
calculate("-", 10, 4);
calculate("*", 6, 2);
calculate("/", 15, 0);
calculate("%", 10, 2);
calculate("+", "5", 3);
calculate("&", 3, 8);
