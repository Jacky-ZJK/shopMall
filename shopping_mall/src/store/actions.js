import {
  ADD_CART
} from './mutations-type'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit(ADD_CART, payload)
      resolve('添加购物车成功')
    })
  }
}