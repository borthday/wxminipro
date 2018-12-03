//app.js
App({
  onLaunch: function () {
    let that = this
    //  获取商城名称
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/config/get-value',
      data: {
        key: 'mallName'
      },
      success: function (res) {
        if (res.data.code == 0) {
          wx.setStorageSync('mallName', res.data.data.value);
        }
      }
    })
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/score/send/rule',
      data: {
        code: 'goodReputation'
      },
      success: function (res) {
        if (res.data.code == 0) {
          that.globalData.order_reputation_score = res.data.data[0].score;
        }
      }
    })
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/config/get-value',
      data: {
        key: 'recharge_amount_min'
      },
      success: function (res) {
        if (res.data.code == 0) {
          that.globalData.recharge_amount_min = res.data.data.value;
        }
      }
    })
    // 获取砍价设置
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/shop/goods/kanjia/list',
      data: {},
      success: function (res) {
        if (res.data.code == 0) {
          that.globalData.kanjiaList = res.data.data.result;
        }
      }
    })
    // let token = wx.getStorageSync('token')
    // if (!token) {
    //   that.goLoginPageTimeOut()
    //   return
    // }
    // wx.request({
    //   url: 'https://api.it120.cc/' + that.globalData.subDomain + '/user/check-token',
    //   data: {
    //     token: token
    //   },
    //   success: function (res) {
    //     if (res.data.code != 0) {
    //       wx.removeStorageSync('token')
    //       that.goLoginPageTimeOut()
    //     }
    //   }
    // })
  },
  goLoginPageTimeOut: function () {
    setTimeout(function () {
      wx.navigateTo({
        url: "/pages/authorize/index"
      })
    }, 1000)
  },
  globalData: {
    userInfo: null,
    subDomain: "monica",
    version: "4.0.0",
    shareProfile: '百款精品商品，总有一款适合您'
  }
})