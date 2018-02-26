import './index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { nextAnimation, showIndicator } from '../../actions';
import { wrapAnimation } from '../../utils';

class InternalTechTree extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: -2 };
    this.nextAnimation = this.nextAnimation.bind(this);
    this.showPager = this.showPager.bind(this);
  }

  pleaseStartAnimation() {
    if (this.props.onload) {
      setTimeout((this.props.nextAnimation), 1000);
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
    const { focused } = this.state;
    return (
      <div className="container tech-tree-wrapper">
        <div className="row tech-tree-wrapper">
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'fade-in'} ${animations[1] ? '' : 'trans'} ${focused === 1 ? 'focused' : ''}`}
            onClick={e => { if (focused >= 0) this.setState({ focused: focused <= 0 ? 1 : 0 }); }}
            onTransitionEnd={e => { if (focused === -2) wrapAnimation('techtree', 0, 4, 0, 1, this.nextAnimation) }}>
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 0, 1, this.showPager) }}></div>
            <div className="vertical ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 1, 1, this.showPager) }}></div>
            <span className="badge badge-warning">前端</span>
          </div>
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'fade-in'} ${animations[1] ? '' : 'trans'} ${focused === 2 ? 'focused' : ''}`}
            onClick={e => { if (focused >= 0) this.setState({ focused: focused <= 0 ? 2 : 0 }); }}
            onTransitionEnd={e => { if (focused === -2) wrapAnimation('techtree', 0, 4, 1, 1, this.nextAnimation) }}>
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 2, 1, this.showPager) }}></div>
            <div className="vertical ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 3, 1, this.showPager) }}></div>
            <span className="badge badge-warning">后端</span>
          </div>
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'fade-in'} ${animations[1] ? '' : 'trans'} ${focused === 3 ? 'focused' : ''}`}
            onClick={e => { if (focused >= 0) this.setState({ focused: focused <= 0 ? 3 : 0 }); }}
            onTransitionEnd={e => { if (focused === -2) wrapAnimation('techtree', 0, 4, 2, 1, this.nextAnimation) }}>
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 4, 1, this.showPager) }}></div>
            <div className="vertical ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 5, 1, this.showPager) }}></div>
            <span className="badge badge-warning">运维</span>
          </div>
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'fade-in'} ${animations[1] ? '' : 'trans'} ${focused === 4 ? 'focused' : ''}`}
            onClick={e => { if (focused >= 0) this.setState({ focused: focused <= 0 ? 4 : 0 }); }}
            onTransitionEnd={e => { if (focused === -2) wrapAnimation('techtree', 0, 4, 3, 1, this.nextAnimation) }}>
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 6, 1, this.showPager) }}></div>
            <div className="vertical ft line" onTransitionEnd={e => { if (focused === -1) wrapAnimation('techtree', 1, 8, 7, 1, this.showPager) }} ></div>
            <span className="badge badge-warning">管理</span>
          </div>
        </div>
      </div >
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