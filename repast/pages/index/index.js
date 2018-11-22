//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bigImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3653844908,331289520&fm=27&gp=0.jpg',
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
    wx.navigateTo({
      url: '/pages/menu/menu',
    })
  },
  makePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '10086' //仅为示例，并非真实的电话号码
    })
  }
})
