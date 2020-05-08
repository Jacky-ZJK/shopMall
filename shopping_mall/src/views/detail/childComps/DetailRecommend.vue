<template>
  <div id="detail-recommend">
    <div class="divide-bar">
      <span class="line"></span>
      <div>
        <i class="el-icon-goods"></i>
        <span>推荐</span>
      </div>
      <span class="line"></span>
    </div>
    <div class="content">
      <p>看了又看</p>
      <goods :goodsList="goodsList"/>
    </div>
  </div>
</template>

<script>
import Goods from '@/components/content/goods/Goods'

export default {
  name: 'DetailRecommend',
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Goods
  }
}
</script>

<style scoped>
  .divide-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    font-size: 12px;
    padding-bottom: 5px;
  }
  .divide-bar .line {
    display: inline-block;
    width: 50px;
    border-top: 1px solid #999;
  }
  .content {
    padding: 10px;
    font-size: 12px;
    background-color: #fff;
  }
</style>