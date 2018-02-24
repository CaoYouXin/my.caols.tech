import './index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Project } from '../project';
import { nextAnimation } from '../../actions';

class InternalProjects extends Component {
  pleaseStartAnimation() {
    if (this.props.onload) {
      setTimeout(this.props.nextAnimation, 1000);
    }
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
    const { projects } = this.props;
    return (
      <div className="projects-wrapper container">
        <div className="projects-wrapper row">
          {projects.map((pData, i) => (<Project key={pData.project} {...pData} idx={i} last={projects.length - 1} />))}
        </div>
      </div>
    );
  }
}

const Projects = connect(
  (store) => ({
    onload: store.indicators.load,
    projects: store.projects
  }),
  (dispatch) => ({
    nextAnimation: () => dispatch(nextAnimation('projects'))
  })
)(InternalProjects);

export { Projects };