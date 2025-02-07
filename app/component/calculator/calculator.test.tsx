// app/calculator.test.tsx
import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from './calculator';

test('Addition fonctionne correctement', () => {
  render(<Calculator />);
  const inputA = screen.getByPlaceholderText('Nombre A');
  const inputB = screen.getByPlaceholderText('Nombre B');
  const select = screen.getByRole('combobox');
  const button = screen.getByText('Calculer');
  const result = screen.getByText(/Résultat/i);
  fireEvent.change(inputA, { target: { value: '5' } });
  fireEvent.change(inputB, { target: { value: '3' } });
  fireEvent.change(select, { target: { value: '+' } });
  fireEvent.click(button);
  expect(result).toHaveTextContent('8');
});

test('Substraction fonctionne correctement', () => {
  render(<Calculator />);
  const inputA = screen.getByPlaceholderText('Nombre A');
  const inputB = screen.getByPlaceholderText('Nombre B');
  const select = screen.getByRole('combobox');
  const button = screen.getByText('Calculer');
  const result = screen.getByText(/Résultat/i);
  fireEvent.change(inputA, { target: { value: '5' } });
  fireEvent.change(inputB, { target: { value: '3' } });
  fireEvent.change(select, { target: { value: '-' } });
  fireEvent.click(button);
  expect(result).toHaveTextContent('2');
});

test('Multiplication fonctionne correctement', () => {
  render(<Calculator />);
  const inputA = screen.getByPlaceholderText('Nombre A');
  const inputB = screen.getByPlaceholderText('Nombre B');
  const select = screen.getByRole('combobox');
  const button = screen.getByText('Calculer');
  const result = screen.getByText(/Résultat/i);
  fireEvent.change(inputA, { target: { value: '5' } });
  fireEvent.change(inputB, { target: { value: '3' } });
  fireEvent.change(select, { target: { value: '*' } });
  fireEvent.click(button);
  expect(result).toHaveTextContent('15');
});

test('Division fonctionne correctement', () => {
  render(<Calculator />);
  const inputA = screen.getByPlaceholderText('Nombre A');
  const inputB = screen.getByPlaceholderText('Nombre B');
  const select = screen.getByRole('combobox');
  const button = screen.getByText('Calculer');
  const result = screen.getByText(/Résultat/i);
  fireEvent.change(inputA, { target: { value: '10' } });
  fireEvent.change(inputB, { target: { value: '2' } });
  fireEvent.change(select, { target: { value: '/' } });
  fireEvent.click(button);
  expect(result).toHaveTextContent('5');
});

test('Division par zero', () => {
  render(<Calculator />);
  const inputA = screen.getByPlaceholderText('Nombre A');
  const inputB = screen.getByPlaceholderText('Nombre B');
  const select = screen.getByRole('combobox');
  const button = screen.getByText('Calculer');
  const result = screen.getByText(/Résultat/i);
  fireEvent.change(inputA, { target: { value: '10' } });
  fireEvent.change(inputB, { target: { value: '0' } });
  fireEvent.change(select, { target: { value: '/' } });
  fireEvent.click(button);
  expect(result).toHaveTextContent('Division par zéro');
});

test('Opérateur non supporté', () => {
  render(<Calculator />);
  const inputA = screen.getByPlaceholderText('Nombre A');
  const inputB = screen.getByPlaceholderText('Nombre B');
  const select = screen.getByRole('combobox');
  const button = screen.getByText('Calculer');
  const result = screen.getByText(/Résultat/i);
  fireEvent.change(inputA, { target: { value: '10' } });
  fireEvent.change(inputB, { target: { value: '0' } });
  fireEvent.change(select, { target: { value: '^' } });
  fireEvent.click(button);
  expect(result).toHaveTextContent('Opérateur non supporté');
});
