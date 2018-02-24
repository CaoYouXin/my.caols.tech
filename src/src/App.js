import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Demonstrations,
  Pager,
  Profile,
  Projects,
  Restart,
  Scene2d,
  scene2dFrame
} from './components';

const ProfileFrame = scene2dFrame(Profile, 'g', 1, '#ddd');
const ProjectsFrame = scene2dFrame(Projects, 'g', 2, '#eee');

class App extends Component {
  render() {
    return (
      <div className="root">
        <Scene2d location={{ width: "100vw", height: "100vh" }}>
          <ProfileFrame />
          <ProjectsFrame />
        </Scene2d>
        <Demonstrations />
        <Pager />
        <Restart />
      </div>
    );
  }
}

export default connect()(App);
