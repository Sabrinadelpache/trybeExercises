/* Agora, um passo para trás: vamos fazer, passo a passo, uma Promise . 
Primeiramente, instancie uma Promise . Dentro dela, você deve produzir 
um array com dez números aleatórios de 1 a 50 e elevá-los todos ao 
quadrado. Se a soma de todos esses elementos for inferior a 8000, a 
promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça 
um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, 
como parâmetro, funções! */

// Generate 10 random numbers between 1 to 50;
// Elevate each number to square
// Sum them all
// if the sum is above or equal to 8000, the function is rejected

const arrayDivions = [2, 3, 5, 10];
const promise = new Promise((tudoCerto, deuErrado) => {
    let sum = 0;
    for (let i = 0; i < 10; i += 1) {
        let randomNumbers = Math.round(Math.random() * 50);
        let elevatedNumbers = randomNumbers * randomNumbers;
        sum += elevatedNumbers;
    }
    if (sum <= 8000) {
        tudoCerto(sum);
    }
    deuErrado(sum);
})
    .then(sum => {
        console.log(`A soma é abaixo de 8000: ${sum}`);
        const result = arrayDivions.map((divide) => Math.round(sum/divide));
        console.log(result);
        new Promise((resolve) => {
            const newResult = result.reduce((previousValue, currentValue) => previousValue + currentValue);
            resolve(newResult);
        })
            .then(result => console.log(`O resultado da soma dos números no array é: ${result}`));
    })
    .catch(sum => console.log(`A soma é acima de 8000: ${sum}.\nÉ mais de oito mil! Essa promise deve estar quebrada!`));