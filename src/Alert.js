import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import AlertContainer from 'react-alert';

class Alert extends Component{
  constructor(props){
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  
  goodPerformanceAlert(){
    this.msg.show('This keeper is on fire!', {
      time: 2000,
      type: 'success',
      icon: <img src="path/to/some/img/32x32.png" />
    });
  }

  badPerformanceAlert(){
    this.msg.error('This keeper needs more training!', {
      time: 2000,
      type: 'success',
      icon: <img src="path/to/some/img/32x32.png" />
    });
  }


  render(){
    return(
      <div>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

      </div>
    );
  }
}

export default Alert;
