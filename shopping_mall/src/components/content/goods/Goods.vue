<template>
  <div class="goods">
      <goods-item 
      v-for="(item, index) in goodsList"  
      :goodsList="item" 
      :key="index"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'

export default {
  name: 'Goods',
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsItem
  }
}
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
  }
</style>