/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import Card from './Card';

function defaultOrder(deck) {
  return deck.map((value, index) => index);
}

function Gameboard(props) {
  let { deck, order } = props;
  const { onFirst, onRepeat } = props;
  if (!deck) { deck = []; }
  if (!order) { order = defaultOrder(deck); }

  const [clicks, setClicks] = useState([]);

  function resetCounter() {
    const clickArray = deck.map(() => 0);
    setClicks(clickArray);
  }

  useEffect(() => {
    resetCounter();
  }, [deck.length]);

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
      <ol style={{ listStyleType: 'none' }}>
        {
          deck.map((value, index) => {
            const rank = order[index];
            const onClick = makeOnClick(index);
            return (
              <li value={rank} key={value.id}>
                <Card text={value.text} src={value.src} alt={value.alt} onClick={onClick} />
              </li>
            );
          })
        }
      </ol>
    </div>
  );
}

export default Gameboard;
