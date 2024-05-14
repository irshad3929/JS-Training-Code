function calculate(expression) {
    const operators = [];
    const operands = [];

    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    const performOperation = () => {
        const operator = operators.pop();
        const operand2 = operands.pop();
        const operand1 = operands.pop();

        switch (operator) {
            case '+':
                operands.push(operand1 + operand2);
                break;
            case '-':
                operands.push(operand1 - operand2);
                break;
            case '*':
                operands.push(operand1 * operand2);
                break;
            case '/':
                operands.push(operand1 / operand2);
                break;
        }
    };

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === ' ') continue;

        if (!isNaN(expression[i])) {
            let operand = '';
            while (!isNaN(expression[i]) || expression[i] === '.') {
                operand += expression[i];
                i++;
            }
            operands.push(parseFloat(operand));
            i--;
        } else if (expression[i] === '(') {
            operators.push(expression[i]);
        } else if (expression[i] === ')') {
            while (operators.length && operators[operators.length - 1] !== '(') {
                performOperation();
            }
            operators.pop();
        } else {
            while (operators.length && precedence[expression[i]] <= precedence[operators[operators.length - 1]]) {
                performOperation();
            }
            operators.push(expression[i]);
        }
    }

    while (operators.length) {
        performOperation();
    }

    return operands.pop();
}


console.log(calculate("1+(2+3)*4-10/2")); // Output: 16
