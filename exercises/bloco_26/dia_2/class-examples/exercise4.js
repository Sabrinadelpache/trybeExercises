const fs = require('fs').promises;

const fileName = 'meuTexto.txt';

fs.readFile(fileName, 'utf8')
  .then((data) => console.log(data))
  .catch((erro) => console.log(erro));