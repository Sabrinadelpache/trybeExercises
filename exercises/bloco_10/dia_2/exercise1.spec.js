const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  };

  test('Teste 1', done => {
    uppercase('casa', (result) => {
      expect(result).toBe('CASA');
      done();
    })
})