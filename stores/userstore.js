// 导入 observable 函数用于创建可观察对象,对象中的数据被转换为响应数据
// 导入 action 修改 store 中的可观察状态
import { observable, action } from 'mobx-miniprogram'
import { getStorage } from '../utils/storage'
export const userStore= observable({
	//定义相应的数据
	token:getStorage('token') || '',
	openid:getStorage('openid') || '',
	//定义 action
	//利用SetToken来更新修改token(Session_key)
	
	setToken:action(function(token,openid){
		//在调用setToken 方法时，需要传入token数据进行赋值
		this.token=token
	})
})
