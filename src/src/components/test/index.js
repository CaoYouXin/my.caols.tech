import './index.css';
import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: this.props.bgColor
      }}>
        <div className="container test mid box">
          <p>React supports a special attribute that you can attach to any component. The ref attribute can be a string or a callback function. When the ref attribute is a callback function, the function receives the underlying DOM element or class instance (depending on the type of element) as its argument. This allows you to have direct access to the DOM element or component instance.</p>
        </div>
      </div>
    );
  }
}

export { Test };