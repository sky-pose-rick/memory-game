import React from 'react';

import './App.css';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';

function App(props) {
  const { deck, demo } = props;
  return (
    <div className="App">
      <h1>4-Legged Animals Memory Game</h1>
      <Scoreboard />
      <Gameboard />
    </div>
  );
}

export default App;
