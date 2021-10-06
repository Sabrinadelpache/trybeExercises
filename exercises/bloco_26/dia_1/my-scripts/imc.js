const readline = require('readline-sync');


const imcQualifications = (imc) => {
    if(imc <= 18.5) return "Abaixo do peso.";
    if(24.9 <= imc >= 18.5) return "Peso normal";
    if(29.9 <= imc >= 25) return "Acima do peso(sobrepeso)";
    if(34.9 <= imc >= 30) "Obesidade grau |";
    if(39.9 <= imc >= 35.00) "Obesidade grau ||";
    if(imc >= 40) "Obesidade grau ||| e ||||";
}

const imcCalculator = () => {
    const peso = readline.questionFloat('What is your weight?');
    const altura = readline.questionFloat('How tall are you?');
    const imc = peso/(altura * 2)
    return `O seu imc é:  ${imc} e sua qualificação é ${imcQualifications(imc)}`;
};

module.exports = imcCalculator;