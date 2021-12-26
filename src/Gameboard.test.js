import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gameboard from './Gameboard';

it('Gameboard renders', () => {
  render(<Gameboard />);
  expect(screen.getByRole('list')).toBeInTheDocument();
});

describe('Gameboard with cards', () => {
  const mockFirst = jest.fn(() => {});
  const mockRepeat = jest.fn(() => {});
  let rerender;
  const deck = [{
    src: 'zebra.png',
    text: 'zebra',
    alt: 'zebra',
    id: 'card-1',
  }, {
    src: 'bunny.png',
    text: 'bunny',
    alt: 'bunny',
    id: 'card-2',
  }, {
    src: 'frog.png',
    text: 'frog',
    alt: 'frog',
    id: 'card-3',
  }];

  beforeEach(() => {
    ({ rerender } = render(<Gameboard deck={deck} onFirst={mockFirst} onRepeat={mockRepeat} />));
  });

  it('Cards display', () => {
    expect(screen.getAllByRole('img').length).toBe(3);
  });

  it('Cards are shuffled between clicks', () => {
    const mockOrder = [2, 0, 1];
    expect(screen.getAllByRole('listitem')[0].value).toBe(0);
    rerender(<Gameboard deck={deck} order={mockOrder} />);
    expect(screen.getAllByRole('listitem')[0].value).toBe(2);
  });

  it('Cards can be clicked', () => {
    fireEvent.click(screen.getByText(/frog/));
    expect(mockFirst.mock.calls.length).toBe(1);
  });

  it('Functions reset on multiple clicks', () => {
    const frogElem = screen.getByText(/frog/);
    fireEvent.click(frogElem);
    fireEvent.click(frogElem);
    fireEvent.click(frogElem);
    expect(mockFirst.mock.calls.length).toBe(2);
    expect(mockRepeat.mock.calls.length).toBe(1);
  });
});
