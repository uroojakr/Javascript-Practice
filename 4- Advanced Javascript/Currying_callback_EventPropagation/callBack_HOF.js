const subs = (a,b) => {
    return a - b;
}
const mult = (a,b) => {
    return a * b;
}
const add = (a,b) => {
    return a + b;
}
const div = (a,b) => {
    return a / b;
}

const calc = (num1, num2, op) => { //call back and highorder
    switch (op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subs(num1, num2);
        case '*':
            return mult(num1, num2);
        case '/':
            return div(num1, num2);
        default:
            return 0;
    }
}

console.log(calc(10, 20, '+'));
