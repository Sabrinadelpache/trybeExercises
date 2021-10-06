import React from 'react';
import renderWithRouter from './renderWithRouter';
import { fireEvent } from '@testing-library/react';
import App from './App';

it('deve renderizar o componente App', () => {
  const { getByText } = renderWithRouter(<App />);
  const home = getByText(/Você está na página Início/);
  expect(home).toBeInTheDocument();
});
it('/about route', () => {
  const { getByText,history } = renderWithRouter(<App />);
  fireEvent.click(getByText(/sobre/i));
  const pathname = history.location.pathname;
  expect(pathname).toBe('/about');
})
it('render sobre page', () => {
  const { getByText } = renderWithRouter(<App />);
  fireEvent.click(getByText(/sobre/i));
  const phrase = getByText(/página Sobre/);
  expect(phrase).toBeInTheDocument();
})
it('noMatch route', () => {
  const { getByText,history } = renderWithRouter(<App />);
  history.push('nomatch');
  const phrase = getByText(/não/)
  expect(phrase).toBeInTheDocument();
})