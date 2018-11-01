import axios from 'axios'
import qs from 'qs'

let request = axios.create({
  baseURL: 'https://iteastyle-api.aimeow.com/',
  timeout: 1000
})

request.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

export default request
