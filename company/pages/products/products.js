// pages/products/products.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productsImgUrls: [{
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=9926823,635137122&fm=11&gp=0.jpg',
        title: '欧文01',
        description: '1111111'
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3619072099,1227577152&fm=26&gp=0.jpg',
        title: '欧文02',
        description: '222222'
      },
      {
        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2386624185,1946085273&fm=11&gp=0.jpg',
        title: '欧文03',
        description: '333333'
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1079757391,2635990382&fm=26&gp=0.jpg',
        title: '欧文04',
        description: '4444444'
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=9926823,635137122&fm=11&gp=0.jpg',
        title: '欧文01',
        description: '1111111'
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3619072099,1227577152&fm=26&gp=0.jpg',
        title: '欧文02',
        description: '222222'
      },
      {
        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2386624185,1946085273&fm=11&gp=0.jpg',
        title: '欧文03',
        description: '333333'
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1079757391,2635990382&fm=26&gp=0.jpg',
        title: '欧文04',
        description: '4444444'
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=9926823,635137122&fm=11&gp=0.jpg',
        title: '欧文01',
        description: '1111111'
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3619072099,1227577152&fm=26&gp=0.jpg',
        title: '欧文02',
        description: '222222'
      },
      {
        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2386624185,1946085273&fm=11&gp=0.jpg',
        title: '欧文03',
        description: '333333'
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1079757391,2635990382&fm=26&gp=0.jpg',
        title: '欧文04',
        description: '4444444'
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },
  goDetail:function(e){
    let imgUrl = e.currentTarget.dataset.url;
    let detailTitle = e.currentTarget.dataset.title;
    let detailDes = e.currentTarget.dataset.description;
    wx.navigateTo({
      url: '../productsDetail/productsDetail?imgUrl='+imgUrl+'&title='+detailTitle+'&description='+detailDes
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})