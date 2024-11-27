//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from './type'
//项目用户相关的请求地址
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

//登录接口   第一个data, 是 reqLogin 函数的参数，类型为 loginFormData。  第二个data是实际作为请求体发送的数据，它对应于 loginFormData 类型的数据。
export const reqLogin = (data: loginFormData) =>
  // 泛型参数<T,U>,
  // 第一个参数any表示这个 POST请求的 服务器 返回类型 可以是任何类型,占位.
  // 第二个参数loginResponseData表示这个 POST请求的 前端期望 响应数据类型 是loginResponseData
  //  为什么要使用泛型参数而不是直接loginResponseData.有个any可以保证请求的响应类型不确定时，仍然可以通过 any 保持灵活性，同时确保响应的数据结构符合预期
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
//获取用户信息
export const reqUserInfo = () =>
  request.get<any, userInfoReponseData>(API.USERINFO_URL)
//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
