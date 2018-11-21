// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../static/images/banner.jpg',
      '../../static/images/banner2.jpg',
      '../../static/images/banner3.jpg'
    ],
    videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    flows: [
      {
        url: '../../static/images/flows.jpg',
        id: '1'
      },
      {
        url: '../../static/images/flows1.jpg',
        id: '2'
      }
    ],
    indicatorDots: true, // 显示小点
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  details: function(e) {
    wx.navigateTo({
      url: '/pages/products-details/details?id=' + e.currentTarget.dataset.id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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