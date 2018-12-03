// pages/contactUs/contactUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageHeight: '',
    bannerImg: '../../images/contact-banner.png',
    longitude:'114.0598030000',
    latitude:'22.5337020000',
    markers: [{
      iconPath: "../../images/star.png",
      id: 0,
      latitude: 22.5337020000,
      longitude: 114.0598030000,
      width: 20,
      height: 20
    }]
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
    console.log(wx.getSystemInfoSync().windowHeight)
    this.setData({
      pageHeight: wx.getSystemInfoSync().windowHeight + 'px'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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