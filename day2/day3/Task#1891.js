//calulator that recieve any num of argument

function calculator(...args) {
  if (args.some((arg) => typeof arg !== "number" || isNaN(arg))) {
    return "Error: All arguments must be numbers.";
  }
  if (args.length < 2) {
    return `Error: at least two number `;
  }

  const sum = args.reduce((acc, curr) => acc + curr, 0);
  const difference = args.reduce((acc, curr) => acc - curr);
  const multiply = args.reduce((acc, curr) => acc * curr, 1);
  //const division = args.reduce((acc, curr) => acc / curr);

  const division = args.includes(0)
    ? "Error: Division by zero"
    : args.reduce((acc, val) => acc / val);

  //const modulus = args.reduce((acc, curr)=> acc % curr);
  const modulus = args.includes(0)
    ? "Error: Modulus by zero"
    : args.reduce((acc, val) => acc % val);

  return { sum, difference, multiply, division, modulus };
}

console.log(calculator(5, 3, 2, 1));

/*
// More optimize

function calculator(...args) {
  if (args.length < 2) {
    return "Error: At least two numbers are required.";
  }

  if (args.some(arg => typeof arg !== "number" || isNaN(arg))) {
    return "Error: All arguments must be numbers.";
  }

  const sum = args.reduce((acc, curr) => acc + curr, 0);
  const difference = args.reduce((acc, curr) => acc - curr);
  const multiply = args.reduce((acc, curr) => acc * curr, 1);

  if (args.includes(0)) {
    return "Error: Division or Modulus by zero";
  }

  const division = args.reduce((acc, val) => acc / val);
  const modulus = args.reduce((acc, val) => acc % val);

  return { sum, difference, multiply, division, modulus };
}

console.log(calculator(5, 3, 2, 1));


*/
