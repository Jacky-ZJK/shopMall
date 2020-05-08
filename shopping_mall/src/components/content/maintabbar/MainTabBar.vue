<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <i class="el-icon-s-home" slot="item-icon"></i>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/menu">
        <i class="el-icon-menu" slot="item-icon"></i>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <i class="el-icon-shopping-cart-2" slot="item-icon"></i>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <i class="el-icon-user-solid" slot="item-icon"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>