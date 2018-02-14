import '../index.css';
import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hand from './hand-up.png';
import Finger from './finger-down.png';

class InternalPagerIndicator extends Component {
  render() {
    return (
      <div>
        <div className={`indicator mid box ${this.props.show ? 'show' : ''}`}>
          <img className="moving-right-to-left" src={Hand} alt="Hand" />
        </div>
        <div className={`indicator bottom box ${this.props.show ? 'show' : ''}`}>
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