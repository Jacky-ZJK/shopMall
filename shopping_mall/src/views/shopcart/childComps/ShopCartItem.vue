<template>
  <div id="shop-cart-item">
    <input 
      type="checkbox" 
      name="product" 
      ref="input"
      :id="product.GoodsID" 
      :checked="product.checked"
      @click="inputClick">
    <img :src="product.GoodsPicSmall" alt="">
    <div class="content"> 
      <span class="text">{{product.GoodsTitle}}</span>
      <span class="price">￥{{product.GoodsPriceUser}}</span>
      <span class="count">x{{product.count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCartItem',
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    inputClick () {
      this.product.checked = this.$refs.input.checked
    }
  }
}
</script>

<style scoped>
  #shop-cart-item {
    display: flex;
    align-items:center;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  #shop-cart-item img{
   height: 80px;
   width: 60px;
  }
  #shop-cart-item input[type="checkbox"]{
   	zoom:150%;
    margin: 0 5px;  
  }
  .content {
    flex: 1;
  }
  .text {
    display: inline-block;
    margin-bottom: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  .price {
    color: #ff5500;
  }
  .count {
    float: right;
    margin-right: 10px;
  }
</style>