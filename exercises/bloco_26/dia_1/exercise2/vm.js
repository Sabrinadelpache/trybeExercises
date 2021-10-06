const readline = require('readline-sync');

const distance = readline.questionFloat("What is the distance?");
const time = readline.questionFloat("What is the amount of time?");


const avgVelocity = (distance, time) => {
  return distance/time
}

console.log(avgVelocity(distance, time));