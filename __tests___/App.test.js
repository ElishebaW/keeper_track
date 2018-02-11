import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import Keeper from '../src/Keeper';
import KeeperTimer from '../src/KeeperTimer';
import Supplies from '../src/Supplies';
import { cleanStatus} from '../src/Keeper'

describe('renders components', () => {
  let div;

  beforeEach(function(){
    div = document.createElement('div');
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

describe('motelRooms', () => {

  it('has eight motel rooms displayed', () =>{
    const wrapper = mount(<Keeper />);
    expect(wrapper.find('.hotelRoomClean').length).toBe(8)
  })


  it('cleanStatus is updated to hotelRoomDirty from hotelRoomClean', () => {
  const wrapper = mount(<Keeper />);
  const dirty = wrapper.find('.hotelRoomClean').at(1).simulate('click');
  expect(wrapper.find('.hotelRoomDirty').length).toBe(1);
  });

  it('cleanStatus is updated to hotelRoomClean from hotelRoomDirty', () => {
    const wrapper = shallow(<Keeper />);
    wrapper.find('#button').first().prop('onClick')()
    expect(wrapper.find('.hotelRoomDirty').length).toBe(1)
  });
});

describe('changeButtonSize function changes the button size on click', () => {

})
