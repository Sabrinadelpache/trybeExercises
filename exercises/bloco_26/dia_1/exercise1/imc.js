const readline = require('readline-sync');

const height = readline.questionFloat("What is your height?");
const weight = readline.questionFloat("What is your weight?");

const imc = () => {
  return ((height + weight) / 2);
}

console.log(imc());