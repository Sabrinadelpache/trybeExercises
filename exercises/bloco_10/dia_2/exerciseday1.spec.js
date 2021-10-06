const numeros = require('./exerciseday1');

describe('Test numeros functon', () => {
  test('Amount of items in the array', () => {
    const numbers = [1,2,3,4,5];
    expect(numeros(numbers)).toBe(true)
  })
});