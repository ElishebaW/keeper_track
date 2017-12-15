import React, { Component } from 'react';
import './App.css';


class Keeper extends Component {
  constructor(props) {
   super(props);
   this.state = {
     room: '',
     showRoom: true
   }
 }


hideRoom101() {
  var x = document.getElementById("HotelRoom-101")
  if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
hideRoom102() {
  var x = document.getElementById("HotelRoom-102")
  if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
hideRoom103() {
  var x = document.getElementById("HotelRoom-103")
  if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
hideRoom104() {
  var x = document.getElementById("HotelRoom-104")
  if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
hideRoom201() {
  var x = document.getElementById("HotelRoom-201")
  if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
hideRoom202() {
  var x = document.getElementById("HotelRoom-202")
  if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

hideRoom203() {
  var x = document.getElementById("HotelRoom-203")
  if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


hideRoom204() {
  var x = document.getElementById("HotelRoom-204")
  if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




  render() {
    return (
      <div className='HotelRoom'>
      <h2>Motel Rooms</h2>
      <button onClick={this.hideRoom101}>Check out</button>

      <button type="button" className="HotelRoom-101" id="HotelRoom-101">101</button>
        <button onClick={this.hideRoom102}>Check out</button>
      <button type="button" className="HotelRoom-102" id='HotelRoom-102' >102</button>
        <button onClick={this.hideRoom103}>Check out</button>
      <button type="button" className="HotelRoom-103"  id='HotelRoom-103'>103</button>
        <button onClick={this.hideRoom104}>Check out</button>
      <button type="button" className="HotelRoom-104" id='HotelRoom-104'>104</button>
        <button onClick={this.hideRoom201}>Check out</button>
      <button type="button" className="HotelRoom-201" id='HotelRoom-201'>201</button>
        <button onClick={this.hideRoom202}>Check out</button>
      <button type="button" className="HotelRoom-202" id='HotelRoom-202'>202</button>
        <button onClick={this.hideRoom203}>Check out</button>
      <button type="button" className="HotelRoom-203" id='HotelRoom-203'>203</button>
        <button onClick={this.hideRoom204}>Check out</button>
      <button type="button" className="HotelRoom-204" id='HotelRoom-204'>204</button>
      <div className="Keepers">
      <input
        className="room-control"
        placeholder="Room #"
        onChange={event => this.setState({room:event.target.value})}/>
      <button
       type="button"
       className="button-1"
       onClick={() => this.moveKeeper()}>
       1
      </button>
      <input
        className="room-control"
        placeholder="Room #"
        onChange={event => this.setState({room: event.target.value})}/>
      <button
      type="button"
      className="button-2">
      2
      </button>
      <input
        className="room-control"
        placeholder="Room #"
        onChange={event => this.setState({room: event.target.value})}/>
      <button
        type="button"
        className="button-3">
        3
       </button>
       <input
         className="room-control"
         placeholder="Room #"
         onChange={event => this.setState({room: event.target.value})}/>
       <button
        type="button"
        className="button-4">
          4
        </button>
      </div>
    </div>
    )
  }
}



export default Keeper;
