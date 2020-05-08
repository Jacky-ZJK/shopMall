<template>
  <div id="detail-shop-info"> 
    <div class="detail-shop-img">
      <img :src="detailShopInfo.ShopImg" alt="">
    </div>
    <div class="detail-shop-name">
      <span>{{detailShopInfo.ShopName}}</span>
      <div class="comeIn">进店逛逛</div>
    </div>
    <div class="detail-shop-other">
      <div class="detail-shop-other-item">
        <span>描述相符</span>
        <i> {{detailShopInfo.ShopDesc}} </i>
      </div>
      <div class="detail-shop-other-item">
        <span>服务态度</span>
        <i> {{detailShopInfo.ShopServe}} </i>
      </div>
      <div class="detail-shop-other-item">
        <span>物流服务</span>
        <i> {{detailShopInfo.ShopTransfer}} </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    detailShopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  #detail-shop-info {
    margin: 10px 0;
    padding: 10px;
    background-color: #fff;
    overflow: hidden;
  }
  .detail-shop-img {
    width: 40px;
    height: 40px;
    float: left;
  }
  .detail-shop-img img {
    width: 100%;
    height: 100%;
  }
  .detail-shop-name {
    margin-left: 10px;
    float: left;
  }
  .comeIn {
    font-size: 12px;
    border: 1px solid #ff5500;
    border-radius: 4px;
    color: #ff5500;
  }
  .detail-shop-other {
    margin-top: 50px;
    display: flex;
  }
  .detail-shop-other-item {
    flex: 1;
    font-size: 12px;
    color: #999;
  }
  .detail-shop-other-item i {
    margin-left: 3px;
    color: #ff5500;
  }
</style>