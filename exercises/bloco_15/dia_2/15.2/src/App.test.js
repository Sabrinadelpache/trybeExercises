// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import App from './App';
test('alterando o valor dos campos e testando o valor guardado', () => {
  // const { getByTestId } = render(<App />);
  // const inputNome = getByTestId('input-nome');
  // expect(inputNome).toHaveValue('');
  // fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
  // expect(inputNome).toHaveValue('Estudante da Trybe');

  // const inputEmail = getByTestId('input-email');
  // expect(inputEmail).toHaveValue('');
  // fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
  // expect(inputEmail).toHaveValue('estudante@trybe.com');
  const { getByTestId } =  render(<App />);

    const inputName = getByTestId('input-nome');
    expect(inputName).toBeInTheDocument();
    const inputEmail = getByTestId('input-email');
    expect(inputEmail).toBeInTheDocument();

    fireEvent.change(inputName, { target: {value: 'sabrina' } })
    expect(inputName.value).toBe('sabrina');

    fireEvent.change(inputEmail, { target: { value: 'sabrina@gmail.com' } });
    expect(inputEmail.value).toBe('sabrina@gmail.com')
});