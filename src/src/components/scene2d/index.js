import './index.css';
import React, { Component } from 'react';

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

const scene2dFrame = (WrappedComponent, props) => {
  class Frame extends Component {
    render() {
      return (
        <li><WrappedComponent {...props} /></li>
      );
    }
  }
  return Frame;
}

export { Scene2d, scene2dFrame };