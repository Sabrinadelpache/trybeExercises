const fs = require('fs').promises;

const fileName = 'meuTexto.txt';

const main = async() => {
    await fs.writeFile(fileName, 'utf8')
        .then((data) => console.log(`Sucesso: ${data}`))
        .catch((err) => console.log(`Falha: ${err}`));
}
main();