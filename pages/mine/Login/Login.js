// pages/index/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 按钮
    btn_disabled:true,
    checked: false,
  },

 
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
 /**相关协议 法律文件 */
 bindAgreeChange: function (e) {
   console.log(e)
   if (!this.data.checked) {
     this.setData({
         btn_disabled: false,
         checked: true,
       }),
       console.log("已经勾选")
   } else {
     this.setData({
         btn_disabled: true,
         checked: false,
       }),
       console.log("取消勾选")
   }
 },
 /**
  * 跳转对应的协议页面
  */
 navTo1(){
   wx.navigateTo({
     url: '/pages/mine/accord/accord',
   })
 }
  ,
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