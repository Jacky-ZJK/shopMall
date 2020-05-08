<template>
  <div id="detail">
    <detail-nav-bar ref="navBar" class="detail-nav-bar" @detailItemClick='detailItemClick'/>
    <scroll class="scroll" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :swiperImgs="goodsPicSmall"/>
      <detail-base-info :detailBaseInfo="detailBaseInfo"/>
      <detail-comment ref="comment" :detailComment="detailComment"/>
      <detail-shop-info :detailShopInfo="detailShopInfo"/>
      <detail-desc ref="desc" :goodsPicLarge="goodsPicLarge"/>
      <detail-recommend ref="recommend" :goodsList="detailRecommend"/>
    </scroll>
    <detail-tab-bar @addCart="addCart"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBarr'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailDesc from './childComps/DetailDesc'
import DetailComment from './childComps/DetailComment'
import DetailRecommend from './childComps/DetailRecommend'
import DetailTabBar from './childComps/DetailTabBar'

import Scroll from '@/components/common/scroll/Scroll'

import {getGoodsDetailInfo} from '@/network/detail'
import {itemListenerMixin} from '@/common/mixin'
import {mapActions, mapGetters} from 'vuex'
import debouns from '@/common/debouns'

import {
  SHOW_MAIN_TAB_BAR,
  UNSHOW_MAIN_TAB_BAR,
  ADD_CART  
} from '@/store/mutations-type'

export default {
  name: 'Detail',
  data () {
    return {
      goodsDetailInfo: {},
      scollYs: [0],
      getscollYs: null,
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailDesc,
    DetailComment,
    DetailRecommend,
    DetailTabBar,
    Scroll
  },
  computed: {
    goodsPicSmall () {
      return this.goodsDetailInfo.GoodsPicSmall
    },
    goodsPicLarge () {
      return this.goodsDetailInfo.GoodsPicLarge
    },
    detailBaseInfo () {
      return {
        GoodsTitle: this.goodsDetailInfo.GoodsTitle,
        GoodsPriceShop: this.goodsDetailInfo.GoodsPriceShop,
        GoodsPriceUser: this.goodsDetailInfo.GoodsPriceUser,
        GoodsPriceVIP: this.goodsDetailInfo.GoodsPriceVIP,
        GoodsBuyNum: this.goodsDetailInfo.GoodsBuyNum,
        GoodsStarNum: this.goodsDetailInfo.GoodsStarNum
      }
    },
    detailShopInfo () {
      return {
        ShopImg: this.goodsDetailInfo.ShopImg,
        ShopName: this.goodsDetailInfo.ShopName,
        ShopDesc: this.goodsDetailInfo.ShopDesc,
        ShopTransfer: this.goodsDetailInfo.ShopTransfer,
        ShopServe: this.goodsDetailInfo.ShopServe
      }
    },
    detailComment () {
      return this.goodsDetailInfo.comment
    },
    detailRecommend () {
      return this.goodsDetailInfo.recommend
    }
  },
  methods: {
    ...mapActions([

    ]),
    detailItemClick (index) {
      this.$refs.scroll.scrollTo(0, -this.scollYs[index])
    },
    finishListener () {
      this.scollYs = []
      this.scollYs.push(0)
      this.scollYs.push(this.$refs.comment.$el.offsetTop)
      this.scollYs.push(this.$refs.desc.$el.offsetTop)
      this.scollYs.push(this.$refs.recommend.$el.offsetTop)
    },
    contentScroll (position) {
      let positionY = -position.y
      for(let i = 0; i < this.scollYs.length; i++) {
        if (this.$refs.navBar.currentIndex !== i && ((i < this.scollYs.length - 1 && positionY >= this.scollYs[i] && positionY < this.scollYs[i + 1]) || (i === this.scollYs.length - 1 && positionY >= this.scollYs[i]))) {
          this.$refs.navBar.currentIndex = i
        }
      }
    },
    addCart () {
      if (this.$store.state.flag) {
        this.$store.state.flag = false

        let payload = {}
        payload.GoodsID = this.goodsDetailInfo.GoodsID
        payload.GoodsPicSmall = this.goodsDetailInfo.GoodsPicSmall[0]
        payload.GoodsTitle = this.goodsDetailInfo.GoodsTitle
        payload.GoodsPriceUser = this.goodsDetailInfo.GoodsPriceUser
        payload.checked = false

        this.$store.dispatch('addCart', payload).then(res => {
          this.$toast.show(res)
          
          setTimeout(() => {
            this.$store.state.flag = true
          },500)
        })
      }
    }
  },
  mixins: [itemListenerMixin],
  created () {
    getGoodsDetailInfo(this.$route.query.id).then(res => {
      console.log(res);
      this.goodsDetailInfo = res.data[0]
    })
    this.$store.commit(UNSHOW_MAIN_TAB_BAR)
  },
  mounted () {

  },
  destroyed () {
    this.$bus.$off('goodsItemImgLoad', this.itemImgListener)

    this.$store.commit(SHOW_MAIN_TAB_BAR)
  },
  beforeRouteUpdate (to, from, next) {
    getGoodsDetailInfo(to.query.id).then(res => {
      this.goodsDetailInfo = res.data[0]
      this.$refs.scroll.scrollTo(0, 0, 0)
      next()
    })
  }
}
</script>

<style scoped>
  #detail {
    overflow: hidden;
  }
  .detail-nav-bar {
    z-index: 9;
  }

  .scroll {
    position: absolute;
    top: 7%;
    bottom: 7%;
  }
</style>