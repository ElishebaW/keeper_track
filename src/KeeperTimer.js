import React, { Component } from 'react';
import './App.css';

class KeeperTimer extends Component {
  constructor(props) {
   super(props);
   this.state = {date: new Date()};
   }

   componentDidMount() {

    }

    componentWillUnmount() {

    }
 startTime() {
   this.state.date.toLocaleTimeString();
}



 endTime() {

 }

render () {
  return (
  <button type='button' className='button-1'
    onClick={() => this.startTime()}>
  </button>
    )
  }

}

export default KeeperTimer;
