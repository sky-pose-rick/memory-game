/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import './Gameboard.css';

import Card from './Card';

function defaultRandomizer(deck) {
  return deck.map((value, index) => index);
}

function Gameboard(props) {
  let { deck, randomizer } = props;
  const { onFirst, onRepeat } = props;
  if (!deck) { deck = []; }
  if (!randomizer) { randomizer = defaultRandomizer; }

  const [clicks, setClicks] = useState([]);
  const [order, setOrder] = useState([]);

  function resetCounter() {
    const clickArray = deck.map(() => 0);
    setClicks(clickArray);
  }

  useEffect(() => {
    resetCounter();
  }, [deck.length]);

  useEffect(() => {
    const newOrder = randomizer(deck);
    setOrder(newOrder);
  }, [clicks]);

  function makeOnClick(index) {
    if (clicks[index] === 0) {
      return () => {
        onFirst();
        const clickCopy = [...clicks];
        clickCopy[index] += 1;
        setClicks(clickCopy);
      };
    }

    return () => {
      onRepeat();
      resetCounter();
    };
  }

  return (
    <div className="Gameboard">
      <ul>
        {
          order.map((rank) => {
            const card = deck[rank];
            const onClick = makeOnClick(rank);
            return (
              <li key={card.id}>
                <Card text={card.text} src={card.src} alt={card.alt} onClick={onClick} />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Gameboard;
