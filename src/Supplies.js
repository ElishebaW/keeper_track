import React, { Component } from 'react';



class Supplies extends Component {
enlargeVacuumButton () {
  var enlargeVacuumButton = document.getElementById("Vacuum")
  if (enlargeVacuumButton.style.fontSize === "inherit") {
    enlargeVacuumButton.style.fontSize = "15px";
    } else {
    enlargeVacuumButton.style.fontSize = "inherit";
  }
}

enlargeSoapButton () {
    var x = document.getElementById('Soap')
    if (x.style.fontSize === "inherit") {
          x.style.fontSize = "15px";
      } else {
          x.style.fontSize = "inherit";
    }
  }

enlargeTowelsButton() {
    var x = document.getElementById('Towels')
    if (x.style.fontSize === "inherit") {
          x.style.fontSize = "15px";
      } else {
          x.style.fontSize = "inherit";
    }
  }

enlargeLotionButton () {
    var x = document.getElementById('Lotion')
    if (x.style.fontSize === "inherit") {
          x.style.fontSize = "15px";
      } else {
          x.style.fontSize = "inherit";
    }
  }

render (){
    return(
    <ul>
      <button type='button' id='Vacuum' onClick={this.enlargeVacuumButton}>Vacuum</button>
      <button type='button' id='Soap' onClick={this.enlargeSoapButton}>Soap</button>
      <button type='button' id='Towels' onClick={this.enlargeTowelsButton}>Towels</button>
      <button type='button' id='Lotion' onClick={this.enlargeLotionButton}>Lotion</button>
    </ul>
  )
  }
};

export default Supplies;
