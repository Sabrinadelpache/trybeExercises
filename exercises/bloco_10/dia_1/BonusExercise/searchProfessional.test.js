const searchEmployee = require('./searchProfessional');

const test =     {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  };
  const test2 = {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Informação indisponível',
    specialities: ['Backend'],
  }


describe('Test searchEmployee functionality', () => {
    it('is a function', () => {
        expect( typeof searchEmployee).toBe('function');
    });
    it('returns an array with specified info', () => {
        expect(searchEmployee('8579-6')).toEqual(test);
    });
    it('returns "ID não identificada" when does not find the id', () => {
        expect(searchEmployee('5555-5')).toEqual('ID não identificada')
    });
    it('return "Informação indisponível" if thereis no info in the object', () => {
        expect(searchEmployee('4678-2', 'lastname')).toEqual(test2);
    });
});