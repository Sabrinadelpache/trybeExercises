const fs = require('fs');

const filename = 'meuTexto.txt';

try{
  const readFile = fs.readFileSync(filename, 'utf8')
  console.log(readFile);
} catch(err) {
  console.log(err.path)
}