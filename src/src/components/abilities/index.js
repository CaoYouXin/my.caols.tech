import './index.css';

import React, { Component } from 'react';

class Abilities extends Component {
  constructor(props) {
    super(props);
    this.baseStroke = [200, 200, 50, 0.6];
  }

  toColor(i, size) {
    var x = 1 + (size - i) * 2 / size;
    return `rgba(${~~(this.baseStroke[0] / x)}, 
      ${~~(this.baseStroke[1] / x)}, 
      ${~~(this.baseStroke[2] / x)}, 
      ${this.baseStroke[3]})`;
  }

  render() {
    const sinThirdPI = Math.sin(Math.PI / 3);
    const cosThirdPI = Math.cos(Math.PI / 3);
    const rs = [100, 80, 60, 40, 20];
    const as = ['程序设计', '算法', '数据库', '编程框架', '单元测试', '英文'];
    const ps = [4.8, 3.6, 4, 4.5, 3.2, 4.5];
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300">
        <defs>
          <radialGradient id="exampleGradient">
            <stop offset="10%" stopColor="Indigo" />
            <stop offset={`${(86 / Math.sqrt(2)).toFixed(2)}%`} stopColor="DeepSkyBlue" />
            <stop offset={`${(98 / Math.sqrt(2)).toFixed(2)}%`} stopColor="#eee" />
            <stop offset={`${(100 / Math.sqrt(2)).toFixed(2)}%`} stopColor="#ddd" />
          </radialGradient>
        </defs>
        <g transform="translate(150, 150)">
          <circle fill="url(#exampleGradient)" cx="0" cy="0" r={`${150 * Math.sqrt(2)}`} />
          {rs.map((r, i) => (<path key={r}
            fill="transparent"
            stroke={this.toColor(rs.length - i, rs.length)}
            d={`M0 -${r}
            L${r * sinThirdPI} -${r * cosThirdPI}
            L${r * sinThirdPI} ${r * cosThirdPI}
            L0 ${r}
            L-${r * sinThirdPI} ${r * cosThirdPI}
            L-${r * sinThirdPI} -${r * cosThirdPI}z`} />))}
          {as.map((a, i) => (<text className="abilities-text" key={a}
            x={`${130 * Math.cos(i * Math.PI / 3 - Math.PI / 2) - a.length * 8}`}
            y={`${130 * Math.sin(i * Math.PI / 3 - Math.PI / 2) + 7}`}
            textLength={`${a.length * 16}`}>{a}</text>))}
          <path fill="transparent" stroke="white" strokeWidth="2" d={`M0 -${100 * ps[0] / 5}
            L${100 * ps[1] / 5 * sinThirdPI} -${100 * ps[1] / 5 * cosThirdPI}
            L${100 * ps[2] / 5 * sinThirdPI} ${100 * ps[2] / 5 * cosThirdPI}
            L0 ${100 * ps[3] / 5}
            L-${100 * ps[4] / 5 * sinThirdPI} ${100 * ps[4] / 5 * cosThirdPI}
            L-${100 * ps[5] / 5 * sinThirdPI} -${100 * ps[5] / 5 * cosThirdPI}z`} />
        </g>
      </svg>
    );
  }
}

export { Abilities };