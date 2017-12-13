import React, { Component } from 'react';
import HotelRoom from './HotelRoom.png';
import './App.css';

class Keeper extends Component {
  render() {
    return (
      <div className='HotelRoom'>
      <h2>Hotel Room</h2>
      <img src={HotelRoom} alt="HotelRoom" />
      <div className="Keepers">
      <button
       type="button"
       className="button-1"
       />
      <button
      type="button-2"
      className="btn btn-success"
       />
      <button
        type="button-3"
        className="btn btn-success"
       />
       <button
        type="button-4"
        className="btn btn-success"
        />
      </div>
    </div>
    )
  }
}

export default Keeper;
