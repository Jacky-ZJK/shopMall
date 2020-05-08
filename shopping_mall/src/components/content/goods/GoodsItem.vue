<template>
  <div class="goods-item" @click="goodsItemClick">
    <div class="goods-item-img">
      <img :src="imgSrc" alt="" @load="itemImgLoad">
    </div>
    <div class="goods-item-text"><span> {{goodsList.GoodsTitle}} </span></div>
    <div class="goods-item-price">
      <span>￥</span>
      <span> {{goodsList.GoodsPriceUser}} </span>
      <span class="goods-item-price-payed">{{goodsList.GoodsOrderNum}}人已购买</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goodsList: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      
    }
  },
  computed: {
    imgSrc () {
      return this.goodsList.GoodsPicSmall && this.goodsList.GoodsPicSmall.split(';')[0]
    }
  },
  methods: {
    goodsItemClick () {
      this.$router.push({
        path: '/detail',
        query: {
          id: this.goodsList.GoodsID
        }
      })
    },
    itemImgLoad () {
      this.$bus.$emit('goodsItemImgLoad')
    }
  }
}
</script>

<style scoped>
  .goods-item {
    width: 48%;
    height: 210px;
    margin: 5px 0;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
  }
  .goods-item-img {
    height: 65%;
  }
  .goods-item-img img {
    width: 100%;
    height: 100%;
  }
  .goods-item-text {
    height: 15%;
    padding: 10px 7px;
  }
  .goods-item-text span {
    font-size: 12px;
    display: block;
    height: 100%;
    overflow: hidden;
    word-break: break-all;
  }
  .goods-item-price {
    color: #ff5500;
    padding-left: 5px; 
  }
  .goods-item-price-payed {
    color: #999;
    padding-left: 5px;
  }
</style>