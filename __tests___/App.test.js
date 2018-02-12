import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import Keeper from '../src/Keeper';
import KeeperTimer from '../src/KeeperTimer';
import Supplies from '../src/Supplies';
import { cleanStatus }  from '../src/Keeper'
import sinon from 'sinon';
import chai from 'chai';

describe('App', () => {
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

  it('renders App component', () => {
    ReactDOM.render(<App />, div);
  });
});

describe('Keeper', () => {

  it('renders eight motel rooms', () => {
    const wrapper = mount(<Keeper />);
    expect(wrapper.find('.motelRoomClean').length).toBe(8)
  });

  it('simulates cleanStatus click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<button type="button" className="motelRoomClean"  onClick= {mockCallBack} id='button'>101</button>));
    button.find('.motelRoomClean').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

describe('Supplies', () => {

  it('renders four supply buttons', ()  => {
    const wrapper = mount(<Supplies />)
    expect(wrapper.find('.smallButton').length).toBe(4);
  });

  it('simulates changeButtonSize click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<button type='button' className ='smallButton' onClick={mockCallBack}>Vacuum</button>));
    button.find('.smallButton').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
 });
});
