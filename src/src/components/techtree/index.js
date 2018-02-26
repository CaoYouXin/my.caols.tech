import './index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { nextAnimation, showIndicator } from '../../actions';
import { wrapAnimation } from '../../utils';

class InternalTechTree extends Component {
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

  render() {
    const { animations, showPager } = this.props;
    return (
      <div className="container tech-tree-wrapper">
        <div className="row tech-tree-wrapper">
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'trans'}`}
            onClick={e => { }}
            onTransitionEnd={e => wrapAnimation('techtree', 0, 4, 0, 1, showPager)} >
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft ani line"></div>
            <div className="vertical ft ani line"></div>
            <span className="badge badge-warning">前端</span>
          </div>
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'trans'}`}
            onClick={e => { }}
            onTransitionEnd={e => wrapAnimation('techtree', 0, 4, 1, 1, showPager)} >
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft ani line"></div>
            <div className="vertical ft ani line"></div>
            <span className="badge badge-warning">后端</span>
          </div>
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'trans'}`}
            onClick={e => { }}
            onTransitionEnd={e => wrapAnimation('techtree', 0, 4, 2, 1, showPager)} >
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft ani line"></div>
            <div className="vertical ft ani line"></div>
            <span className="badge badge-warning">运维</span>
          </div>
          <div className={`col-6 tech-tree mid box ${animations[0] ? '' : 'trans'}`}
            onClick={e => { }}
            onTransitionEnd={e => wrapAnimation('techtree', 0, 4, 3, 1, showPager)} >
            <div className="horizontal bg line"></div>
            <div className="vertical bg line"></div>
            <div className="horizontal ft ani line"></div>
            <div className="vertical ft ani line"></div>
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