const sumNumbers = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      return reject("Informe apenas números");

      const result = (a+b)*c
    if(result >= 50) return resolve(`Acima ou igual a 50. ${result}`);
    return resolve(`Valor muito baixo! ${result}`)
  })
}

const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1) 

const main = async() => {
  try{
    await console.log(sumNumbers(generateRandomNumber(), generateRandomNumber(), generateRandomNumber()))
    console.log(`Àcerto!`)
  } catch(err) {
    console.log(`Èrro: ${err}`)
  }
}

main();