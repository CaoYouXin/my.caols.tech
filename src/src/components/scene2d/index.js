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

const scene2dFrame = (WrappedComponent, key, idx, props) => {
  class Frame extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log(nextProps, nextState);
    //   return true;
    // }

    render() {
      const { cur } = this.props;
      return (
        <li className={`${idx < cur ? 'left' : ''} ${idx > cur ? 'right' : ''}`}>
          <WrappedComponent {...props} />
        </li>
      );
    }
  }
  return connect(
    (store) => ({
      cur: store.scene2d[key].cur
    })
  )(Frame);
}

export { Scene2d, scene2dFrame };