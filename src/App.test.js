import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro text', () => {
  render(<App />);
  const introElement = screen.getByText(/software engineer/i);
  expect(introElement).toBeInTheDocument();
});
