import AoYa from './aoya.jpeg';
import YangAiChe from './yangaiche.jpg';
import MiQuaner from './miquaner.png';

export const data = {
  scene2d: {
    g: {
      cur: 0,
      moving: false,
      percentage: 0
    }
  },
  indicators: {
    load: false,
    pager: true,
    pagerHandles: true,
    demonstrations: true
  },
  projects: [
    {
      icon: MiQuaner,
      period: '2016-2017',
      company: '云南升钥信息科技有限公司',
      project: '觅券儿',
      title: '技术合伙人',
      completion: 'Java服务器和管理员网站系统均由我独立完成,安卓和iOS客户端在我的一位好朋友提供技术咨询支持下完成',
      tags: ['Spring Java', 'Bootstrap4', 'Android', 'iOS'],
      value: '2017\\昆明\\15%技术股'
    },
    {
      icon: YangAiChe,
      period: '2015-2016',
      company: '泊海融诚(北京)科技有限公司',
      project: '养爱车',
      title: '开发组H5端工程师',
      completion: '经历了从无到有,并且做过几次大的技术升级(模块化,多页整合为单页)',
      tags: ['Spring Java', 'H5', 'AngularJs', 'ReactJs'],
      value: '2016\\北京\\1.5W/月'
    },
    {
      icon: AoYa,
      period: '2013-2014',
      company: '广州百田',
      project: '奥雅之光',
      title: '开发组服务器端程序员',
      completion: '该项目在我去之前以及离开之后都存在了很长时间',
      tags: ['JavaSE', 'MVC', 'MySQL'],
      value: '2013\\广州\\10W/年'
    }
  ],
  techtrees: [
    null,
    {
      from: ['网络', '界面', '动画', '交互'],
      to: ['fetchAPIs', 'RestKit', 'Retrofit', 'Bootstrap4', 'SemanticUI', 'D3', 'TweenJS', 'HammerJS'],
      lines: [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 3],
        [1, 4],
        [2, 5],
        [2, 6],
        [3, 7]
      ]
    },
    {
      from: ['网络', '数据库', '线程池', '安全', '监控'],
      to: ['HttpComponent', 'JPA', 'Excutors', 'Spring Security', 'Spring Actuator'],
      lines: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4]
      ]
    },
    {
      from: ['bash'],
      to: ['rsync', 'ssh u@ip "bash -s" < b.sh &', 'nohup', 'curl', 'jq'],
      lines: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4]
      ]
    },
    {
      from: ['敏捷开发'],
      to: ['故事', '需求', '例会', '代码', '测试', '燃尽图', 'Bug'],
      lines: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [0, 6]
      ]
    }
  ]
};

export const purge = (data) => {
  data.animations = {};
  return data;
}