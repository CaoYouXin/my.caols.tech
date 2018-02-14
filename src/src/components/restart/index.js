import './index.css';

import ReStartImage from './restart.png';

import React, { Component } from 'react';

class InternalRestart extends Component {
  render() {
    return (
      <div className="restart mid box">
        <img src={ReStartImage} alt="ReStart" onClick={e => {
          window.localStorage.clear();
          window.location.reload();
        }} />
      </div>
    );
  }
}

const Restart = InternalRestart;

export { Restart };