export default {
  cartLength (store) {
    return store.shopCart.length
  },
  cartList (store) {
    return store.shopCart
  },
  cartChecked (store) {
    return store.shopCart.filter(item => item.checked).length
  } 
}