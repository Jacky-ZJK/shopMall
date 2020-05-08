<template>
  <div id="Home">
    <nav-bar> <h4 slot="center">购物街</h4> </nav-bar>
    <scroll 
    class="scroll" 
    ref="scroll" 
    :probeType="3" 
    :pullUpLoad="true" 
    @scroll="getPostion" 
    @pullingUp="pullingUp">
      <main-swiper/>
      <main-nav-list class="main-nav-list"/>
      <nav-control :datas="['推荐', '精选', '流行']" @navControlClick="navControlClick"/>
      <goods :goodsList="showGoods"/>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import MainSwiper from './MainSwiper'
import MainNavList from './MainNavList'
import NavControl from '@/components/content/navcontrol/NavControl'
import Goods from '@/components/content/goods/Goods'
import BackTop from '@/components/common/backtop/BackTop'

import Scroll from '@/components/common/scroll/Scroll'

import { getGoodsInfo } from '@/network/home'
import {itemListenerMixin} from '@/common/mixin'

export default {
  name: 'Home',
  data () {
    return {
      goodsList: {
        'recommend': {page: 0, list: []},
        'selection': {page: 0, list: []},
        'popular': {page: 0, list: []},
      },
      currentType: 'recommend',
      isShowBackTop: false,
      positionY: 0,
    }
  },
  components: {
    NavBar,
    MainSwiper,
    MainNavList,
    NavControl,
    Goods,
    BackTop,
    Scroll
  },
  computed: {
    showGoods () {
      return this.goodsList[this.currentType].list
    }
  },
  mixins: [itemListenerMixin],
  created () {
    this.getHomeGoodsInfo('recommend')
    this.getHomeGoodsInfo('selection')
    this.getHomeGoodsInfo('popular')
  },
  mounted () {
    
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.positionY)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.positionY = this.$refs.scroll.scroll.y

    this.$bus.$off('goodsItemImgLoad', this.itemImgListener)
  },
  methods: {
    navControlClick (index) { 
      switch (index) {
        case 0: 
          this.currentType = 'recommend'
          break
        case 1:
          this.currentType = 'selection'
          break
        case 2:
          this.currentType = 'popular'
          break
      }
    },
    getHomeGoodsInfo (type) {
      let page = this.goodsList[type].page
      getGoodsInfo (type, page).then(res => {
        this.goodsList[type].page +=1
        this.goodsList[type].list.push(...res.data)

        this.$refs.scroll.finishPullUp()
      })
    },
    backTopClick () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    getPostion (position) {
      this.isShowBackTop = position.y < -150
    },
    pullingUp () {
      this.getHomeGoodsInfo(this.currentType)
    }
  }
}
</script>

<style scoped>
  #Home {
    margin-top: 15%;
    margin-bottom: 18%;
    padding: 0 2%;
  }
  .nav-bar {
    color: #fff;
    background-color: hotpink;
    z-index: 9;
  }
  .main-nav-list {
    margin: 10px 0;
  }
  .scroll {
    position: absolute;
    top: 7%;
    bottom: 8%;
    left: 0;
    right: 0;
  }
</style>