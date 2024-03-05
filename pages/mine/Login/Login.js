// pages/index/login.js
//封装的通用模块方法
import {
  toast
} from "../../../utils/extendApi"
//导入本地存储Api
import {
  setStorage
} from "../../../utils/storage"
//接口Api函数
import {
  reqLogin
} from "../../../api/user"
// 导入 ComponentWithStore 方法
import { createStoreBindings} from 'mobx-miniprogram-bindings'
//导入 store 对象
import{ userStore} from "../../../stores/userstore"
var app = getApp()
var host = app.globalData.localHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 按钮
    openidT: "",
    phone: "",
    islogin: false,
    btn_disabled: true,
    checked: false,
    userInfo:{
      type:Object,
      value:{
        username:"默认名称"
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storeBindings=createStoreBindings(this,{
      store:userStore,
      fields:
      {
        token:() => userStore.token,
        openid:() =>userStore.openid
      },
      actions:["setToken"]
    })
  },
  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },

      /**
     * 登录
     */
    login(e) {
      // if(e.detail.errMsg)
      console.log("点击登录按钮");
      console.log(e);
      //登录 使用wx.login 获得用户的临时凭证
      wx.login({
        
       success: async ({
          code
        }) => {
          if (code) {
            console.log(code)
            // 在获取到临时登录凭证 code 以后，需要传递给开发者服务器
            const res = await reqLogin(code)
            //登录成功后将openid session_key存储到本地;将Session_key作为Token
            setStorage('openid', res.data.openid)
            setStorage('token', res.data.session_key)
            this.setData({
              openidT: res.data.openid
            })
            //将自定义登录态token 存储 Store 对象
            this.setToken(res.data.session_key,res.data.openid)
            
            //解析用户绑定的手机号码
            //解析手机号码
            wx.request({
              url: host + 'CReader/decodePhone',
              method: "GET",
              data: {
                iv: e.detail.iv,
                encryptedData: e.detail.encryptedData,
                session_key: res.data.session_key
              },
              success: res => {
                this.setData({
                  phone: res.data.data.phoneNumber
                })
              }
            })
            wx.navigateBack()({
              url: '/pages/mine/mine',
            })
          } else {
            toast({
              title: "授权失败，请重新授权"
            })
          }

        },
      })

    },
    /**
     * 相关协议 法律文件
     */
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
    navTo1() {
      wx.navigateTo({
        url: '/pages/mine/accord/accord',
      })
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
