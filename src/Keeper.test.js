import React from 'react';
import ReactDOM from 'react-dom';
import Keeper from './Keeper';
import KeeperTimer from './KeeperTimer';
import Supplies from './Supplies';

  it('renders the KeeperTimer component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<KeeperTimer />, div);
  });

  it('renders the Supplies component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Supplies />, div);
  });
