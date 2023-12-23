// axios
import axios from 'axios'

export const baseURL = 'http://localhost:8080'
export const CONTENT_TYPE = 'Content-Type'
export const FORM_URLENCODED = 'application/x-www-form-urlencoded; charset=UTF-8'
export const APPLICATION_JSON = 'application/json; charset=UTF-8'
export const TEXT_PLAIN = 'text/plain; charset=UTF-8'

// 创建axios实例
const service = axios.create({
    baseURL: baseURL, // url = base url + request url
    timeout: 60000 // request timeout
})
// request拦截器
service.interceptors.request.use(
    config => {
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)
export default service