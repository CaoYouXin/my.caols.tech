import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Scene2d extends Component {
  render() {
    return (
      <ul className="scene2d"
        style={this.props.location}>
        {this.props.children}
      </ul>
    );
  }
}

const scene2dFrame = (WrappedComponent, key, idx, color) => {
  class Frame extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log(nextProps, nextState);
    //   return true;
    // }

    render() {
      const { cur, moving, percentage } = this.props;
      return (
        <li className={`${idx < cur ? 'left' : ''} ${idx > cur ? 'right' : ''}`}
          style={
            moving ? {
              backgroundColor: color,
              transition: 'left 0s',
              left: `${((idx - cur) * 100 - percentage).toFixed(2)}%`
            } : {
                backgroundColor: color
              }
          }>
          <WrappedComponent {...this.props} load={idx === cur} />
        </li>
      );
    }
  }
  return connect(
    (store) => ({
      cur: store.scene2d[key].cur,
      moving: store.scene2d[key].moving && idx - store.scene2d[key].cur <= 1,
      percentage: store.scene2d[key].percentage
    })
  )(Frame);
}

export { Scene2d, scene2dFrame };