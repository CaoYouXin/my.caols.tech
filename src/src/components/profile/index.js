import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Classes } from '../classes';
import { nextAnimation, showIndicator } from '../../actions';

class InternalProfile extends Component {
  constructor(props) {
    super(props);

    this.frame1Start = this.frame1Start.bind(this);
    this.frame2Start = this.frame2Start.bind(this);
  }

  pleaseStartAnimation() {
    if (this.props.onload) {
      setTimeout(this.frame1Start, 1000);
    }
  }

  frame1Start() {
    this.props.nextAnimation();
    setTimeout(this.frame2Start, 1000);
  }

  frame2Start() {
    this.props.nextAnimation();
    setTimeout(this.props.showPager, 1000);
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
    const { animations } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4">
            <div className="d-flex profile">
              <h1 className={`first-title align-self-start ani ${animations[0] ? '' : 'fade-in-right'}`}>曹力升</h1>
              <h6 className={`first-title badge badge-warning ml-auto align-self-end ani ${animations[0] ? '' : 'fade-in-left'}`}>中南大学2013年毕业生</h6>
            </div>
          </div>
          <div className={`d-none d-xl-block col-xl-8 ani ${animations[1] ? '' : 'fade-in-up'}`}>
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