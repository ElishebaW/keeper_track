import React, { Component } from 'react';
import KeeperTimer from './KeeperTimer';
import Supplies from './Supplies';

class Keeper extends Component {

  cleanStatus(e) {
    if (e.target.className === "hotelRoomClean") {
      e.target.classList.add("hotelRoomDirty");
      e.target.classList.remove("hotelRoomClean");
    } else {
      e.target.classList.add("hotelRoomClean") ;
      e.target.classList.remove("hotelRoomDirty") ;
    }
  }

  render() {
    return (
      <div className='HotelRoom'>
        <h2>Motel Rooms</h2>
          <button type="button" className="hotelRoomClean"  onClick= {this.cleanStatus}>101</button>
          <button type="button" className="hotelRoomClean"  onClick= {this.cleanStatus}>102</button>
          <button type="button" className="hotelRoomClean"  onClick= {this.cleanStatus}>103</button>
          <button type="button" className="hotelRoomClean"  onClick= {this.cleanStatus}>104</button>
          <button type="button" className="hotelRoomClean"  onClick= {this.cleanStatus}>201</button>
          <button type="button" className="hotelRoomClean"  onClick= {this.cleanStatus}>202</button>
          <button type="button" className="hotelRoomClean"  onClick= {this.cleanStatus}>203</button>
          <button type="button" className="hotelRoomClean"  onClick= {this.cleanStatus}>204</button>
        <div className="Keepers">
          <p className='Keeper-header'>HouseKeeper 1</p>
            <Supplies />
            <KeeperTimer/>
          <p className='Keeper-header'>HouseKeeper 2</p>
            <Supplies />
            <KeeperTimer/>
          <p className='Keeper-header'>HouseKeeper 3</p>
            <Supplies />
            <KeeperTimer/>
          <p className='Keeper-header'>HouseKeeper 4</p>
            <Supplies />
           <KeeperTimer/>
        </div>
      </div>
    )
  }
}

export default Keeper;
