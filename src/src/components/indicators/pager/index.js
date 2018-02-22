import '../index.css';
import './index.css';

import Hand from './hand-up.png';
import FingerDown from './finger-down.png';
import FingerUp from './finger-up.png';
import Next from './next.png';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showIndicator, hideIndicator } from '../../../actions';

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
            <img src={FingerDown} alt="Hand" />
            <p className="indicator-text">轻击下部关闭,稍后可重新打开</p>
          </div>
        </div>
        <div className={`for-small indicator bottom box ${this.props.showPager ? 'show' : ''}`}>
          <div className="static-bottom" onTouchStart={e => this.props.showPagerAll()}>
            <img src={FingerUp} alt="Hand" />
            <p className="indicator-text">轻击图标打开,稍后可关闭</p>
          </div>
        </div>
      </div>
    );
  }
}

const PagerIndicator = connect(
  (store) => ({
    show: store.indicators.all,
    showPager: store.indicators.showPager
  }),
  (dispatch) => ({
    showPagerAll: () => {
      dispatch(showIndicator('all', 'pager'));
      dispatch(hideIndicator('showPager'));
      console.log('show pager all');
    }
  })
)(InternalPagerIndicator);

export { PagerIndicator };