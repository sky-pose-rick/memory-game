/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import Card from './Card';

function defaultRandomizer(deck) {
  return deck.map((value, index) => index);
}

function Gameboard(props) {
  let { deck, randomizer } = props;
  if (!deck) { deck = []; }
  if (!randomizer) { randomizer = defaultRandomizer; }

  const order = randomizer(deck);

  return (
    <div className="Gameboard">
      gameboard
      <ol style={{ listStyleType: 'none' }}>
        {
          deck.map((value, index) => {
            if (index === 0) {
              console.log('first item rank: ', order[index]);
            }
            const rank = order[index];
            return (
              <li value={rank} key={value.id}>
                <Card text={value.text} src={value.src} alt={value.alt} onClick={value.onClick} />
              </li>
            );
          })
        }
      </ol>
    </div>
  );
}

export default Gameboard;
