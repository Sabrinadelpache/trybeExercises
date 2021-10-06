 const findUserById = require('./exercise2.js');

 test('Teste funcionamento da função: retorno ou não de um usuário'), done => {
     return findUserById(4).then(nameUser => {
        expect(nameUser).toBe('Mark');
        done();
     })
 }