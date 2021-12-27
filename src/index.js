import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const deck = [{
  src: 'zebra.png',
  text: 'zebra',
  alt: 'zebra',
}, {
  src: 'bunny.png',
  text: 'bunny',
  alt: 'bunny',
}, {
  src: 'frog.png',
  text: 'frog',
  alt: 'frog',
}];

ReactDOM.render(
  <App data={deck} />,
  document.getElementById('root'),
);
