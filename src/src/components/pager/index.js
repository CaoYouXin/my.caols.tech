import './index.css';

import Next from './next.png';
import Prev from './pre.png';

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import throttle from 'lodash/throttle';

import {
  toggleIndicator,
  showIndicator,
  hideIndicator,
  nextFrame,
  prevFrame,
  sceneUpdatePercentage,
  sceneStartMoving,
  sceneEndMoving
} from '../../actions';

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
    this.props.startMoving();

    this.percentage = 0;
    this.props.updatePercentage(this.percentage);

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

    this.percentage = Math.abs(this.endPoint - this.startPoint) * 100 / this.client.clientWidth;
    this.props.updatePercentage(this.percentage);
    console.log('moving total', this.client.clientWidth, 'at', this.endPoint, 'so', this.percentage.toFixed(2), '%');
  }

  end() {
    this.paging = false;
    this.props.endMoving();

    if (this.tapBottom) {
      if (!!this.lastHandled && performance.now() - this.lastHandled < 100) {
        const dx = Math.abs(this.endPoint - this.startPoint);
        const dy = Math.abs(this.endPointY - this.startPointY);
        if (dx * dx + dy * dy < 100) {
          this.props.hideIndicator();
          this.props.hidePagerSelf();
          this.props.showPagerIndicator();
          console.log('tap success');
          return false;
        }
      }
    }

    if ((this.endPoint > this.startPoint) !== this.toTheRight) {
      this.props.showIndicator();
      console.log('imposible', 'sending ZERO');
      return;
    }

    if (this.percentage < 36) {
      this.props.showIndicator();
      console.log('end', 'BUT not enough', 'sending ZERO');
      return;
    }

    this.props.hidePagerSelf();
    this.props.hideIndicator();
    if (!this.toTheRight) {
      this.props.nextFrame();
    } else {
      this.props.prevFrame();
    }
    console.log('end', 'go to the', this.toTheRight ? 'RIGHT' : 'LEFT', 'end');
  }

  render() {
    return (
      <div className={`${this.props.show ? 'd-block' : 'd-none'}`}>
        <div className="pager working right bottom box"
          ref={elem => { this.client = elem; }}
          // onMouseDown={e => this.start([{ clientX: e.clientX, clientY: e.clientY }])}
          // onMouseMove={e => this.moving([{ clientX: e.clientX, clientY: e.clientY }])}
          // onMouseUp={e => this.end()}
          onTouchStart={e => this.start(e.touches)}
          onTouchMove={e => this.moving(e.touches)}
          onTouchEnd={e => this.end()}>
        </div>
        <div className="next mid box working">
          <img src={Next} alt="Next" onClick={e => {
            this.props.hidePagerSelf();
            this.props.hideIndicator();
            this.props.nextFrame();
          }} />
        </div>
        <div className="pre mid box working">
          <img src={Prev} alt="Prev" onClick={e => {
            this.props.hidePagerSelf();
            this.props.hideIndicator();
            this.props.prevFrame();
          }} />
        </div>
      </div>
    )
  }
}

const Pager = connect(
  (store) => ({
    show: store.indicators.pager
  }),
  (dispatch) => ({
    toggleIndicator: () => dispatch(toggleIndicator('all')),
    showIndicator: () => dispatch(showIndicator('all')),
    hideIndicator: () => dispatch(hideIndicator('all')),
    nextFrame: () => dispatch(nextFrame('g')),
    prevFrame: () => dispatch(prevFrame('g')),
    updatePercentage: (percentage) => dispatch(sceneUpdatePercentage('g', percentage)),
    startMoving: () => dispatch(sceneStartMoving('g')),
    endMoving: () => dispatch(sceneEndMoving('g')),
    hidePagerSelf: () => dispatch(hideIndicator('pager')),
    showPagerIndicator: () => dispatch(showIndicator('showPager'))
  })
)(InternalPager);

export { Pager };