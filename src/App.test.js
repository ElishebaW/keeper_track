import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders the header of the page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
