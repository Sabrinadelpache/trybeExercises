const fs = require('fs');

const fileName = 'simpsons.json';

const removeSimpsons = async() => {
  await fs
    .readFile(fileName, 'utf8')
    .then((data) => data.filter({id, name} =console.log(id !== 6 && id !== 10)))
    .catch(err => err);
}

removeSimpsons();