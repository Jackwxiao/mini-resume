// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    name: '吴潇',
    spell: 'Wu Xiao',
    job: '前端工程师',
    tel: '15115809369',
    sex: "男",
    age: 25,
    email: 'pigxw06@163.com',
    address: '湖南省娄底市涟源市',
    skill: [
      {name: 'JavaScript', percent: 70},
      { name: 'HTML5&&CSS3', percent: 70 },
      { name: 'Vue', percent: 80 },
      { name: 'Node.js', percent: 50 },
    ],
    edu:[
      {
        school: '南华大学',
        major: '物联网工程',
        year: '2015.09-2019.07',
        desc: '物联网工程专业培养能够系统地掌握物联网的相关理论、方法和技能，具备通信技术、网络技术、传感技术等信息领域宽广的专业知识的高级工程技术人才。'
      }
    ],
    work:[
      {
        project:"WX-UI",
        duty: '前端负责人',
        cycle: '2019.11~12' ,
        desc: '使用 vue 2 制作的一些简单 UI 组件。包括按钮、输入框、网格、布局、Toast、Tabs、Popover、手风琴等。技术栈：Vue 2、npm 管理包、自动化测试等。使用 Travis CI 进行持续集成，有足够的单元测试。后续会改为 Vue Cli 3 以实现更多功能。'
      },
      {
        project: "小E随手记",
        duty: '前端负责人',
        cycle: '2020.04-05',
        desc: '小E随手记，这是根据我的实际随手记账需求基于React、React Router、自定义React Hooks、TypeScript以及Webpack4等实现的一款极简风格的记账应用， 完美适配移动端；通过实现实时记账功能、展示数据功能以及编辑标签页的功能让我对React和TypeScript有了更进一步的了解。'
      },
      {
        project: "xx电商后台管理系统",
        duty: '前端负责人',
        cycle: '2020.01-03',
        desc: '集合 Vue 全家桶 + Element-UI + Node 等技术开发完成的商城后台管理系统，前端部分由我自己开发完成，后台使用的是开源社区提供的数据和接口文档，最后通过 Express 创建 Web 服务器托管静态资源并通过 GitHub 部署上线。'
      },
      {
        project: "Vue 重写 CNode 社区",
        duty: '前端负责人',
        cycle: '2019.10-11',
        desc: '基于 CNode 社区，用 Vue 重写CNode社区，调用官网 API实现帖子列表、帖子详情、用户信息的查看及相关信息的获取， 使用 vue - cli快速搭建项目模板、使用Vuex 管理状态、Axios 完成与服务器端的数据交互、Vue-router实现页面跳转；在 CNode 官网提供的资料下由本人独自开发完成，可以实现点击帖子查看实时内容、点击头像查看用户基本信息等。'
      },
    ],
    work2:[
      {
        project: "Online resume",
        duty: '前端负责人',
        cycle: '2019.07-09',
        desc: ' 网页版动态简历，风格简洁，布局美观，原生 JS 开发，通过添加监听事件动态添加class来实现导航条的引导效果，引入tween.js实现点击导航menu滑动到相关部分的动画效果，使用Leancloud来管理数据从而实现留言板功能，前后端分离等；最后通过 MVC 设计思想对代码进行了模块化封装。'
      },
      {
        project: "兜兜画板",
        duty: '前端负责人',
        cycle: '2019.07',
        desc: 'PC端项目，移动端适配，主要调用 Canvas API 实现画线、颜色填充以及一键保存和清除等功能，原生 JavaScript DOM API操作以及事件监听等。可以在电脑和移动端画画写字，是一款比较方便实用的小工具。'
      },
      {
        project: "不会功夫的熊猫",
        duty: '前端负责人',
        cycle: '2019.09',
        desc: '通过原生 JS 动态展示 CSS 画熊猫的过程，主要思路是通过设置计时器、遍历预先写在preview标签内的代码，然后让其一行一行的显示到页面和添加到style标签内。添加了手动调速动画的功能。'
      },
      {
        project: "Apple slide",
        duty: '前端负责人',
        cycle: '2019.08',
        desc: '该项目是一个具有苹果风格的轮播项目，可以实现点击按钮自动切换到对应的图片，使用到 jQuery、CSS 3、ES6、DOM事件监听等技术完成制作。虽然是一个小东西，但通过这个项目让我对 jQuery、DOM事件等相关知识有了一些比较全面的了解。'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let width = wx.getSystemInfoSync().windowWidth
    let height = wx.getSystemInfoSync().windowHeight
    this.setData({
      width: width,
      height: height
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})