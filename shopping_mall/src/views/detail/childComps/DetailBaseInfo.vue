<template>
  <div id="detail-base-info">
    <div class="detail-price">
      <span>￥</span>
      <span> {{goodsPrice}} </span>
      <div class="old-price">
        <span>价格：</span><i>￥{{goodsOldPrice}}</i>
      </div>
    </div>
    <div class="detail-title "><span> {{detailBaseInfo.GoodsTitle}} </span></div>
    <div class="detail-others">
      <div class="detail-others-item"><i class="el-icon-share"></i> <span>分享</span></div>
      <div class="detail-others-item">月销 <span>{{detailBaseInfo.GoodsBuyNum}}</span></div>
      <div class="detail-others-item"><i class="el-icon-star-off"></i> <span>{{detailBaseInfo.GoodsBuyNum}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    detailBaseInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    goodsPrice () {
      if (this.detailBaseInfo.GoodsPriceUser) {
        return this.detailBaseInfo.GoodsPriceUser.toFixed(2)
      }
    },
    goodsOldPrice () {
      if (this.detailBaseInfo.GoodsPriceShop) {
        return this.detailBaseInfo.GoodsPriceShop.toFixed(2)
      }
    }
  }
}
</script>

<style scoped>
  #detail-base-info {
    color: #000;
    background-color: #fff;
    padding: 10px 0;
  }
  .detail-title {
    padding: 10px 7px;
  }
  .detail-title span {
    font-size: 14px;
    font-weight: 500;
    display: inline-block;
    width: 90%;
    overflow: hidden;
    word-break: break-all;
  }

  .detail-price {
    color: #ff5500;
    padding-left: 5px; 
    font-size: 18px;
  }
  .detail-price .old-price {
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
  }
  .detail-others {
    display: flex;
    font-size: 12px;
    color: #999;
    text-align: center;
  }
  .detail-others-item {
    flex: 1
  }
</style>