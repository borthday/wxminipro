// pages/contactUs/contactUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [
      { name: 'buy', value: '购买产品' },
      { name: 'evaluate', value: '产品评价' },
      { name: 'distribution', value: '产品分销' }
    ],
    pageHeight: '',
    nameIptValue:'',
    phoneIptValue: '',
    msgIptValue: '',
    radioValue:''
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
  getNameValue: function (e) {
    // 获取姓名
    console.log(e,'getNameValue')
    this.setData({
      nameIptValue: e.detail.value
    })
  },
  getPhoneValue: function (e) {
    // 获取电话
    console.log(e, 'getPhoneValue')
    this.setData({
      phoneIptValue: e.detail.value
    })
  },
  getMsgValue: function (e) {
    // 获取留言
    console.log(e, 'getMsgValue')
    this.setData({
      msgIptValue: e.detail.value
    })
  },
  radioChange:function(e){
    // 获取radio值
    console.log(e.detail.value,'radioChange')
    this.setData({
      radioValue: e.detail.value
    })
  },
  formSubmit: function (e) {
    //表单提交
    let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    console.log(this.data.nameIptValue, this.data.phoneIptValue, this.data.msgIptValue, this.data.radioValue);
    if (!this.data.nameIptValue){
      wx.showToast({
        title: '请输入姓名',
        icon: 'none',
        duration: 2000
      })
      return false;
    } else if (!phoneReg.test(this.data.phoneIptValue)){
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 2000
      })
      return false;
    } else if (!this.data.radioValue) {
      wx.showToast({
        title: '请勾选咨询需求',
        icon: 'none',
        duration: 2000
      })
      return false;
    } else if (!this.data.msgIptValue) {
      wx.showToast({
        title: '请输入留言',
        icon: 'none',
        duration: 2000
      })
      return false;
    }else{
      console.log('马上提交');
    }
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