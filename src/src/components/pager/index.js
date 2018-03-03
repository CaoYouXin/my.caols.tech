import './index.css';

import Next from './next.png';
import Pause from './pause.png';
import Play from './play.png';

import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  start(touches) {
    if (touches.length !== 1) {
      // console.log('not right');
      return;
    }

    this.paging = true;
    this.props.hideDemonstrations();
    this.props.startMoving();

    this.percentage = 0;
    this.props.updatePercentage(this.percentage);

    this.endPoint = this.startPoint = touches[0].clientX;
    this.toTheRight = this.startPoint < this.client.clientWidth / 2;
    this.endPointY = this.startPointY = touches[0].clientY;
    this.tapBottom = this.startPointY > this.client.clientHeight * 2 / 3;
    this.lastHandled = performance.now();
    // console.log('start total', this.client.clientWidth, 'at', this.startPoint, 'to the', this.toTheRight ? 'right' : 'left', 'tap bottom', this.tapBottom ? 'y' : 'n');
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
      // console.log('end early');
      this.end();
      return;
    }

    this.endPoint = touches[0].clientX;
    this.endPointY = touches[0].clientY;
    if ((this.endPoint > this.startPoint) !== this.toTheRight) {
      // console.log('imposible', 'sending ZERO');
      this.end();
      return;
    }

    this.percentage = Math.abs(this.endPoint - this.startPoint) * 100 / this.client.clientWidth;
    if (!this.toTheRight) {
      this.props.updatePercentage(this.percentage);
    }
    // console.log('moving total', this.client.clientWidth, 'at', this.endPoint, 'so', this.percentage.toFixed(2), '%');
  }

  end() {
    this.paging = false;
    this.props.endMoving();

    if ((this.endPoint > this.startPoint) !== this.toTheRight) {
      this.props.showDemonstrations();
      // console.log('imposible', 'sending ZERO');
      return;
    }

    if (this.percentage < 36) {
      this.props.showDemonstrations();
      // console.log('end', 'BUT not enough', 'sending ZERO');
      return;
    }

    if (!this.toTheRight) {
      this.props.nextFrame();
    } else {
      this.props.showDemonstrations();
    }
    // console.log('end', 'go to the', this.toTheRight ? 'RIGHT' : 'LEFT', 'end');
  }

  render() {
    return (
      <div className={`${this.props.showPager ? 'd-block' : 'd-none'}`}>
        <div className={`${this.props.showHandles ? 'd-block' : 'd-none'}`}>
          <div className="for-small pager"
            ref={elem => { this.client = elem; }}
            onTouchStart={e => this.start(e.touches)}
            onTouchMove={e => this.moving(e.touches)}
            onTouchEnd={e => this.end()}>
          </div>
          <div className="for-large next mid box">
            <img src={Next} alt="Next" onClick={e => {
              this.props.hideDemonstrations();
              this.props.nextFrame();
            }} />
          </div>
        </div>
        <div className="play-pause mid box">
          <img src={this.props.showHandles ? Pause : Play} alt="Next" onClick={this.props.togglePagerHandles} />
        </div>
      </div>
    )
  }
}

const Pager = connect(
  (store) => ({
    showPager: store.indicators.pager,
    showHandles: store.indicators.pagerHandles
  }),
  (dispatch) => ({
    showDemonstrations: () => dispatch(showIndicator('demonstrations')),
    hideDemonstrations: () => dispatch(hideIndicator('demonstrations')),
    nextFrame: () => dispatch(nextFrame('g')),
    prevFrame: () => dispatch(prevFrame('g')),
    updatePercentage: (percentage) => dispatch(sceneUpdatePercentage('g', percentage)),
    startMoving: () => dispatch(sceneStartMoving('g')),
    endMoving: () => dispatch(sceneEndMoving('g')),
    togglePagerHandles: () => dispatch(toggleIndicator('demonstrations', 'pagerHandles'))
  })
)(InternalPager);

export { Pager };