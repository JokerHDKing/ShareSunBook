//用于首页显示书籍的api调用
import {request} from "../utils/request"
//获得Nav标签

//获得每个标签的书

//搜索书籍
export function searchBook(data){
	return request ({
		url:"/MBookInfo/search1",
		method:"GET",
		data:data
	})
}