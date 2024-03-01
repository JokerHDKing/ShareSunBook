// pages/collector/AddBook/AddBook.js
import {queryBookInfo} from  "../../../api/collectorS"

let isbn;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BookInfo:{
      type:Object,
      Value:{
        book_name:"默认书名"
      }
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    isbn=options.isbn
    console.log(isbn);
    this.getBookInfo();
  },
/**
 * 获取书籍数据
 */
getBookInfo(){
  console.log("已经调用");
  queryBookInfo({
    "isbn":isbn
  }).then(res=>{
    this.setData({
      
    })
    console.log(res.data.ISBN);
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