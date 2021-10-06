const fs = require('fs');

const fileName = 'meuTexto.txt';

  fs.readFile(fileName, 'utf8', (err, content) => {
    if(err) console.log(err)
    console.log(content);
  })

