/* eslint-disable react/prop-types */
import React from 'react';

import './Card.css';

function Card(props) {
  const {
    text, src, alt, onClick,
  } = props;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="Card" onClick={onClick} role="button" tabIndex="0">
      <img src={src} alt={alt} />
      <p>{text}</p>
    </div>
  );
}

export default Card;
