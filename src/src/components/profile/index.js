import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Abilities } from '../abilities';
import { Classes } from '../classes';
import { nextAnimation, showIndicator } from '../../actions';

class InternalProfile extends Component {
  constructor(props) {
    super(props);
    this.wac = [];
    this.wao = [];
  }

  pleaseStartAnimation() {
    if (this.props.onload) {
      setTimeout(this.props.nextAnimation, 1000);
    }
  }

  componentDidMount() {
    if (this.props.load === true) {
      this.pleaseStartAnimation();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.load === false && this.props.load === true) {
      this.pleaseStartAnimation();
    }
  }

  wrapAnimation(idx, count, o, oC) {
    this.wao[idx] = this.wao[idx] || [];
    this.wao[idx][o] = (this.wao[idx][o] || 0) + 1;
    if (this.wao[idx][o] < oC) {
      return;
    }

    this.wac[idx] = (this.wac[idx] || 0) + 1;
    if (this.wac[idx] >= count) {
      this.props.nextAnimation();
    }
  }

  render() {
    const { animations } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4">
            <div className="d-flex profile">
              <h1 className={`first-title align-self-start ani ${animations[0] ? '' : 'fade-in-right'}`}
                onTransitionEnd={e => this.wrapAnimation(0, 2, 0, 2)}>曹力升</h1>
              <h6 className={`first-title badge badge-warning ml-auto align-self-end ani ${animations[0] ? '' : 'fade-in-left'}`}
                onTransitionEnd={e => this.wrapAnimation(0, 2, 1, 2)}>中南大学2013年毕业生</h6>
            </div>
            <div className={`abilities-wrapper ani ${animations[1] ? '' : 'fade-in'}`}
              onTransitionEnd={e => this.wrapAnimation(1, 1, 0, 1)}>
              <Abilities />
            </div>
            <div className="leetcode-wrapper mid box">
              <span className={`leetcode ani ${animations[2] ? '' : 'fade-in'}`}
                onTransitionEnd={e => this.wrapAnimation(2, 1, 0, 1)}><a href="https://leetcode.com/">LeetCode</a>进度</span>
              <span className={`badge easy ani ${animations[3] ? '' : 'fade-in'}`}
                onTransitionEnd={e => this.wrapAnimation(3, 1, 0, 1)}>Easy 17</span>
              <span className={`badge medium ani ${animations[4] ? '' : 'fade-in'}`}
                onTransitionEnd={e => this.wrapAnimation(4, 1, 0, 1)}>Medium 4</span>
              <span className={`badge hard ani ${animations[5] ? '' : 'fade-in'}`}
                onTransitionEnd={this.props.showPager}>Hard 0</span>
            </div>
          </div>
          <div className={`d-none d-xl-block col-xl-8 ani ${animations[2] ? '' : 'fade-in-up'}`}>
            <h3 className="class-record-title">我的成绩单</h3>
            <div className="table-responsive class-record-wrapper">
              <Classes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Profile = connect(
  (store) => ({
    onload: store.indicators.load,
    animations: store.animations.profile || []
  }),
  (dispatch) => ({
    nextAnimation: () => dispatch(nextAnimation('profile')),
    showPager: () => dispatch(showIndicator('demonstrations', 'pager', 'pagerHandles'))
  })
)(InternalProfile);

export { Profile };