import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  PagerIndicator,
  Pager,
  Restart,
  Scene2d,
  scene2dFrame,
  Test
} from './components';

const Test1 = scene2dFrame(Test, 'g', 1, { bgColor: '#333' });
const Test2 = scene2dFrame(Test, 'g', 2, { bgColor: '#666' });
const Test3 = scene2dFrame(Test, 'g', 3, { bgColor: '#999' });

class App extends Component {
  render() {
    return (
      <div className="root">
        <Scene2d location={{ width: "100vw", height: "100vh" }}>
          <Test1 />
          <Test2 />
          <Test3 />
        </Scene2d>
        <PagerIndicator />
        <Pager />
        <Restart />
      </div>
    );
  }
}

export default connect()(App);
