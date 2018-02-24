import './index.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProjectModal } from '../projmodal';
import { nextAnimation, showIndicator } from '../../actions';
import { wrapAnimation } from '../../utils';

class InternalProject extends Component {
  render() {
    const { icon, period, company, project, idx, last, animations, nextAnimation, showPager } = this.props;
    return (
      <div className="col-12 col-lg-4 project-wrapper">
        <div className={`modal fade md-dialog-${idx}`} role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="project modal-content">
              <ProjectModal {...this.props} />
            </div>
          </div>
        </div>
        <div className={`row project-inner-wrapper ani ${animations[idx] ? '' : 'proj-in'}`}
          data-toggle="modal" data-target={`.md-dialog-${idx}`}
          onTransitionEnd={e => {
            if (idx === last) {
              showPager();
            } else {
              wrapAnimation('projects', idx, 1, 0, 2, nextAnimation)
            }
          }}>
          <div className="col-4">
            <img className="project-icon" src={icon} alt="项目图标" />
          </div>
          <div className="col-8">
            <h3>{project}</h3>
            <h6>{company}</h6>
            <span className="badge badge-warning">{period}</span>
          </div>
        </div>
        <div className={`d-none d-lg-block project-modal-wrapper ani ${animations[idx] ? '' : 'fade-in'}`}>
          <ProjectModal {...this.props} />
        </div>
      </div>
    );
  }
}

const Project = connect(
  (store) => ({
    animations: store.animations.projects || []
  }),
  (dispatch) => ({
    nextAnimation: () => dispatch(nextAnimation('projects')),
    showPager: () => dispatch(showIndicator('demonstrations', 'pager', 'pagerHandles'))
  })
)(InternalProject);

export { Project };