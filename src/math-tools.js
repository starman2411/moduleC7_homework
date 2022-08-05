function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a*b;
}

function abs(a) {
    if (a >= 0) {
        return a;
    } else return -a;
}

function power(a, b) {
    let result = a
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
}

export {sum, multiply, abs, power};