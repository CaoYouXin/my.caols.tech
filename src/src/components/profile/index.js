import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hideIndicator } from '../../actions';

class InternalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frame1: false,
      frame2: false
    };
  }

  pleaseStartAnimation() {
    if (this.props.onload) {
      setTimeout((self) => {
        self.setState({
          frame1: true
        });
        self.props.loaded();
        setTimeout(this.frame2Start, 1000, self);
      }, 618, this);
    }
  }

  frame2Start(self) {
    self.setState({
      frame2: true
    });
  }

  componentDidMount() {
    if (this.props.load === true) {
      this.pleaseStartAnimation();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.load === false && this.props.load === true) {
      this.pleaseStartAnimation();
    }
  }

  render() {
    const { frame1, frame2 } = this.state;
    return (
      <div className="container profile">
        <div className="row">
          <div className="col-12 col-xl-4">
            <div className="d-flex title">
              <h1 className={`first-title align-self-start ani ${frame1 ? '' : 'fade-in-right'}`}>曹力升</h1>
              <h6 className={`first-title badge badge-warning ml-auto align-self-end ani ${frame1 ? '' : 'fade-in-left'}`}>中南大学2013年毕业生</h6>
            </div>
          </div>
          <div className={`d-none d-xl-block col-xl-8 ani ${frame2 ? '' : 'fade-in-up'}`}>
            <h3 className="class-record-title">我的成绩单</h3>
            <div class="table-responsive class-record-wrapper">
              <table class="table table-bordered table-dark table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Profile = connect(
  (store) => ({
    onload: store.indicators.load
  }),
  (dispatch) => ({
    loaded: () => dispatch(hideIndicator('load'))
  })
)(InternalProfile);

export { Profile };