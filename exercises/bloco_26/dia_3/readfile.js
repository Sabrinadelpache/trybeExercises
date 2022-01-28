const fs = require('fs');

const readFile = (nameFile) => {
    try{
        const fileContent = fs.readFileSync(nameFile, 'utf-8');
        return fileContent;
    } catch(erro) {
        return null;
    }
}

module.exports = { readFile }