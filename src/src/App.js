import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Article,
  Contacts,
  Demonstrations,
  Pager,
  Profile,
  Projects,
  Restart,
  Scene2d,
  scene2dFrame,
  TechTree
} from './components';

const ProfileFrame = scene2dFrame(Profile, 'g', 1, '#ddd');
const ProjectsFrame = scene2dFrame(Projects, 'g', 2, '#eee');
const TechTreeFrame = scene2dFrame(TechTree, 'g', 3, '#ddd');
const ArticleFrame = scene2dFrame(Article, 'g', 4, '#eee');
const ContactsFrame = scene2dFrame(Contacts, 'g', 5, '#ddd');

class App extends Component {
  render() {
    return (
      <div className="root">
        <Scene2d location={{ width: "100vw", height: "100vh" }}>
          <ProfileFrame />
          <ProjectsFrame />
          <TechTreeFrame />
          <ArticleFrame />
          <ContactsFrame />
        </Scene2d>
        <Demonstrations />
        <Pager />
        <Restart />
      </div>
    );
  }
}

export default connect()(App);
