<template>
  <nav-bar class="nav-bar">
    <div slot="left" @click="backClick">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div slot="center" class="title">
      <div 
      class="item" 
      v-for="(item, index) in title" 
      :key="item"
      :class="{active: currentIndex === index}" 
      @click="navBarClick(index)"> {{item}} </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  data () {
    return {
      title: ['商品', '评论', '详情', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    navBarClick (index) {
      this.currentIndex = index

      this.$emit('detailItemClick', index)
    },
    backClick () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: #fff;
  }
  .title {
    display: flex;
  }
  .el-icon-arrow-left {
    font-size: 18px;
  }
  .item {
    flex: 1;
  }
  .active {
    color: deeppink;
  }
</style>