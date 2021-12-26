import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

it('App renders', () => {
  render(<App />);
  expect(screen.getByText(/4-Legged/)).toBeInTheDocument();
});

it('Has a scorboard', () => {
  render(<App />);
  expect(screen.getByText(/Current Score: 0/)).toBeInTheDocument();
});

it('Has a gameboard', () => {
  render(<App />);
  expect(screen.getByRole('list')).toBeInTheDocument();
});

/* describe('Uses a deck', () => {
  const deck = [{
    src: 'zebra.png',
    text: 'zebra',
    alt: 'zebra',
  }, {
    src: 'bunny.png',
    text: 'bunny',
    alt: 'bunny',
  }, {
    src: 'frog.png',
    text: 'frog',
    alt: 'frog',
  }];

  it('Game Works', () => {
    render(<App deck={deck} demo />);
    const cards = screen.getAllByRole('button');
    fireEvent.click(cards[0]);
    fireEvent.click(cards[1]);
    expect(screen.getByText(/Current Score: 2/)).toBeInTheDocument();
    // repeated card, game over
    fireEvent.click(cards[0]);
    expect(screen.getByText(/High Score: 2/)).toBeInTheDocument();
    expect(screen.getByText(/Current Score: 0/)).toBeInTheDocument();
  });
}); */
