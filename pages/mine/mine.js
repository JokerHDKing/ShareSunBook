Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
    point:"100",
    prize:{
      type:Object,
      value:{
        title:"奖品名称",
        point:"50",
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  clickPic(e){
    if(! this.data.isLogin){
      console.log("点击头像",e);
      wx.navigateTo({
        url: '/pages/mine/Login/Login',
      })
    }
  },
  clickP(e){
    //传输一个ob对象
    var str=JSON.stringify(this.data.prize)
    console.log("我的积分");
    wx.navigateTo({
      url: '/pages/mine/PointExchange/PointExchange?point='+this.data.point+"&prize="+str,
    })

  },
  clickP1(e){
    console.log("我的积分1");

  },
  clickP2(e){
    console.log("我的积分2");

  },
  myBorrow(e){
    console.log("我的借阅");
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