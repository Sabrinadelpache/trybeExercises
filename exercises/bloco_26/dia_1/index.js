const readline = require('readline-sync');
console.log('Hello, world!');
const name = readline.question('Qual seu nome?');
const age = readline.questionInt('Qual sua idade?');

console.log('Heloo ' + name + ' Your age is ' + age + 'is that correct? ');
console.log(`Heloo ${name}  Your age is ${age} is that correct? `);
