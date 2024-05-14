// Array Destructuring with Binding
const numbers = [10, 20, 30];
const [firstNumber, secondNumber, thirdNumber] = numbers;
console.log(firstNumber, secondNumber, thirdNumber); // 10, 20, 30

// Object Destructuring with Binding
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName: fName, lastName: lName } = person;
console.log(fName, lName); // John, Doe

// Array Destructuring with Assignment and Default Values
const [a = 0, b = 0, c = 0] = [1, 2];
console.log(a, b, c); // 1, 2, 0

// Object Destructuring with Assignment and Default Values
const { x = 0, y = 0, z = 0 } = {};
console.log(x, y, z); // 0, 0, 0
