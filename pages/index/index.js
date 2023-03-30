// index.js
// 获取应用实例
const app = getApp()
let fadata = require('../../data/family')
Page({
  data: {
  },
  change:function(e){
    // console.log(e.currentTarget.dataset.familyId);
    var fid = e.currentTarget.dataset.familyId;
    var urlto="";
    // 判断当前点击的id是否含有
    if(fid == "f01" || fid == "f03"){
      urlto = "./genus/genus?fid=" + fid
      // console.log(urlto);
    }else{
      urlto = "./spes/spes?gid=" + fid + "g01"
    }
    wx.navigateTo({
      url:urlto
    })

  },
 onLoad:function(options){
  //  console.log(fadata.familys);
  this.setData({fadataall:fadata.familys})
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
