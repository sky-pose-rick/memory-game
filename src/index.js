import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import cardData from './cards.json';
import App from './components/App';

ReactDOM.render(
  <App data={cardData.body} />,
  document.getElementById('root'),
);
