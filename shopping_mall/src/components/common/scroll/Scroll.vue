<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollTo (x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>