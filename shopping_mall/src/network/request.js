import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  })

  instance.interceptors.response.use(result => {
    return result
  })

  return instance(config)
}
