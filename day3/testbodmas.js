function precedence(op) {
    if (op === '+' || op === '-')
        return 1;
    if (op === '*' || op === '/')
        return 2;
    return 0;
}

function infixToPostfix(expression) {
    const st = [];
    let postfix = '';
    for (let i = 0; i < expression.length; i++) {
        const c = expression[i];
        if (c === ' ')
            continue;
        if (!isNaN(c)) {
            postfix += c;
        } else if (c === '(') {
            st.push(c);
        } else if (c === ')') {
            while (st.length && st[st.length - 1] !== '(') {
                postfix += st.pop();
            }
            st.pop(); // Discard '('
        } else {
            while (st.length && precedence(st[st.length - 1]) >= precedence(c)) {
                postfix += st.pop();
            }
            st.push(c);
        }
    }
    while (st.length) {
        postfix += st.pop();
    }
    return postfix;
}

function evaluatePostfix(postfix) {
    const st = [];
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    for (let i = 0; i < postfix.length; i++) {
        const c = postfix[i];
        if (!isNaN(c)) {
            st.push(Number(c));
        } else {
            const op2 = st.pop();
            const op1 = st.pop();
            st.push(operations[c](op1, op2));
        }
    }
    return st.pop();
}

const expression = " 1+(2+3)*4-10/2 ";
const postfix = infixToPostfix(expression);
console.log("Postfix: " + postfix);
const result = evaluatePostfix(postfix);
console.log("Result: " + result);
