import http from "../utils/http"

/**
 * @description 进行登录操作
 * @param {*} code  临时登录凭证
 * @return Promise
 */
export const reqLogin=(code) =>{
	return http.get(`/CReader/code?code=${code}`)
}