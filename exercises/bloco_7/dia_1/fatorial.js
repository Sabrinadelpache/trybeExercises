// Return the fatorial of a number
const fatorial = ((number) => {
    let result = 1;
    for (let i = 1; i <= number; i += 1) {
        result *= i
    }
    return result
})

