import './index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { nextAnimation, showIndicator } from '../../actions';
import { wrapAnimation } from '../../utils';

import { ATechTree } from '../atechtree';

class InternalTechTree extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: -2, w: 0, h: 0 };
    this.nextAnimation = this.nextAnimation.bind(this);
    this.showPager = this.showPager.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  pleaseStartAnimation() {
    if (this.props.onload) {
      setTimeout((this.props.nextAnimation), 1000);
    }
  }

  updateDimensions(focused) {
    if (typeof focused === "number") {
      this.setState({ focused, w: this.containerElem.offsetWidth, h: this.containerElem.offsetHeight });
    } else {
      setTimeout((self) => self.setState({ w: self.containerElem.offsetWidth, h: self.containerElem.offsetHeight }), 618, this);
    }
  }

  componentDidMount() {
    if (this.props.load === true) {
      this.pleaseStartAnimation();
    }

    if ('onorientationchange' in window) {
      window.addEventListener("orientationchange", this.updateDimensions, false);
    } else if ('onresize' in window) {
      window.addEventListener("resize", this.updateDimensions, false);
    }
  }

  componentWillUnmount() {
    if ('onorientationchange' in window) {
      window.removeEventListener("orientationchange", this.updateDimensions);
    } else if ('onresize' in window) {
      window.removeEventListener("resize", this.updateDimensions);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.load === false && this.props.load === true) {
      this.pleaseStartAnimation();
    }
  }

  nextAnimation() {
    this.setState({ focused: -1 });
    this.props.nextAnimation();
  }

  showPager() {
    this.props.showPager();
    this.setState({ focused: 0 });
  }

  render() {
    const { animations } = this.props;
    const { focused, w, h } = this.state;
    return (
      <div className="container tech-tree-wrapper" ref={elem => { this.containerElem = elem; }}>
        <div className="row tech-tree-wrapper">
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'fade-in'} ${animations[1] ? '' : 'trans'} ${focused === 1 ? 'focused' : ''}`}
            onClick={e => { if (focused >= 0) this.updateDimensions(focused <= 0 ? 1 : 0); }}
            onTransitionEnd={e => { if (focused === -2) wrapAnimation('techtree', 0, 4, 0, 1, this.nextAnimation) }}>
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 0, 1, this.showPager) }}></div>
            <div className="vertical ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 1, 1, this.showPager) }}></div>
            <span className="badge badge-warning">前端</span>
          </div>
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'fade-in'} ${animations[1] ? '' : 'trans'} ${focused === 2 ? 'focused' : ''}`}
            onClick={e => { if (focused >= 0) this.updateDimensions(focused <= 0 ? 2 : 0); }}
            onTransitionEnd={e => { if (focused === -2) wrapAnimation('techtree', 0, 4, 1, 1, this.nextAnimation) }}>
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 2, 1, this.showPager) }}></div>
            <div className="vertical ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 3, 1, this.showPager) }}></div>
            <span className="badge badge-warning">后端</span>
          </div>
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'fade-in'} ${animations[1] ? '' : 'trans'} ${focused === 3 ? 'focused' : ''}`}
            onClick={e => { if (focused >= 0) this.updateDimensions(focused <= 0 ? 3 : 0); }}
            onTransitionEnd={e => { if (focused === -2) wrapAnimation('techtree', 0, 4, 2, 1, this.nextAnimation) }}>
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 4, 1, this.showPager) }}></div>
            <div className="vertical ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 5, 1, this.showPager) }}></div>
            <span className="badge badge-warning">运维</span>
          </div>
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'fade-in'} ${animations[1] ? '' : 'trans'} ${focused === 4 ? 'focused' : ''}`}
            onClick={e => { if (focused >= 0) this.updateDimensions(focused <= 0 ? 4 : 0); }}
            onTransitionEnd={e => { if (focused === -2) wrapAnimation('techtree', 0, 4, 3, 1, this.nextAnimation) }}>
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 6, 1, this.showPager) }}></div>
            <div className="vertical ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 7, 1, this.showPager) }} ></div>
            <span className="badge badge-warning">管理</span>
          </div>
        </div>
        <div className={`atechtree ${focused > 0 ? 'show' : ''}`}>
          <ATechTree focused={focused} width={w} height={h} />
        </div>
      </div>
    );
  }
}

const TechTree = connect(
  (store) => ({
    onload: store.indicators.load,
    animations: store.animations.techtree || []
  }),
  (dispatch) => ({
    nextAnimation: () => dispatch(nextAnimation('techtree')),
    showPager: () => dispatch(showIndicator('demonstrations', 'pager', 'pagerHandles'))
  })
)(InternalTechTree);

export { TechTree };