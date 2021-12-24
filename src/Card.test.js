import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

it('Card renders', () => {
  render(<Card />);
  const card = screen.getByRole('img');
  expect(card).toBeInTheDocument();
});

it('Card renders text', () => {
  render(<Card text='horse' />);
  expect(screen.getByText(/horse/)).toBeInTheDocument();
});

it('Card has alt-text', () => {
  render(<Card alt='zebra' />);
  const card = screen.getByRole('img');
  expect(card.alt).toMatch(/zebra/);
});

it('On click works', ()=>{
  const mockFn = jest.fn(() => {});

  render(<Card text='zebra' onClick={mockFn} />);
  fireEvent.click(screen.getByText(/zebra/));
  expect(mockFn.mock.calls.length).toBe(1);
});

it('src is passed', () =>{
  render(<Card src='zebra.png' />);
  const card = screen.getByRole('img');
  expect(card.src).toMatch(/zebra.png/);
})