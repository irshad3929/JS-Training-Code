// basic program of calculator

//function for addition
function add(a, b) {
  return a + b;
}

//function for substraction
function sub(a, b) {
  return a - b;
}

//function for multiplication
function mul(a, b) {
  return a * b;
}

//function for division
function div(a, b) {
  if (b == 0) {
    return "can't divide";
  } else {
    return a / b;
  }
}

//function for modulus
function mod(a, b) {
  return a % b;
}

console.log("Addition of a and b is = ", add(5, 7));
console.log("Substraction of a and b is = ", sub(5, 7));
console.log("Multiplication of a and b is = ", mul(9, 7));
console.log("Division of a and b is = ", div(9, 7));
console.log("Modulus of a and b is = ", mod(5, 7));
