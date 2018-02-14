import './index.css';
import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <div className="test" style={{
        backgroundColor: this.props.bgColor
      }}></div>
    );
  }
}

export { Test };