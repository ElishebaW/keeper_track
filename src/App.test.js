import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders the header of the page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders the keeper component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Keeper />, div);
});
