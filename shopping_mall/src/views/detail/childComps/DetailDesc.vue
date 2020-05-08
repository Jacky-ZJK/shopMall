<template>
  <div id="detail-desc">
    <div class="divide-bar">
      <span class="line"></span>
      <div>
        <i class="el-icon-picture"></i>
        <span>详细</span>
      </div>
      <span class="line"></span>
    </div>
    <img v-for="item in goodsPicLarge" :key="item" :src="item" alt="">
  </div>
</template>

<script>
export default {
  name: 'DetailDesc',
  props: {
    goodsPicLarge: {
      type: Array,
      default () {
        return []
      }
    }
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
  #detail-desc img {
    width: 100%;
  }
</style>