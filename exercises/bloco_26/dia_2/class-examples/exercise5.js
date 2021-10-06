const fs = require('fs').promises;

const fileName = 'meuTexto.txt';

fs.writeFile(fileName, 'copo sem água')
  .then(() => console.log("Sucesso: "))
  .catch((err) => console.log(err))
  

