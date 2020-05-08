import { request } from './request'

export function getGoodsDetailInfo (id) {
  return request({
    url: 'http://localhost:3000/detail',
    params: {
      id
    }
  })
}