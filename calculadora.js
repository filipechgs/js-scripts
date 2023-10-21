
function calculadora(operador, num1, num2) {
    if (operador === '+') {    
        return num1 + num2;
    }
    if (operador === '-') {
        return num1 - num2;
    }
    if (operador === '*') {
        return num1 * num2;
    }
    if (operador === '/') {
        return num1 / num2;
    }
}
console.log(calculadora('+', 1, 3));
