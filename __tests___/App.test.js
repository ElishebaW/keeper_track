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
  const mockCallBack = jest.fn();

  it('renders eight motel rooms', () => {
    const wrapper = mount(<Keeper />);
    expect(wrapper.find('.motelRoomClean').length).toBe(8)
  });

  it('mock clicks motelRoom button', () => {

    const button = shallow(<button type="button" className="motelRoomClean" onClick= {mockCallBack} id='button'>101</button>);
    button.find('.motelRoomClean').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
 });
});

describe('click events', () => {

  it('renders four supply buttons', ()  => {
    const wrapper = mount(<Supplies />)
    expect(wrapper.find('.smallButton').length).toBe(4);
  });

  it('mock clicks the supplies button', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<button type='button' className ='smallButton' onClick={mockCallBack}>Vacuum</button>);
    button.find('.smallButton').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
 });
});

describe('KeeperTime buttons', () => {

  it('mock clicks start button', () => {
    const mockCallBack = jest.fn();
    const Button = (props) =>
      <button type="button" {...props} className={"btn " + props.className } />;
    const button = shallow(<Button className="start-btn" onClick={mockCallBack}>start</Button>);
    button.find('.start-btn').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('mock clicks the stop button', () => {
    const mockCallBack = jest.fn();
    const Button = (props) =>
      <button type="button" {...props} className={"btn " + props.className } />;
    const button = shallow(<Button className="stop-btn" onClick={mockCallBack}>start</Button>);
    button.find('.stop-btn').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('mock clicks the reset button', () => {
    const mockCallBack = jest.fn();
    const Button = (props) =>
      <button type="button" {...props} className={"btn " + props.className } />;
    const button = shallow(<Button className="reset" onClick={mockCallBack}>reset</Button>);
    button.find('.reset').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
