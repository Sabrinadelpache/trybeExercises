import { render, screen } from '@testing-library/react';
import App from './App';
import Test from './test'

test('renders learn react link', () => {

  console.log(render(<Test />))
  // const { getByText } = render(<test />)
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
