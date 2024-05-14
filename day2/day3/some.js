//some()  method

const numbers = [1, 2, 3, 4, 5];

// at least
const hasGreater = numbers.some(num => num > 3);
console.log(hasGreater); // Output: true

const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // Output: false





function calculator(...args) {
    // Check if at least one element is not a number or is NaN
    if (args.some(arg => typeof arg !== "number" || isNaN(arg))) {
      return "Error: All arguments must be numbers.";
    }
  
    // Other calculations...
  }
  


