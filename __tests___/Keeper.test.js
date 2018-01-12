import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Keeper from '/Users/elishebawiggins/Desktop/keeper_track/src/Keeper.js';
import KeeperTimer from '/Users/elishebawiggins/Desktop/keeper_track/src/KeeperTimer.js';
import Supplies from '/Users/elishebawiggins/Desktop/keeper_track/src/Supplies.js';

describe('renders components', () => {
  beforeEach(function(){
    return const div = document.createElement('div');
  })

  it('renders Keeper component', () => {
    ReactDOM.render(<Keeper />, div);
  });

  it('renders renders KeeperTimer component', () => {
    ReactDOM.render(<KeeperTimer />, div);
  });

  it('renders Supplies component', () => {
    ReactDOM.render(<Supplies />, div);
  });
});

describe.only('cleanStatus function changes css for motel room', () => {
  beforeEach(function() {
    return const wrapper = shallow(<Keeper />)
  })

  it('cleanStatus is updated to hotelRoomDirty from hotelRoomClean', () => {
    const cleanRoom = wrapper.find('.hotelRoomClean');
    expect(cleanRoom.props().checked).to.be(true);
    clickIt(cleanRoom);;
    expect(cleanRoom.className).toEqual('hotelRoomDirty')
  });

  it('cleanStatus is updated to hotelRoomClean from hotelRoomDirty', () => {
    const cleanRoom = wrapper.find('.hotelRoomDirty');
    expect(cleanRoom.props().checked).toBe(true);
    clickIt(cleanRoom);
    expect(cleanRoom.className).toEqual('hotelRoomClean')
  });
});
