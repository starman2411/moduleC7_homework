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

function power(a, b) { //только для неотрицательных показателей
    let result = a;
    if (b>0) {
        for (let i = 1; i < b; i++) {
            result *= a;
        }
    }else if (b == 0) {
        result = 1;
    }else {
        result = undefined; //без корней
    }
    return result;
}

export {sum, multiply, abs, power};
