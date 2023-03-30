var spedata = require("../../../data/spes");
Page({
  data: {
  
  },
  change:function(e){
    var sid = e.currentTarget.dataset.speId;
    wx.navigateTo({
      url:"../detail/detail?sid=" + sid
    })
  },
  onLoad: function (options) {
    var gid = "spes_" + options.gid;
    var spes = spedata[gid];
    this.setData({ speKey: spes });
   
  },


  onShareAppMessage: function () {

  }
})