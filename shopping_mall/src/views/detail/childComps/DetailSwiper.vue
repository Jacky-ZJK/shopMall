<template>
  <swiper>
    <swiper-item v-for="item in swiperImgs" :key="item" class="swiper-item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'

export default {
  name: 'DetailSwiper',
  props: {
    swiperImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
}
</script>

<style scoped>
  .swiper-item img{
    width: 100%;
    height: 100%;
  }
</style>