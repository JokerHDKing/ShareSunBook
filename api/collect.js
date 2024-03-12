//用于个人藏书页面的api调用
import {request} from "../utils/request"
export function queryBookInfo(){
	return request({
		url:"/CReader/code",
		method:"get",
		data:data
	})
}