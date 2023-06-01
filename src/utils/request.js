// 引⼊ axios
import axios from 'axios'

// axios.create() 可以使⽤⾃定义配置新建⼀个 axios 实例
const request = axios.create({
  baseURL: 'http://localhost:3000'
})

// 封装 URL 基地址检测函数
function getBaseURL(url) {
  if (url.startsWith('/boss')) {
    return 'http://eduboss.lagou.com'
  } else {
    return 'http://edufront.lagou.com'
  }
}

// 设置请求拦截器
request.interceptors.request.use(function (config) {
  // 根据请求的 URL 判断基地址，设置给 config.baseURL
  config.baseURL = getBaseURL(config.url)
  return config
})

export default request
