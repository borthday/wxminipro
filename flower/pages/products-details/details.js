// pages/products-details/details.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderId:0,
    index: 0,
    current: {},
    goods: [
      {
        img:'../../static/images/banner.jpg',
        title: '康乃馨',
        phone: '13316430662',
        content: 'ad卡打瞌睡大开大上看见大家撒肯定',
        id: 0
      },
      {
        img: '../../static/images/banner2.jpg',
        title: '山茶花',
        phone: '13316430662',
        content: '阿斯顿撒大多撒多',
        id:1
      },
      {
        img: '../../static/images/banner3.jpg',
        title: '牵牛花',
        phone: '13316430662',
        content: 'amSD卡没打卡的马上看到没声卡',
        id:2
      }
    ]
  },
  tel: function (e) {
    let phone = e.currentTarget.dataset.ph
    wx.makePhoneCall({
      phoneNumber: phone
    })
  },
  click (e) {
    let good = e.currentTarget.dataset.good
    this.setData({
      index: good.id,
      current: { ...good}
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options, this.data.goods)
    this.setData({
      orderId: options.id,
      current: this.data.goods[this.data.index]
    });
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
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain +'/order/list',
      data: {
        // token: wx.getStorageSync('token')
        token: ''
      },
      success: (res) => {
        wx.hideLoading();
        // if (res.data.code != 0) {
        //   wx.showModal({
        //     title: '错误',
        //     content: res.data.msg,
        //     showCancel: false
        //   })
        //   return;
        // }
        this.setData({
          
        });
      }
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