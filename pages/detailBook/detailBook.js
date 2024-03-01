// pages/detailBook/detailBook.js
var app=getApp()
var host=app.globalData.localHost;
let bookid
Page({
  /**
   * 页面的初始数据
   */
  data: {
    book:{
      type:Object,
      value:{
      }
    },
    bookinfo:{
          type:Object,
          value:{
          }
        },
    category:"",
  },
  /**
   * 生命周期函数--监听页面加载
   */
   onLoad(options) {
      bookid=options.id
      console.log(bookid);  
       this.getBookDetail();

  },
  /**
   * 自定义函数
   */
  //获取书籍详情
   getBookDetail(){
    //书籍的名称
     wx.request({
      url: host+'MBookInfo/find',
      method:"GET",
      data:{
        sku:bookid
      },
      success:res=>{
        // console.log(res);
        res.data.publish_time=res.data.publish_time.substring(0, 10)
        this.setData({
          book:res.data,
          category:res.data.category
        })
        wx.setNavigationBarTitle({
          title:res.data.book_name
        })
        if(this.data.category){
          this.getCat();
        }
      }
    })
    //书籍的简介
      wx.request({
      url: host+'MBookBigFieldinfo/'+bookid,
      method:"GET",
      success:res=>{
        res.data.catalogue=res.data.catalogue.replace(/&lt;br&gt;/g,  '<br>');  
        // res.data.book_abstract=res.data.book_abstract.replace(/&lt;br&gt;/g,  '<br>');  
        this.setData({
          bookinfo:res.data
        })
      }
    })
  },
  //获得书籍分类
  getCat(){
    console.log("查询该书的类别");
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