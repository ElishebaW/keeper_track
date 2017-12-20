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
      return(
      <ul>
        <button type='button' className = 'smallButton' onClick={this.changeButtonSize}>Vacuum</button>
        <button type='button'className = 'smallButton' onClick={this.changeButtonSize}>Soap</button>
        <button type='button' className = 'smallButton' onClick={this.changeButtonSize}>Towels</button>
        <button type='button' className = 'smallButton' onClick={this.changeButtonSize}>Lotion</button>
      </ul>
    )
  }
}
export default Supplies;
