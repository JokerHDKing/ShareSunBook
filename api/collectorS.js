import {request} from "../utils/request"

//查询书籍信息
export function queryBookInfo(data) {
	return request({
		url: 'FBook/Find',
		method:"GET",
		data:data
	})
	
}