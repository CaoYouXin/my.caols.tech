import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { test } from './actions'

import {
  PagerIndicator,
  Pager,
  Scene2d,
  scene2dFrame,
  Test
} from './components';

const Test1 = scene2dFrame(Test, { bgColor: '#000' });
const Test2 = scene2dFrame(Test, { bgColor: '#666' });
const Test3 = scene2dFrame(Test, { bgColor: '#ccc' });

class App extends Component {
  render() {
    return (
      <div>
        <Scene2d location={{ width: "100vw", height: "100vh" }}>
          <Test1 />
          <Test2 />
          <Test3 />
        </Scene2d>
        <PagerIndicator />
        <Pager />
      </div>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    test: () => dispatch(test())
  })
)(App);
