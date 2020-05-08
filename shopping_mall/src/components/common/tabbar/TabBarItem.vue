<template>
  <div class="tab-bar-item" :style="activeStyle" @click="btnClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'deeppink'
    }
  },
  computed: {
    activeStyle () {
      return this.$route.path.indexOf(this.path) === -1 ? {}:{color:this.activeColor}
    }
  },
  methods: {
    btnClick () {
      if (this.path === this.$route.path) return
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>

</style>