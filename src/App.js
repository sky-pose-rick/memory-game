/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import './App.css';
import Scoreboard from './Scoreboard';
import Gameboard from './Gameboard';

function App(props) {
  let { data } = props;
  // const { demo } = props;
  if (!data) { data = []; }

  const [deck, setDeck] = useState([]);
  const [score, setScore] = useState(0);

  function increaseScore() {
    setScore(score + 1);
  }

  function resetGame() {
    setScore(0);
  }

  // create the deck at the start
  useEffect(() => {
    resetGame();

    setDeck(data.map((value, index) => {
      const card = { ...value };
      card.id = `card-${index}`;
      return card;
    }));
  }, [data.length]);

  return (
    <div className="App">
      <h1>4-Legged Animals Memory Game</h1>
      <Scoreboard score={score} />
      <Gameboard deck={deck} onFirst={() => increaseScore()} onRepeat={() => resetGame()} />
    </div>
  );
}

export default App;
