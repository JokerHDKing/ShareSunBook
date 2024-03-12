// pages/mine/userInfo/userInfo.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
import {updateUserInfo,getUserInfo} from "../../../api/user"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    reader:null,
    avatarUrl:defaultAvatarUrl,
    nickname:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let reader=wx.getStorageSync('reader')
    this.setData({
      reader:reader,
      avatarUrl:reader.image,
      nickname:reader.nickName
    })
    console.log(reader)
  },
  onChooseAvatar(e) {
    console.log(e);
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl:avatarUrl
    })
  },
  /**
   * 
   * 更新用户信息
   */
  formSubmit(e){
    var index = getCurrentPages();
    var prevPage = index[index.length - 2]; // 获取上一个页面实例对象
    var nickName=e.detail.value.nickname
    nickName=nickName.slice(0, 11)
    updateUserInfo({
      nickName:nickName,
      avatarUrl:this.data.avatarUrl,
      openid:this.data.reader.openid
    }).then(res=>{
      console.log("读者更新返回",res);
      if (res.errCode==0) {
        getUserInfo({
          openid:this.data.reader.openid
        }).then(res=>{
          console.log("更新用户信息返回",res)
          wx.setStorageSync("reader", res.reader);  
          wx.navigateBack({
            url:"/pages/mine/mine",
            success: function () {
              prevPage.onLoad(); // 执行上一页的onLoad函数
            }
          })    
        })
      }
      else{
        wx.showToast({
          title: '更新失败请稍后再试',
          duration: 2000
        })
      }

    })
  },
  /**
   * 退出登录
   */
  exit(){
    var index = getCurrentPages();
    var prevPage = index[index.length - 2]; // 获取上一个页面实例对象
    try {
      wx.setStorageSync('isLogin', false)
      // wx.removeStorageSync('reader')
      // wx.removeStorageSync('openid')
      // wx.removeStorageSync('session_key')
      wx.navigateBack({
        url:"/pages/mine/mine",
        success: function () {
          // prevPage.onLoad(); // 执行上一页的onLoad函数
          prevPage.onShow(); // 执行上一页的onLoad函数
        }
      })    
      
    } catch (e) {
      // Do something when catch error
    }
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