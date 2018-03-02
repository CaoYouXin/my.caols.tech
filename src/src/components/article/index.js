import './index.css';

import BgMusic from "./sound.mp3";

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showIndicator } from '../../actions';

class InternalArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curNode: 0,
      curSubNode: 0,
      value: '',
      printing: false
    };
  }

  componentWillUnmount() {
    this.stopTick()
  }

  startTick() {
    this.setState({ printing: true });
    this.interval = setInterval(this.tick, 100, this);
    this.audioEl.play();
  }

  stopTick() {
    clearInterval(this.interval);
    this.audioEl.pause();
    this.props.showPager();
  }

  tick(self) {
    const { article } = self.props;
    const { curNode, curSubNode, value } = self.state;
    const node = article[curNode];

    if (!node) {
      self.stopTick();
      return;
    }

    switch (node.type) {
      case 'title':
        if (node.value === value) {
          self.setState({
            curNode: curNode + 1,
            curSubNode: 0,
            value: ''
          });
          return;
        }
        self.setState({
          value: node.value.substring(0, value.length + 1)
        });
        return;
      case 'paragraph':
        const subNode = node.value[curSubNode];
        if (!subNode) {
          self.setState({
            curNode: curNode + 1,
            curSubNode: 0,
            value: ''
          });
          return;
        }

        if (subNode.value === value) {
          self.setState({
            curSubNode: curSubNode + 1,
            value: ''
          });
          return;
        }

        self.setState({
          value: subNode.value.substring(0, value.length + 1)
        });
        return;
      default:
        return;
    }
  }

  bgSubRender(subNode) {
    switch (subNode.type) {
      case 'text':
        return (<span key={subNode.value}>{subNode.value}</span>);
      case 'bold':
        return (<b key={subNode.value}>{subNode.value}</b>);
      default:
        return (<span></span>);
    }
  }

  bgRender(node) {
    switch (node.type) {
      case 'title':
        return (<h1 key={node.value}>{node.value}</h1>);
      case 'paragraph':
        const key = node.value.reduce((p, c) => p + c.value, '');
        return (
          <p key={key}>
            {
              node.value.map(subNode => this.bgSubRender(subNode))
            }
          </p>
        );
      default:
        return (<div></div>);
    }
  }

  ftSubRender(subNode, value) {
    if (!subNode) {
      return (<span></span>);
    }

    switch (subNode.type) {
      case 'text':
        return (<span key={subNode.value}>{value}</span>);
      case 'bold':
        return (<b key={subNode.value}>{value}</b>);
      default:
        return (<span></span>);
    }
  }

  ftRender(node, value, curSubNode) {
    if (!node) {
      return (<div></div>);
    }

    switch (node.type) {
      case 'title':
        return (<h1 className="article-printing" key={node.value}>{value}</h1>);
      case 'paragraph':
        const key = node.value.reduce((p, c) => p + c.value, '');
        return (
          <p className="article-printing" key={key}>
            {
              node.value.slice(0, curSubNode).map(subNode => this.bgSubRender(subNode))
            }
            {
              this.ftSubRender(node.value[curSubNode], value)
            }
          </p>
        );
      default:
        return (<div></div>);
    }
  }

  render() {
    const { article } = this.props;
    const { curNode, curSubNode, value, printing } = this.state;
    return (
      <div className="container article-wrapper">
        <audio loop ref={(audio) => { this.audioEl = audio }} src={BgMusic}></audio>
        <div className="bg-article">
          {
            article.map(node => this.bgRender(node))
          }
        </div>
        <div className="ft-article">
          {
            article.slice(0, curNode).map(node => this.bgRender(node))
          }
          {
            this.ftRender(article[curNode], value, curSubNode)
          }
        </div>
        <div className={`handle mid box ${printing ? 'd-none' : 'd-block'}`}>
          <button type="button" className="btn btn-primary" onClick={e => this.startTick()}>开始阅读</button>
        </div>
      </div>
    );
  }
}

const Article = connect(
  (store) => ({
    article: store.article
  }),
  (dispatch) => ({
    showPager: () => dispatch(showIndicator('demonstrations', 'pager', 'pagerHandles'))
  })
)(InternalArticle);

export { Article };