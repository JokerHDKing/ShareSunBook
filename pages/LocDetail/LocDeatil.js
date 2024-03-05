// pages/LocDetail/LocDeatil.js
var schoolS;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      schoolArr:[{
        id:1,
        schoolName:"长江大学"
      },{
        id:2,
        schoolName:"江南大学"
      }],
      Svalue: '0',
      radio: '1',
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSchoolL()
  },
  //获得附近学校
  getSchoolL(e){
    console.log(this.data.schoolArr)
  },
  onChangeS(e){
    schoolS=e.detail
    console.log(schoolS);
  },
  ChooseS(event) {
    this.setData({
      radio: event.detail,
    });
  },
  onClick(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name,
    });
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