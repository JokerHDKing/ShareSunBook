/**
 * @description 消息提示框
 * @param { Object } options 参数和 wx.showToast 参数保持一致
 */
const toast = ({ title = '数据加载中...', icon = 'none', duration = 2000, mask = true } = {}) => {
  // 如果用户传入了对象作为参数
  // 在形参位置通过解构的方式获取用户传入的参数，同时设置默认值

  wx.showToast({
    title,
    icon,
    duration,
    mask
  })
}