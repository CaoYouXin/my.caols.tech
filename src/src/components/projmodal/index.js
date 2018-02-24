import './index.css';

import React, { Component } from 'react';

class ProjectModal extends Component {
  render() {
    const { title, completion, tags, value } = this.props;
    return (
      <div className="proj-modal-wrapper">
        <h5>职务</h5>
        <p>{title}</p>
        <h5>完成度</h5>
        <p>{completion}</p>
        <h5>技术Tags</h5>
        <p className="d-flex flex-wrap proj-modal-tags">
          {tags.map(tag => (<span key={tag} className="badge badge-warning">{tag}</span>))}
        </p>
        <h5>价值</h5>
        <p>
          <span className="badge badge-danger proj-modal-value">{value}</span>
        </p>
      </div>
    );
  }
}

export { ProjectModal };