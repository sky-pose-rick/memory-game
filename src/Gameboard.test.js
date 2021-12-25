import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gameboard from './Gameboard';

it('Gameboard renders', () => {
  render(<Gameboard />);
  expect(screen.getByText(/gameboard/)).toBeInTheDocument();
});

describe('Gameboard with cards', () => {
  let rerender;
  const deck = [{
    src: 'zebra.png',
    text: 'zebra',
    alt: 'zebra',
    id: 'card-1',
    onClick: null,
  }, {
    src: 'bunny.png',
    text: 'bunny',
    alt: 'bunny',
    id: 'card-2',
    onClick: null,
  }, {
    src: 'frog.png',
    text: 'frog',
    alt: 'frog',
    id: 'card-3',
    onClick: null,
  }];

  beforeEach(() => {
    ({ rerender } = render(<Gameboard deck={deck} />));
  });

  it('Cards display', () => {
    expect(screen.getAllByRole('img').length).toBe(3);
  });

  it('Cards are shuffled between clicks', () => {
    const mockRandomizer = jest.fn((deck) => [2, 0, 1]);
    expect(screen.getAllByRole('listitem')[0].value).toBe(0);
    rerender(<Gameboard deck={deck} randomizer={mockRandomizer} />);
    expect(screen.getAllByRole('listitem')[0].value).toBe(2);
  });

  it.todo('Cards can be clicked');
});
