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
  ],
  article: [
    { type: 'title', value: '我的自述' },
    {
      type: 'paragraph', value: [
        { type: 'text', value: '原本要做以个动画、图形为主的网站,但是到头来还是免不了写些文字说明.' }
      ]
    },
    {
      type: 'paragraph', value: [
        { type: 'text', value: '这是我的' },
        { type: 'bold', value: '一份个人简历' },
        { type: 'text', value: '.' }
      ]
    },
    {
      type: 'paragraph', value: [
        { type: 'text', value: '第 1 页说明我的基本信息,虽然课程并不是最优,但是可以看出我热爱我的专业;虽然不擅长算法,但是仍然在通过' },
        { type: 'bold', value: 'leetcode' },
        { type: 'text', value: '努力.' }
      ]
    },
    {
      type: 'paragraph', value: [
        { type: 'text', value: '第 2 页说明我的工作经历,本来第一份工作已经可以让我按部就班的生活,但是直到现在我的生活发生过多次变故.至于我现在的求职心态稍后打印出来.' }
      ]
    },
    {
      type: 'paragraph', value: [
        { type: 'text', value: '第 3 页说明我的职业素养,显然由于多次变故,经历的岗位比较丰富.需要说明的是,我最热爱的是' },
        { type: 'bold', value: 'Web前端技术' },
        { type: 'text', value: '.' }
      ]
    },
    {
      type: 'paragraph', value: [
        { type: 'text', value: '当前页还是要请你耐心看完的,因为后面还有一页-我的联系方式' }
      ]
    },
    {
      type: 'paragraph', value: [
        { type: 'text', value: '目前我将生活分为' },
        { type: 'bold', value: '个人目标、个人使命、兴趣爱好' },
        { type: 'text', value: '三部分.我的目标是获得更好的收入来体验更优质的生活(车、房),使命是希望人类可以像三体人那样用脑电波交流、并减少幻觉对人类的困扰,而兴趣爱好则是呼吸吐纳、入静养神.' }
      ]
    },
    {
      type: 'paragraph', value: [
        { type: 'text', value: '好了,了解过我之后,愿不愿意跳转到最后一页好联系到我加入你们呢?' }
      ]
    }
  ]
};

export const purge = (data) => {
  data.animations = {};
  return data;
}