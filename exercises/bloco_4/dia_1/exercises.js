// *** exercise 1 ***
let a = 5;
let b = 2;

//sum
let soma = a + b;

//subtraction
let sub = a - b;

//multiplication
let mul = a * b;

//division
let div = a / b;

// *** exercise 2 ***
function maior() {
    let c = 5;
    let d = 6;
    let maior;

    if (c > d) {
        maior = c;
    } else {
        maior = d;
    }
    return maior;
}

// *** exercise 3 ***
function maior3() {
    let e = 5;
    let f = 4;
    let g = 1;
    let maior3;
    if (e > f) {
        if (e > h) {
            maior3 = e;
        } else {
            maior3 = g;
        }
    }
    if (f > e) {
        if (f > h) {
            maior3 = f;
        } else {
            maior3 = g;
        }
    }
    return maior3;
}

// *** exercise 4 ***
function sinal() {
    let h = 0;
    let sinal;
    if (h > 0) {
        sinal = 'positive';
    } else if (h < 0) {
        sinal = 'negative';
    } else {
        sinal = 'zero'
    }
    return sinal;
}

// *** exercise 5 ***
function triangleDegrees() {
    let i = 80;
    let j = 90;
    let k = 10;
    let degree;
    if (i + j + k == 180) {
        degree = 'true';
    } else {
        degree = 'false';
    }
    return degree;
}

// *** exercise 6 ***
function chessMoviments(pieces) {
    let piece = pieces.toLowerCase();
    switch (piece) {
        case 'pawn':
            return 'Forward almost all the game, but to take opponents moves diagonals';

        case 'rock':
            return 'Continuous line forward, backwards and side-to-side';

        case 'knight':
            return 'Two spaces forward and one at the right';

        case 'bishop':
            return 'diagonal';

        case 'queen':
            return 'Diagonal and straight lines';

        case 'king':
            return 'The same moviments of the queen, but it can move one square at a time';
    }
}

// *** exercise 7 ***
function grades(nota) {
    let gradeRes;
    if (nota <= 0 || nota > 100) {
        return 'ERROR inform a valid grade';
    } else if (nota >= 90) {
        gradeRes = 'A';
    } else if (nota >= 80) {
        gradeRes = 'B';
    } else if (nota >= 70) {
        gradeRes = 'C';
    } else if (nota >= 60) {
        gradeRes = 'D';
    } else if (nota >= 50) {
        gradeRes = 'E';
    } else if (nota < 50) {
        gradeRes = 'F';
    }
    return gradeRes;
}

// ***exercise 8 ***
function evenNumbers() {
    let l = 3;
    let m = 3;
    let n = 7;
    if ((l % 2 == 0) || (m % 2 == 0) || (n % 2 == 0)) {
        return true
    } else {
        return false
    }
}

// *** exercise 9 ***
function oddNumbers() {
    let o = 1;
    let p = 7;
    let q = 3;
    if ((o % 2 == 0) || (p % 2 == 0) || (q % 2 == 0)) {
        return false
    } else {
        return true
    }
}

// *** exercise 10 ***
function productCost(cost, sale) {
    let finalCost = (cost * 0.20) + cost;
    let profit = sale - finalCost;
    let finalProfit = 20000 * profit;
    return finalProfit
}

// *** exercise 11 ***
function inssCalculation(grossSalary) {
    let aliquotaInss;
    let aliquotaIR;
    let baseSalary;
    let liquidSalary;
    if (grossSalary <= 1556.94) {
        aliquotaInss = grossSalary * 0.08;
    } else if (grossSalary <= 2594.92) {
        aliquotaInss = grossSalary * 0.09;
    } else if (grossSalary <= 5189.82) {
        aliquotaInss = grossSalary * 0.11;
    } else {
        aliquotaInss = 570.88;
    }
    baseSalary = grossSalary - aliquotaInss;

    if (baseSalary <= 1903.98) {
        aliquotaIR = 0;
    } else if (baseSalary <= 2826.65) {
        aliquotaIR = (baseSalary * 0.075) - 142.80;
    } else if (baseSalary <= 3751.06) {
        aliquotaIR = (baseSalary * 0, 15) - 354.80;
    } else if (baseSalary <= 4664.68) {
        aliquotaIR = (baseSalary * 0.225) - 636.13;
    } else {
        aliquotaIR = (baseSalary * 0.275) - 869.36;
    }
    liquidSalary = baseSalary - aliquotaIR;
    return liquidSalary
}