//Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const fs = require('fs').promises;

const fileName = 'simpsons.json';

const returnIdData = async(id) => {
    await fs.readFile(fileName, 'utf8')
    .then((data) => {
      const simposonsArray = JSON.parse(data)
      simposonsArray.filter(item => parseInt(item.id) === id)
    })
    .catch(err => `Esse id é inválido: ${err}`);
    

}
returnIdData(11);
