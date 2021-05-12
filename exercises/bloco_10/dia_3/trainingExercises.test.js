const { expect } = require('@jest/globals');
const math = require('./math');

describe('Math functionality', () => {
    test.skip('mOCK FUNCTION, NO IMPLEMENTATION', () => {
        math.subtrair = jest.fn();

        math.subtrair();
        expect(math.subtrair).toHaveBeenCalled();
        expect(math.subtrair).toHaveBeenCalledTimes(1);
        expect(math.subtrair(1,2)).toBe(undefined);
    });
    test.skip('Test implementation', () => {
        math.subtrair = jest.fn().mockReturnValue(-1);

        math.subtrair();
        expect(math.subtrair).toHaveBeenCalled();
        expect(math.subtrair).toHaveBeenCalledTimes(1);
        expect(math.subtrair(1,2)).toBe(-1);
    });
    //Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
    test('Test multiplicar', () => {
        math.multiplicar = jest.fn().mockReturnValue(10);

        math.multiplicar();
        expect(math.multiplicar).toHaveBeenCalled();
        expect(math.multiplicar).toHaveBeenCalledTimes(1);
        expect(math.multiplicar(2,5)).toBe(10);
    });
    //Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
    test('Test somar', () => {
        math.somar = jest.fn().mockImplementation((a, b) => a + b);

        math.somar(2,5);
        expect(math.somar).toHaveBeenCalled();
        expect(math.somar).toHaveBeenCalledTimes(1);
        expect(math.somar).toHaveBeenCalledWith(2,5)
        expect(math.somar(2,5)).toBe(7);
    });
    //Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
    test('Test dividir', () => {
        math.multiplicar = jest
            .fn()
            .mockReturnValue(15)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(5);

        expect(math.multiplicar()).toBe(2);
        expect(math.multiplicar).toHaveBeenCalled();
        expect(math.multiplicar).toHaveBeenCalledTimes(1);
        expect(math.multiplicar()).toBe(5);
        expect(math.multiplicar()).toBe(15);

    });
});