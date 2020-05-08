import debouns from './debouns'

export const itemListenerMixin = {
  data () {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    let refresh = debouns(() => {
      this.$refs.scroll.refresh()
      this.finishListener && this.finishListener()
    }, 50)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('goodsItemImgLoad', this.itemImgListener)
  }
}