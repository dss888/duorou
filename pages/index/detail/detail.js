var speData = require("../../../data/spes");
Page({
  data: {

  },
  onLoad: function (options) {
    // console.log(options);
    var sid = options.sid;
    // console.log(sid);
    var gid = "spes_" + sid.substr(0, 6);
    // console.log(gid);
    var spes = speData[gid];
    // console.log(spes);
    var spedetail;
    spes.forEach(function (e) {
      // console.log(e);
      if (e.speId==sid){
        spedetail=e;
      }
    });
  
    this.setData(spedetail);
    // console.log(spedetail);
    wx.setNavigationBarTitle({
      title: spedetail.speName + '详情',
    })
  },

 /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }

})