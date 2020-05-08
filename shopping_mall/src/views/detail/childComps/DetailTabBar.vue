<template>
  <div id="detail-tab-bar"> 
    <tab-bar>
      <tab-bar-item>
        <i class="el-icon-s-shop" slot="item-icon"></i>
        <div slot="item-text">店铺</div>
      </tab-bar-item>
      <tab-bar-item>
        <i class="el-icon-chat-dot-square" slot="item-icon"></i>
        <div slot="item-text">客服</div>
      </tab-bar-item>
      <tab-bar-item>
        <i class="el-icon-star-off" slot="item-icon"></i>
        <div slot="item-text">收藏</div>
      </tab-bar-item>
      <div class="bottom-bar-btn" @click="addCart">
        <div class="cart">
          <span>加入购物车</span>
        </div>
        <div class="buy">
          <span>立即购买</span>
        </div>
      </div>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: 'DetailTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
    addCart () {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar-btn {
    width: 60%;
    display: flex;
    line-height: 45px;
  }
  .bottom-bar-btn .cart,.bottom-bar-btn .buy {
    flex: 1;
    text-align: center;
    background-image: linear-gradient(to right, #FFC500, #FF9402);
  }
  .bottom-bar-btn .buy {
    background-image: linear-gradient(to right, #FF7A00, #FE560A);
  }
</style>