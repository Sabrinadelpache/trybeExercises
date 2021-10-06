const assert = require('assert');
function sum(a, b) {
    return a + b
}
let expected = 0;
/*2- testar o retorno de sum(4,5) === 9*/
expected = sum(4,5)
assert.strictEqual(expected, 9, 'Resultado errado');
/*3- testar o retorno de sum(0,0)*/ 
assert.strictEqual(sum(0, 0), 0, 'Resultado errado')
/* 4- testar se há erro com sum(4, '5')*/
assert.strictEqual(sum(4, "5"), 45, 'Resultado errado')
