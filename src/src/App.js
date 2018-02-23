import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Demonstrations,
  Pager,
  Profile,
  Restart,
  Scene2d,
  scene2dFrame,
  Test
} from './components';

const ProfileFrame = scene2dFrame(Profile, 'g', 1, '#ddd');
const Test2 = scene2dFrame(Test, 'g', 2, '#666');
const Test3 = scene2dFrame(Test, 'g', 3, '#999');

class App extends Component {
  render() {
    return (
      <div className="root">
        <Scene2d location={{ width: "100vw", height: "100vh" }}>
          <ProfileFrame />
          <Test2 styles={{ color: '#999' }} />
          <Test3 styles={{ color: '#333' }} />
        </Scene2d>
        <Demonstrations />
        <Pager />
        <Restart />
      </div>
    );
  }
}

export default connect()(App);
