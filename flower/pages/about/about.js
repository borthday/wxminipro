let QQMapWX = require('../../static/libs/qqmap-wx/qqmap-wx-jssdk.js');
let qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    key: 'DHFBZ-N4VLX-PFT42-TXCKU-A3BA2-6XFNJ',
    scale: 17,
    address: '',
    latitude: "",
    longitude: "",
    about: 'http://huaduocai.oss-cn-qingdao.aliyuncs.com/Storage/subject/1/395006341369814120.jpg',
    phoneNumber: '13316430662',
    aboutOurs: '加上大大的你阿萨德撒大'
  },
  tel: function (e) {
    let phone = e.currentTarget.dataset.ph
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: this.data.key
    });
    let that = this
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        that.setData({
          latitude,
          longitude
        })
        // 使用腾讯地图 实现逆地理编码
        wx.request({
          url: 'http://apis.map.qq.com/ws/geocoder/v1/?l&get_poi=1',
          data: {
            "key": that.data.key,
            "location": latitude + ',' + longitude
          },
          method: 'GET',
          success: data => {
            console.log("请求数据:" + data.data.result.address);
            that.setData({
              address: data.data.result.address
            })
          },
          fail: () => {
            // fail
            console.log("请求失败");
          },
          complete: () => {
            // complete
            console.log("请求完成");
          }
        })
      }
    })
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
    // 调用接口
    qqmapsdk.search({
      keyword: '酒店',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
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