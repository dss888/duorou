// pages/genus/genus.js
let gendata = require("../../../data/gens");
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  change: function (e) {
    // console.log(e);
    var gid = e.currentTarget.dataset.genId;
    wx.navigateTo({
      url:"../spes/spes?gid=" + gid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    // console.log(gendata.gens_f01);
    let fid = "gens_" + options.fid;
    let gens = gendata[fid];
    // console.log(gens);
    this.setData({
      genall: gens
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