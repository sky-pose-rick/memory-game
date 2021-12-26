/* eslint-disable react/prop-types */
import React from 'react';

import Card from './Card';

function defaultOrder(deck) {
  return deck.map((value, index) => index);
}

function Gameboard(props) {
  let { deck, order } = props;
  if (!deck) { deck = []; }
  if (!order) { order = defaultOrder(deck); }

  return (
    <div className="Gameboard">
      <ol style={{ listStyleType: 'none' }}>
        {
          deck.map((value, index) => {
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
