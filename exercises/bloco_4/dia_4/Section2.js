// Exercise 1 - Palíndromo
const palindromo = (palavra) => {
    let word = '';
    for (let i = palavra.length-1; i >= 0; i -= 1) {
        word += palavra[i]
    }
    if(word === palavra) console.log(`${palavra} é um palíndromo`)
    else console.log(`${palavra} não é um palíndromo`);
}

// Exercise 2 - Return the highest number

const highest = (array) => {
    let high = 0;
    for (i in array) {
        if(high < array[i]) {
            high = array[i];
        }
    }
    return high
}

// Exercise 3 - Return the lowest number
const lowest = (array) => {
    let minor = 0;
    for (i in array) {
        if(minor > array[i]) {
            minor = array[i];
        }
    }
    return minor
}

// Exercise 4 - Return the name with more letters
const moreLetters = (names) => {
    let lengthName = 0;
    let biggerName = '';
    for (i in names) {
        if(lengthName < names[i].length) {
            lengthName = names[i].length
            biggerName = names[i];
        }
    }
    return biggerName
}

// Exercise 5 - 



// Exercise 6 - sum all numbers
const sumAll = (number) => {
    let sum = 0;
    for(let i = 0; i <= number; i += 1) {
        sum += i
    }
    return sum
}

// split e reverse