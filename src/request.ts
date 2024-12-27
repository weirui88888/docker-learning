import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_REQUEST_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'xdz' }
})

instance.interceptors.request.use(
  function (config) {
    // config.headers.Authorization = '3d895298c9b1eb23ce9f6205f86fbb91'
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    console.log(response)
    if (response.status === 200) return response.data
  },
  function (error) {
    console.log(error)
    return Promise.reject(error)
  }
)

export default instance
