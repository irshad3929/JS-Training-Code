//Conditional - if-else, nested if-else

let num = 10;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

//even odd

let num2 = 15;

if (num2 % 2 == 0) {
  console.log(num2, "is even");
} else if (num2 % 2 !== 0) {
  console.log(num2, "is Odd");
} else {
  console.log("Number is Zero");
}

//logical operator and their use && || !

let num3 = 17;

if (num3 > 0 && num3 < 100) {
  console.log("Number is between 0 and 100");
}

if (num3 % 2 == 0 || num3 % 3 == 0) {
  console.log("Number is divisible by 2 0r 3");
}

if (!(num3 < 0)) {
  console.log("number is not negative");
}
