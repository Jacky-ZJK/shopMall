<template>
  <div>
    <swiper>
      <swiper-item>
        <img src="http://localhost:3000/images/home/swiper/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="http://localhost:3000/images/home/swiper/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="http://localhost:3000/images/home/swiper/3.jpg" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'

export default {
  name: 'MainSwiper',
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>