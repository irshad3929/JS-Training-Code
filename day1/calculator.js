//Calculator using Regular function

console.log("Calculator program");

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b){
    if(b==0) return "Can't divide "
    else return a/b;
  },
  modulus: function (a, b) {
    return a % b;
  },
};

// Testing the calculator
console.log("Addition:", calculator.add(5, 3)); // Output: 8
console.log("Subtraction:", calculator.subtract(10, 7)); // Output: 3
console.log("Multiplication:", calculator.multiply(4, 6)); // Output: 24
console.log("Division:", calculator.divide(20, 5)); // Output: 4
console.log("Modulus:", calculator.modulus(10, 3)); // Output: 1

//using arrow function

const calculator1 = {
  add: (num1, num2) => num1 + num2,//error handling

  sub: (num1, num2) => num1 - num2,

  mul: (num1, num2) => num1 * num2,

  div: (num1, num2) => (num2 == 0 ? "Can't divide " : num1 / num2),

  mod: (num1, num2) => num1 % num2,
};

//test the calculator

console.log("Addition is ", calculator1.add(5, 7));
console.log("Substraction is ", calculator1.sub(10, 5));
console.log("Multiplication is ", calculator1.mul(5, 7));
console.log("Division is ", calculator1.div(10, 2));
console.log("Modulus is ", calculator1.mod(15, 3));
