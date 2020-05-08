import { request } from './request'

export function getGoodsInfo (type, page) {
  return request({
    url: 'http://localhost:3000/home',
    params: {
      type,
      page
    }
  })
}