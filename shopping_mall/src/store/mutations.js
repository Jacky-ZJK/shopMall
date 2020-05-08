import {
  SHOW_MAIN_TAB_BAR,
  UNSHOW_MAIN_TAB_BAR,
  ADD_CART  
} from './mutations-type'

export default {
  [SHOW_MAIN_TAB_BAR] (store) {
    store.showMainTabBar = true
  },
  [UNSHOW_MAIN_TAB_BAR] (store) {
    store.showMainTabBar = false
  },
  [ADD_CART] (store, payload) {
    let temp = null
    for(let item of store.shopCart) {
      if (item.GoodsID === payload.GoodsID) {
        temp = item
      }
    }
    
    if (temp) {
      temp.count += 1
    } else {
      payload.count = 1
      store.shopCart.push(payload)
    }
  }
}