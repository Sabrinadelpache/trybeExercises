const readline = require("readline-sync");

const scripts = [
  {name: "../exercise1/imc.js"},
  {name: "../exercise2/vm.js"},
  {name: "../exercise3/sort.js"}
];

const defineScript = () => {
  const chooseScript = readline.questionInt("Choose a script: 1-IMC, 2-Velocidade Média, 3-Sorteio");
  if(3 <= chooseScript >= 1) return "Invalid number!"

  const choseScript = scripts[chooseScript-1]
  require(choseScript.name)
}

console.log(defineScript());