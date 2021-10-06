//Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
const fs = require('fs').promises;
const text = 'simpsons.json';

fs.readFile(text,'utf8')
    .then((data) => {
      const dataArray = JSON.parse(data)
      console.log(dataArray)
      console.log(`Resolved: ${dataArray.map(({id, name}) => `${id} - ${name}`)}`)
    })
    .catch((err) => console.log(`Rejected: ${err}`));
