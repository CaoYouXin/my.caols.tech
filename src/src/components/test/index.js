import React, { Component } from 'react';
import './index.css';

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