/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

function Scoreboard(props) {
  let { score } = props;
  if (!score) { score = 0; }

  const [highScore, setHighScore] = useState(score);

  useEffect(() => {
    if (score > highScore) { setHighScore(score); }
  }, [score]);

  return (
    <div className="Scoreboard">
      scoreboard
      <p>
        {`High Score: ${highScore}`}
      </p>
      <p>
        {`Current Score: ${score}`}
      </p>
    </div>
  );
}

export default Scoreboard;
