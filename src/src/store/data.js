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
  ]
};

export const purge = (data) => {
  data.animations = {};
  return data;
}