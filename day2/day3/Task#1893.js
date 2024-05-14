const calculator = {
    add: (...args) => args.reduce((acc, val) => acc + val, 0),
    subtract: (...args) => args.reduce((acc, val) => acc - val),
    multiply: (...args) => args.reduce((acc, val) => acc * val, 1),
    divide: (...args) => {
        if (args.some(arg => arg === 0)) {    //atleast 1 zero find 
            throw new Error("Error: Division by zero.");
        }
        return args.reduce((acc, val) => acc / val);
    },
    celsiusToFahrenheit: (celsius) => (celsius * 9/5) + 32,
    fahrenheitToCelsius: (fahrenheit) => (fahrenheit - 32) * 5/9,
    rectangleArea: (length, width) => length * width,
    circleArea: (radius) => Math.round((Math.PI * radius * radius) * 100) / 100
};

function calculate(func, ...args) {
    const argCount = args.length;
    const expectedArgs = func.length;
    if (expectedArgs !== 0 && argCount !== expectedArgs) {
        return `Error: Function expects ${expectedArgs} argument(s), ${argCount} provided.`;
    }

    try {
        return func(...args);
    } catch (error) {
        return "Error: Invalid function or arguments provided.";
    }
}


console.log(calculate(calculator.add, 2, 3,7)); // Output: 12
console.log(calculate(calculator.subtract, 10, 5));
console.log(calculate(calculator.multiply, 3, 4));
console.log(calculate(calculator.divide, 10, 2));
console.log(calculate(calculator.celsiusToFahrenheit, 25));
console.log(calculate(calculator.fahrenheitToCelsius, 77));
console.log(calculate(calculator.rectangleArea, 4, 5)); 
console.log(calculate(calculator.circleArea, 3));
