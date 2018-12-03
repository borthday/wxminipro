// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2433009038,3451832003&fm=26&gp=0.jpg',
    foodImgUrls: [
      {
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1851046772,1532392127&fm=27&gp=0.jpg',
        title: '波士顿龙虾',
        starNum: 5,
        des: '特色龙虾双人浪漫餐',
        price: '288.00'
      },
      {
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660868715,3297303764&fm=27&gp=0.jpg',
        title: '波士顿龙虾',
        starNum: 3,
        des: '特色龙虾双人浪漫餐',
        price: '288.00'
      },
      {
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3351374957,3310776641&fm=27&gp=0.jpg',
        title: '波士顿龙虾',
        starNum: 4,
        des: '特色龙虾双人浪漫餐',
        price: '288.00'
      },
      {
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1851046772,1532392127&fm=27&gp=0.jpg',
        title: '波士顿龙虾',
        starNum: 5,
        des: '特色龙虾双人浪漫餐',
        price: '288.00'
      },
      {
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660868715,3297303764&fm=27&gp=0.jpg',
        title: '波士顿龙虾',
        starNum: 3,
        des: '特色龙虾双人浪漫餐',
        price: '288.00'
      },
      {
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3351374957,3310776641&fm=27&gp=0.jpg',
        title: '波士顿龙虾',
        starNum: 5,
        des: '特色龙虾双人浪漫餐',
        price: '288.00'
      }
    ],
    pageHeight: ''
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