import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Scoreboard from './Scoreboard';

it('Scoreboard renders', () => {
  render(<Scoreboard />);
  expect(screen.getByText(/scoreboard/)).toBeInTheDocument();
});
