import './index.css';

import React, { Component } from 'react';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cur: 0,
      data: [
        { type: 'QQ', value: '954382491', caption: '我的手机上还登录着' },
        { type: 'Wechat', value: 'CelestialPowerUp', caption: '同它的缩写像CPU一样快' },
        { type: 'Email', value: '954382491@qq.com', caption: '不用Gmail只为了来件提醒' }
      ]
    };
  }

  render() {
    const { cur, data } = this.state;
    return (
      <div className="container">
        <div className="carousel slide">
          <ol className="carousel-indicators">
            {
              data.map((d, i) => (<li key={i} data-slide-to={i} className={`${cur === i ? "active" : ""}`}></li>))
            }
          </ol>
          <div className="carousel-inner">
            {
              data.map((d, i) => (
                <div key={i} className={`carousel-item w-100 mid box ${cur === i ? "active" : ""}`}>
                  <h3>{d.value}</h3>
                  <div className="carousel-caption">
                    <h5>{d.type}</h5>
                    <p>{d.caption}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <a className="carousel-control-prev" role="button"
            onClick={e => {
              if (cur > 0) {
                this.setState({ cur: cur - 1 });
              }
            }}>
            <span className="carousel-control-prev-icon"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" role="button"
            onClick={e => {
              if (cur < data.length - 1) {
                this.setState({ cur: cur + 1 });
              }
            }}>
            <span className="carousel-control-next-icon"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export { Contacts };