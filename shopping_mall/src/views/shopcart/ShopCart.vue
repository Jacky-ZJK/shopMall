<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center"> 购物车({{cartLength}})</div>
    </nav-bar>
     <scroll class="scroll">
      <shop-cart-item 
        v-for="(item, index) in cartList" 
        :product="item" 
        :key="index" 
        ref="shopCartItem" />
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import ShopCartItem from './childComps/ShopCartItem'
import CartBottomBar from './childComps/CartBottomBar'
import Scroll from '@/components/common/scroll/Scroll'

import { mapGetters } from 'vuex'

export default {
  name: 'ShopCart',
  components: {
    NavBar,
    ShopCartItem,
    CartBottomBar,
    Scroll
  },
  computed: {
    ...mapGetters([
      'cartLength',
      'cartList'
    ])
  },
  methods: {

  }
}
</script>

<style scoped>
  .nav-bar {
    color: #fff;
    background-color: hotpink;
    z-index: 9;
  }
  .scroll {
    position: absolute;
    top: 8%;
    bottom: 16%;
    left: 0;
    right: 0;
  }
</style>