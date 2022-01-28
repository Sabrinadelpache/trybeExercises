const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const { readFile } = require('./readfile');
const file = 'file.txt';
const mockFileContent = `Hello World!
Hello World!
Hello World!
Hello World!`;

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(mockFileContent);
    });
    
    after(() => fs.readFileSync.restore())
    
    describe('a resposta', () => {
      const fileContent = readFile(file);
      it('é uma string', () => {
        expect(fileContent).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(fileContent).to.equal(mockFileContent);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'))
    });

    after(() => fs.readFileSync.restore())
    
    describe('a resposta', () => {
      const fileContent = readFile('nonexisting file');
      it('é igual a "null"', () => {
        expect(fileContent).to.be.equal(null)
      });
    });
  });
});