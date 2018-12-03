//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bigImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1303554900,2466042767&fm=26&gp=0.jpg',
    pageHeight: ''
  },
  onLoad: function () {

  },
  onReady: function () {
    console.log(wx.getSystemInfoSync().windowHeight)
    this.setData({
      pageHeight: wx.getSystemInfoSync().windowHeight + 'px'
    })
  },
  goMenu: function () {
    wx.switchTab({
      url: '../menu/menu',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
    })
  },
  makePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '0755-888888'
    })
  }
})
