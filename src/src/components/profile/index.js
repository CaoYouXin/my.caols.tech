import './index.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hideIndicator } from '../../actions';

class InternalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frame1: false,
      frame2: false
    };

    this.frame1Start = this.frame1Start.bind(this);
    this.frame2Start = this.frame2Start.bind(this);
  }

  pleaseStartAnimation() {
    if (this.props.onload) {
      setTimeout(this.frame1Start, 1000);
    }
  }

  frame1Start() {
    this.setState({
      frame1: true
    });
    this.props.loaded();
    setTimeout(this.frame2Start, 1000);
  }

  frame2Start() {
    this.setState({
      frame2: true
    });
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
    const { frame1, frame2 } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4">
            <div className="d-flex profile">
              <h1 className={`first-title align-self-start ani ${frame1 ? '' : 'fade-in-right'}`}>曹力升</h1>
              <h6 className={`first-title badge badge-warning ml-auto align-self-end ani ${frame1 ? '' : 'fade-in-left'}`}>中南大学2013年毕业生</h6>
            </div>
          </div>
          <div className={`d-none d-xl-block col-xl-8 ani ${frame2 ? '' : 'fade-in-up'}`}>
            <h3 className="class-record-title">我的成绩单</h3>
            <div class="table-responsive class-record-wrapper">
              <table class="table table-sm table-bordered table-dark table-hover">
                <caption>仅包含主要科目</caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">科目</th>
                    <th scope="col">成绩</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-dark text-white">
                    <th scope="row">1-1-1</th>
                    <td>基础英语-1</td>
                    <td>92</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">1-2-2</th>
                    <td>C/C++程序设计基础</td>
                    <td>84</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">1-3-3</th>
                    <td>C/C++程序设计实践</td>
                    <td>优秀</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">1-4-4</th>
                    <td>英语听说-1</td>
                    <td>93</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">1-5-5</th>
                    <td>计算机系统基础SSD2</td>
                    <td>79</td>
                  </tr>
                  <tr>
                    <th scope="row">2-1-6</th>
                    <td>基础英语-2</td>
                    <td>77</td>
                  </tr>
                  <tr>
                    <th scope="row">2-2-7</th>
                    <td>信息系统基础SSD1</td>
                    <td>85</td>
                  </tr>
                  <tr>
                    <th scope="row">2-3-8</th>
                    <td>软件实用技术实践1</td>
                    <td>及格</td>
                  </tr>
                  <tr>
                    <th scope="row">2-4-9</th>
                    <td>英语听说-2</td>
                    <td>91</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">3-1-10</th>
                    <td>基础英语-3</td>
                    <td>81</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">3-2-11</th>
                    <td>操作系统</td>
                    <td>81</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">3-3-12</th>
                    <td>算法分析与设计</td>
                    <td>83</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">3-4-13</th>
                    <td>汇编语言程序设计</td>
                    <td>86</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">3-5-14</th>
                    <td>用户界面设计与评价SSD4</td>
                    <td>79</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">3-6-15</th>
                    <td>软件实用技术实践2</td>
                    <td>优秀</td>
                  </tr>
                  <tr>
                    <th scope="row">4-1-16</th>
                    <td>数据库系统SSD7</td>
                    <td>87</td>
                  </tr>
                  <tr>
                    <th scope="row">4-2-17</th>
                    <td>软件工程工具与环境实践</td>
                    <td>中等</td>
                  </tr>
                  <tr>
                    <th scope="row">4-3-18</th>
                    <td>计算机网络原理</td>
                    <td>83</td>
                  </tr>
                  <tr>
                    <th scope="row">4-4-19</th>
                    <td>计算机图形学</td>
                    <td>83</td>
                  </tr>
                  <tr>
                    <th scope="row">4-5-20</th>
                    <td>编译原理</td>
                    <td>86</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">5-1-21</th>
                    <td>软件体系结构</td>
                    <td>73</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">5-2-22</th>
                    <td>科研训练</td>
                    <td>良好</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">5-3-23</th>
                    <td>软件测试技术</td>
                    <td>85</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">5-4-24</th>
                    <td>大型数据库技术</td>
                    <td>75</td>
                  </tr>
                  <tr class="bg-dark text-white">
                    <th scope="row">5-5-25</th>
                    <td>软件开发架构平台技术</td>
                    <td>77</td>
                  </tr>
                  <tr>
                    <th scope="row">6-1-26</th>
                    <td>软件项目组织与管理SSD10</td>
                    <td>84</td>
                  </tr>
                  <tr>
                    <th scope="row">6-2-27</th>
                    <td>软件工程实训</td>
                    <td>良好</td>
                  </tr>
                  <tr>
                    <th scope="row">6-3-28</th>
                    <td>软件度量及应用</td>
                    <td>88</td>
                  </tr>
                  <tr>
                    <th scope="row">6-4-29</th>
                    <td>CMM与ISO9000</td>
                    <td>92</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Profile = connect(
  (store) => ({
    onload: store.indicators.load
  }),
  (dispatch) => ({
    loaded: () => dispatch(hideIndicator('load'))
  })
)(InternalProfile);

export { Profile };