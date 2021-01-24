let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// *** Exercise 1 ***
const showValues = () => {
    for (let index in numbers) {
        console.log(numbers[index])
    }
} // for ... in ...
const showValues2 = () => {
    for (let number of numbers) {
        console.log(number);
    }
} // for ... of ...
const showValues3 = () => {
    for (let index = 0; index < numbers.length; index += 1) {
        console.log(numbers[index])
    }
} // for
const showValues4 = () => {
    numbers.forEach(number => console.log(number))
} // forEach

// *** Exercise 2 ***
const sumAll = () => {
    sum = 0;
    numbers.forEach(number => {
        sum += number;
    })
    console.log(sum)
    return sum
} // forEach
const sumAll2 = () => {
    numbers.reduce((acc, cur) => acc + cur)
} // reduce

// *** Exercise 3 ***
const average = () => {
    let media = 0;
    numbers.forEach(number => media += number)
    return media /= numbers.length;
} // forEach
const average2 = () => {
    numbers.reduce((acc, cur) => {
        return acc + cur
    });
} // reduce

// *** Exercise 4 ***
const biggerAverage20 = () => {
    let media = 0;
    numbers.forEach(number => media += number)
    media /= numbers.length;
    if (media > 20) {
        console.log('Valor maior que 20')
    } else {
        console.log('Valor menos ou igual a 20')
    }
} // forEach
const bigger2Average20 = () => {
    let soma = 0;
    numbers.reduce((acc, cur) => {
        soma = acc + cur
        return soma
    });
    if (soma > 20) {
        console.log('Valor maior que 20')
    } else {
        console.log('Valor menor ou igual a 20')
    }
} // reduce

// ***Exercise 5 ***
const biggerNum = () => {
    let maior = 0;
    numbers.filter(number => {
        if (number > maior) {
            maior = number
        }
    })
    console.log(maior)
    return maior
} // filter
const biggerNum2 = () => {
    let maior = Math.max(...numbers)
    return maior
} // Math.max and spread operator

// *** Exercise 6 ***
const evenNumbers = () => {
    const even = numbers.filter(number => number % 2 !== 0);
    if (even === []) {
        return console.log('Nenhum valor ímpar encontrado')
    }
    return even
} // filter
const evenNumbers2 = () => {
    return numbers.some(number => number % 2 !== 0)
} // some
const evenNumbers3 = () => {
    return numbers.every(number => number % 2 !== 0)
} // every

// *** Exercise 7 ***
const smallestNumber = () => {
    return Math.min(...numbers)
} // Math.min and spread operator
const smallestNumber2 = () => {
    let small = numbers[0];
    numbers.filter(number => {
        if (small > number) {
            small = number
        }
    });
    return small
} // filter

// *** Exercise 8 ***
const arrayto25 = () => {
    array = [];
    for (let i = 0; i < 25; i += 1) {
        console.log(array.push(i));
    }
} // for

// *** Exercise 9 ***
const arrayDivision = () => {
    array = [];
    for (let i = 0; i < 25; i += 1) {
        array.push(i);
        console.log(array[i] / 2);
    }
} //for
