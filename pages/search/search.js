// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyList:[],
    BookList:[],
    total:0,
    keyword:"",
    noData:false
    // value: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let searchKeyArr=wx.getStorageSync('searchKeyArr') || null
    if(searchKeyArr){
      this.setData({
        historyList:searchKeyArr
      })
    }
    console.log(searchKeyArr);
  },
/**
 * 当输入框改变时 
 */
  onChange(e) {
    // console.log(e);
    this.setData({
      keyword: e.detail,
    });
  },
 //清空输入框
 onClear(){
  this.setData({
    noData:false,
    keyword:"",
    productList:[],
    total:0
  })
},
 //点击搜索历史的每一项
 tapHisItem(e) {
     console.log(e);
     this.setData({
       keyword: e.currentTarget.dataset.value
     })
     this.getData();
   },
   //清空历史
   removeHistory() {
     this.setData({
       noData: false,
       historyList: [],
       total: 0,
       keyword: "",
       productList: []
     })
     wx.removeStorageSync('searchKeyArr')
   },
  //确认搜索
  onSearch(e) {
    console.log(this.data.keyword);
    let hisArr=this.data.historyList || [];
    // 去重，裁剪
    hisArr.unshift(this.data.keyword);
    hisArr=[...new Set(hisArr)]
    hisArr.slice(0,10)
    this.setData({
      historyList:hisArr
    })
    wx.setStorageSync('searchKeyArr', hisArr);

  },
  //获取搜索的书籍
  getData(){

  },
  onClick() {

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