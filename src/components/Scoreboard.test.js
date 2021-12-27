import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Scoreboard from './Scoreboard';

it('Scoreboard renders', () => {
  render(<Scoreboard />);
  expect(screen.getByText(/Current Score: 0/)).toBeInTheDocument();
});

it('Scoreboard displays current score', () => {
  render(<Scoreboard score={5} />);
  expect(screen.getByText(/Current Score: 5/)).toBeInTheDocument();
});

it('Scoreboard tracks high score', () => {
  const { rerender } = render(<Scoreboard score={0} />);
  expect(screen.getByText(/High Score: 0/)).toBeInTheDocument();
  rerender(<Scoreboard score={4} />);
  expect(screen.getByText(/High Score: 4/)).toBeInTheDocument();
  rerender(<Scoreboard score={2} />);
  expect(screen.getByText(/High Score: 4/)).toBeInTheDocument();
  rerender(<Scoreboard score={7} />);
  expect(screen.getByText(/High Score: 7/)).toBeInTheDocument();
});
