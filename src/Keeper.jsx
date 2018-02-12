import React, { Component } from 'react';
import KeeperTimer from './KeeperTimer';
import Supplies from './Supplies';


class Keeper extends Component {

  cleanStatus(e) {
    if (e.target.className === "motelRoomClean") {
      e.target.classList.add("motelRoomClean");
      e.target.classList.remove("motelRoomClean");
    } else {
      e.target.classList.add("motelRoomClean") ;
      e.target.classList.remove("motelRoomClean") ;
    }
  }

  render() {
    return (
      <div className='motelRoom'>
        <h2 className="motelRoom">Motel Rooms</h2>
          <button type="button" className="motelRoomClean"  onClick= {this.cleanStatus}>101</button>
          <button type="button" className="motelRoomClean"  onClick= {this.cleanStatus}>102</button>
          <button type="button" className="motelRoomClean"  onClick= {this.cleanStatus}>103</button>
          <button type="button" className="motelRoomClean"  onClick= {this.cleanStatus}>104</button>
          <button type="button" className="motelRoomClean"  onClick= {this.cleanStatus}>201</button>
          <button type="button" className="motelRoomClean"  onClick= {this.cleanStatus}>202</button>
          <button type="button" className="motelRoomClean"  onClick= {this.cleanStatus}>203</button>
          <button type="button" className="motelRoomClean"  onClick= {this.cleanStatus}>204</button>
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
