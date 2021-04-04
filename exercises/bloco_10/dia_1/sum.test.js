function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}


// A função sum(a, b) retorna a soma do parâmetro a com o b;
test('sum two values', () => {
  expect(sum(2,2)).toBe(4);
});

// Teste se o retorno de sum(4, 5) é 9
test('Sum 4 + 5, and return 9', () => {
  expect(sum(4,5)).toEqual(9);
});

//Teste se o retorno de sum(0, 0) é 0
test('Sum 0 + 0 equals 0', () => {
  expect(sum(0,0)).toEqual(0);
});
//Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
test('Sum 4 + "5" return error', () => {
  expect(() => {sum(4,"5")}).toThrow();
});
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
test('Sum 4 + "5" and return error', () => {
  expect(() => {sum(4,"5")}).toThrowError( new Error('parameters must be numbers'))
});
