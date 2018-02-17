import './index.css';
import React, { Component } from 'react';

class InternalProfile extends Component {
  render() {
    return (
      <div className="container profile">
        <div className="d-flex">
          <h1 className="align-self-start">曹力升</h1>
          <h6 className="first-title badge badge-warning ml-auto align-self-end">中南大学2013届毕业生</h6>
        </div>
      </div>
    );
  }
}

const Profile = InternalProfile;

export { Profile };