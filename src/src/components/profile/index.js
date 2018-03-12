import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Abilities } from '../abilities';
import { Classes } from '../classes';
import { nextAnimation, showIndicator } from '../../actions';
import { wrapAnimation } from '../../utils';

class InternalProfile extends Component {
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

  render() {
    const { animations, nextAnimation } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4">
            <div className="d-flex profile">
              <h1 className={`first-title align-self-start ani ${animations[0] ? '' : 'fade-in-right'}`}
                onTransitionEnd={e => wrapAnimation('profile', 0, 2, 0, 2, nextAnimation)}>曹力升</h1>
              <h6 className={`first-title badge badge-warning ml-auto align-self-end ani ${animations[0] ? '' : 'fade-in-left'}`}
                onTransitionEnd={e => wrapAnimation('profile', 0, 2, 1, 2, nextAnimation)}>中南大学2013年毕业生</h6>
            </div>
            <div className={`abilities-wrapper ani ${animations[1] ? '' : 'fade-in'}`}
              onTransitionEnd={e => wrapAnimation('profile', 1, 1, 0, 1, nextAnimation)}>
              <Abilities />
            </div>
            <div className="leetcode-wrapper mid box">
              <span className={`leetcode badge ani ${animations[2] ? '' : 'fade-in'}`}
                onTransitionEnd={e => wrapAnimation('profile', 2, 1, 0, 1, nextAnimation)}><a href="https://leetcode.com/">LeetCode</a> Solved</span>
              <span className={`badge easy ani ${animations[3] ? '' : 'fade-in'}`}
                onTransitionEnd={e => wrapAnimation('profile', 3, 1, 0, 1, nextAnimation)}>Easy 87</span>
              <span className={`badge medium ani ${animations[4] ? '' : 'fade-in'}`}
                onTransitionEnd={e => wrapAnimation('profile', 4, 1, 0, 1, nextAnimation)}>Medium 8</span>
              <span className={`badge hard ani ${animations[5] ? '' : 'fade-in'}`}
                onTransitionEnd={this.props.showPager}>Hard 0</span>
            </div>
          </div>
          <div className={`d-none d-xl-block col-xl-8 ani ${animations[5] ? '' : 'fade-in-up'}`}>
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