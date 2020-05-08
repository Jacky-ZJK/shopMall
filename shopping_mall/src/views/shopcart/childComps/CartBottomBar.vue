<template>
  <div id="cart-bottom-bar">
    <div>
      <input type="checkbox" ref="input" :checked="isCheckedAll" @click="checkedAll">
      <span>全选</span>
    </div>
    <div class="totle-price">
      <span>合计</span>
      <span>￥</span>
      <span class="price">{{totlePrice}}</span>
    </div>
    <div class="pay" @click="toPayBtn">
      <span>去结算({{cartChecked}})</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  computed: {
    ...mapGetters([
      'cartList',
      'cartChecked'
    ]),
    isCheckedAll () {
      return !(this.cartList.filter(item => !item.checked).length)
    },
    totlePrice () {
      let totlePrice = 0
      this.cartList.forEach(item => {
        if (item.checked) {
          totlePrice += item.GoodsPriceUser * item.count
        }
      })

      return totlePrice
    }
  },
  methods: {
    checkedAll () {
      this.cartList.forEach(item => {
        item.checked = this.$refs.input.checked
      })
    },
    toPayBtn () {
      let ret = this.cartList.some(item => item.checked)
      if (!ret) {
        this.$toast.show('请选择要购买的商品', 2000)
      }
    }
  }
}
</script>

<style scoped>
  #cart-bottom-bar {
    height: 7%;
    width: 100%;
    position: absolute;
    bottom: 8%;

    display: flex;
    align-items:center; 
  }
  input[type="checkbox"]{
   	zoom:150%;
    margin: 0 5px;
    vertical-align: middle;
  }
  .totle-price {
    flex: 1;
    text-align: center;
  }
  .totle-price .price {
    color: #ff5500;
  }
  .pay {
    flex: 1;
    height: 100%;
    background-image: linear-gradient(to right, #FF7A00, #FE560A);
    text-align: center;
    display: flex;
    align-items:center; 
  }
  .pay span {
    flex: 1;
    font-size: 16px;
  }
</style>