import './index.css';

import Hand from './hand-up.png';
import Next from './next.png';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class InternalDemonstrations extends Component {
  render() {
    return (
      <div className={`${this.props.show ? 'd-block' : 'd-none'}`}>
        <div className="for-large demonstration mid box">
          <img className="next-img" src={Next} alt="Next" />
        </div>
        <div className="demonstration mid box">
          <img className="hand-img" src={Hand} alt="Hand" />
        </div>
      </div>
    );
  }
}

const Demonstrations = connect(
  (store) => ({
    show: store.indicators.demonstrations
  })
)(InternalDemonstrations);

export { Demonstrations };