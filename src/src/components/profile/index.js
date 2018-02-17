import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hideIndicator } from '../../actions';

class InternalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frame1: false
    };
  }

  pleaseStartAnimation() {
    if (this.props.onload) {
      setTimeout((self) => {
        self.setState({
          frame1: true
        });
        self.props.loaded();
      }, 0, this);
    }
  }

  componentDidMount() {
    this.pleaseStartAnimation();
  }

  componentDidUpdate(prevProps, prevState) {
    this.pleaseStartAnimation();
  }

  render() {
    const { frame1 } = this.state;
    return (
      <div className="container profile">
        <div className="d-flex">
          <h1 className={`align-self-start ani ${frame1 ? '' : 'fade-in-right'}`}>曹力升</h1>
          <h6 className={`first-title badge badge-warning ml-auto align-self-end ani ${frame1 ? '' : 'fade-in-left'}`}>中南大学2013届毕业生</h6>
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