import React, { Component } from 'react';



class Supplies extends Component {
  changeButtonSize(e) {
    if (e.target.className === "smallButton") {
      e.target.classList.add("largeButton");
      e.target.classList.remove("smallButton");
      } else {
      e.target.classList.add("smallButton");
      e.target.classList.remove("largeButton");
    }
  }

  render (){
    let suppliesText = "Supplies Needed"
      return(
        <div>
        <div>
        <input
        className="room-control"
        placeholder="Room #"
        onChange={event => this.setState({room: event.target.value})}/>
        <p>{suppliesText}</p>
       </div>
       <div>
      <ul>
        <button type='button' className = 'smallButton' onClick={this.changeButtonSize}>Vacuum</button>
        <button type='button'className = 'smallButton' onClick={this.changeButtonSize}>Soap</button>
        <button type='button' className = 'smallButton' onClick={this.changeButtonSize}>Towels</button>
        <button type='button' className = 'smallButton' onClick={this.changeButtonSize}>Lotion</button>
      </ul>
     </div>
     </div>
    )
  }
}
export default Supplies;
