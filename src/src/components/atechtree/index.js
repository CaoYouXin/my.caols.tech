import './index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class AInternalTechTree extends Component {
  render() {
    const { focused, width, height, trees } = this.props;
    return (
      <div>
        {
          !trees[focused] ? <div /> :
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
              <g fill="#61DAFB">
                <text x="0" y="20">{focused}</text>
                <text x="0" y="40">{width}</text>
                <text x="0" y="60">{height}</text>
              </g>
            </svg>
        }
      </div>
    );
  }
}

const ATechTree = connect(
  (store) => ({
    trees: store.techtrees
  })
)(AInternalTechTree);

export { ATechTree };