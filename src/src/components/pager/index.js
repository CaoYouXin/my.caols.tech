import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleIndicator, showIndicator, hideIndicator } from '../../actions';
// import throttle from 'lodash/throttle';

class InternalPager extends Component {
  // constructor(props) {
  //   super(props);
  //   this.movingThrottle = throttle(this.moving, 72);
  // }

  start(touches) {
    if (touches.length !== 1) {
      console.log('not right');
      return;
    }

    this.paging = true;
    this.props.hideIndicator();

    this.endPoint = this.startPoint = touches[0].clientX;
    this.toTheRight = this.startPoint < this.client.clientWidth / 2;
    this.endPointY = this.startPointY = touches[0].clientY;
    this.tapBottom = this.startPointY > this.client.clientHeight * 2 / 3;
    this.lastHandled = performance.now();
    console.log('start total', this.client.clientWidth, 'at', this.startPoint, 'to the', this.toTheRight ? 'right' : 'left', 'tap bottom', this.tapBottom ? 'y' : 'n');
  }

  moving(touches) {
    if (!this.paging) {
      return;
    }

    if (!!this.lastHandled && performance.now() - this.lastHandled < 72) {
      return;
    }
    this.lastHandled = performance.now();

    if (touches.length !== 1) {
      console.log('end early');
      this.end();
      return;
    }

    this.endPoint = touches[0].clientX;
    this.endPointY = touches[0].clientY;
    if ((this.endPoint > this.startPoint) !== this.toTheRight) {
      this.props.showIndicator();
      console.log('imposible', 'sending ZERO');
      return;
    }

    this.props.hideIndicator();
    console.log('moving total', this.client.clientWidth, 'at', this.endPoint, 'so',
      (Math.abs(this.endPoint - this.startPoint) * 100 / this.client.clientWidth).toFixed(2), '%');
  }

  end() {
    this.paging = false;

    if (this.tapBottom) {
      if (!!this.lastHandled && performance.now() - this.lastHandled < 100) {
        const dx = Math.abs(this.endPoint - this.startPoint);
        const dy = Math.abs(this.endPointY - this.startPointY);
        if (dx * dx + dy * dy < 100) {
          this.props.hideIndicator();
          console.log('tap success');
          return;
        }
      }
    }

    if ((this.endPoint > this.startPoint) !== this.toTheRight) {
      this.props.showIndicator();
      console.log('imposible', 'sending ZERO');
      return;
    }

    if (Math.abs(this.endPoint - this.startPoint) < this.client.clientWidth / 2) {
      this.props.showIndicator();
      console.log('end', 'BUT not enough', 'sending ZERO');
      return;
    }

    console.log('end', 'go to the', this.toTheRight ? 'RIGHT' : 'LEFT', 'end');
  }

  render() {
    return (
      <div className="pager working"
        ref={elem => { this.client = elem; }}
        onTouchStart={e => this.start(e.touches)}
        onTouchEnd={e => this.end()}
        onTouchMove={e => this.moving(e.touches)}>
      </div>
    )
  }
}

const Pager = connect(
  null,
  (dispatch) => ({
    toggleIndicator: () => dispatch(toggleIndicator('all')),
    showIndicator: () => dispatch(showIndicator('all')),
    hideIndicator: () => dispatch(hideIndicator('all'))
  })
)(InternalPager);

export { Pager };