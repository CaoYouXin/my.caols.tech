import './index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { countWidth } from '../../utils';

class AInternalTechTree extends Component {
  render() {
    const { focused, width, height, trees } = this.props;
    const { from, to, lines } = trees[focused] || { from: [], to: [], lines: [] };
    const landscape = width > height;
    const maxFromLen = from.map(f => countWidth(f, "normal 16px arial")).reduce((c, p) => c < p ? p : c, 0);
    const maxToLen = to.map(t => countWidth(t, "normal 16px arial")).reduce((c, p) => c < p ? p : c, 0);
    const maxWidth = ((maxFromLen > maxToLen ? maxFromLen : maxToLen) + 100 + (landscape ? 0 : 40)) * 2;
    const maxHeight = (from.length > to.length ? from.length : to.length) * 40 + (landscape ? 0 : (maxFromLen + maxToLen));
    const viewWidth = landscape ? (width > maxWidth ? width : maxWidth) : (width > maxHeight ? width : maxHeight);
    const viewHeight = landscape ? (height > maxHeight ? height : maxHeight) : (height > maxWidth ? height : maxWidth);
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${viewWidth} ${viewHeight}`}>
        <g transform={`translate(${viewWidth / 2}, 0) rotate(${landscape ? 0 : -90}, 0, ${viewHeight / 2})`}>
          <g transform={`translate(-${maxFromLen / 2 + 100}, 0)`}>
            {
              from.map((f, i) => {
                const midY = (i + 0.5 - from.length / 2) * 40 + viewHeight / 2;
                return (
                  <g key={f} transform={`rotate(${landscape ? 0 : 20}, ${maxFromLen / 2 + 25}, ${midY})`}>
                    <rect x={(0 - maxFromLen - 50) / 2} y={midY - 15}
                      width={maxFromLen + 50} height="30" fill="gold" />
                    <text textAnchor="middle" alignmentBaseline="central" dominantBaseline="central"
                      fontFamily="arial" fontSize="16px" fill="#333" x="0" y={midY}>{f}</text>
                  </g>
                );
              })
            }
          </g>
          <g transform={`translate(${maxToLen / 2 + 100}, 0)`}>
            {
              to.map((t, i) => {
                const midY = (i + 0.5 - to.length / 2) * 40 + viewHeight / 2;
                return (
                  <g key={t} transform={`rotate(${landscape ? 0 : 20}, -${maxToLen / 2 + 25}, ${midY}) `}>
                    <rect x={(0 - maxToLen - 50) / 2} y={midY - 15}
                      width={maxToLen + 50} height="30" fill="cyan" />
                    <text textAnchor="middle" alignmentBaseline="central" dominantBaseline="central"
                      fontFamily="arial" fontSize="16px" fill="#333" x="0" y={midY}>{t}</text>
                  </g>
                );
              })
            }
          </g>
          <g className="a-tech-tree-line">
            {
              lines.map(line => {
                const midY1 = (line[0] + 0.5 - from.length / 2) * 40 + viewHeight / 2;
                const midY2 = (line[1] + 0.5 - to.length / 2) * 40 + viewHeight / 2;
                return (<line key={`${line[0]} - ${line[1]}`}
                  x1="-75" x2="75" y1={midY1} y2={midY2}
                  stroke="goldenrod" strokeWidth="1.618" />);
              })
            }
          </g>
        </g>
      </svg>
    );
  }
}

const ATechTree = connect(
  (store) => ({
    trees: store.techtrees
  })
)(AInternalTechTree);

export { ATechTree };