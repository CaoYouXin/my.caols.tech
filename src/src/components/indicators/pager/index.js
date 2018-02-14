import '../index.css';
import './index.css';

import Hand from './hand-up.png';
import Finger from './finger-down.png';
import Next from './next.png';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class InternalPagerIndicator extends Component {
  render() {
    return (
      <div>
        <div className={`for-large indicator mid box ${this.props.show ? 'show' : ''}`}>
          <img className="next-img" src={Next} alt="Next" />
        </div>
        <div className={`indicator mid box ${this.props.show ? 'show' : ''}`}>
          <img className="hand-img" src={Hand} alt="Hand" />
        </div>
        <div className={`for-small indicator bottom box ${this.props.show ? 'show' : ''}`}>
          <div className="static-bottom">
            <img src={Finger} alt="Hand" />
            <p className="indicator-text">轻击下部关闭,稍后可重新打开</p>
          </div>
        </div>
      </div>
    );
  }
}

const PagerIndicator = connect(
  (store) => ({
    show: store.indicators.all
  })
)(InternalPagerIndicator);

export { PagerIndicator };