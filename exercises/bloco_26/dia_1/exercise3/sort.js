const readline = require("readline-sync");

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const checkNumbers = () => {
  const randomNumber = generateRandomNumber();
  const guessNumber = readline.questionInt("Guess one number:");
  if(guessNumber === randomNumber) {
    console.log("Parabéns! Número correto!");
  }
  else {
    console.log("Opa, não foi dessa vez!");
  }
}

const runGame = () => {
  let continueOrNot = false;
  do {
    continueOrNot = false;
    checkNumbers();
    const continueAnswer = readline.question("Do you wannna play Tap yes or sim?");
    if(continueAnswer[0] === 'yes' || continueAnswer[0] === 'sim') continueOrNot = true;

  } while(continueOrNot === true);
}

runGame();